// 1. STATE & INITIALIZATION

let cartCount = parseInt(localStorage.getItem("luxeCartCount")) || 0; //check if they had items from a previous session using browsers local storage
let cartItems = JSON.parse(localStorage.getItem("luxeCartItems")) || [];

const categoriesList = [
  "Watches",
  "Handbags",
  "Perfumes",
  "Sunglasses",
  "Jewelry",
  "Tech",
  "Home",
  "Flowers",
  "Stationery",
  "Wellness",
  "Baby",
  "Drinkware",
  "Accessories",
];
document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadFooter();

  if (typeof products !== "undefined") {
    populateStorefront();
  } else {
    console.error("Products not found. Ensure products.js is loaded.");
  }
});

// 2. DYNAMIC STOREFRONT

/*
  Builds the entire shop interface by dynamically building rows for each category.
*/
function populateStorefront() {
  // Identify the element in the HTML where the products are displayed
  const storefrontContainer = document.getElementById("storefront");

  // If the container isn't on the current page, stop the function
  if (!storefrontContainer) return;

  // Clear out any existing content to prevent duplication on re-renders
  storefrontContainer.innerHTML = "";

  // Iterate through the pre-defined categories list to build the rows
  categoriesList.forEach((category) => {
    // Grab only products that belong to the current category in the loop
    const categoryProducts = products.filter((p) => p.category === category);

    // Skip creating a row if no products exist for this category
    if (categoryProducts.length === 0) return;

    // Convert category names (e.g., "Luxe Tech") to IDs (e.g., "luxe-tech")
    const baseKey = category.toLowerCase().replace(" ", "-");

    // ELEMENT CREATION: Generate a new <section> for this specific category
    const section = document.createElement("section");
    section.className = "category-row";
    section.id = `section-${baseKey}`;

    // PRODUCT ACCUMULATOR: Build a massive string of HTML for every product in the category
    let productsHTML = "";
    categoryProducts.forEach((product) => {
      // We use Template Literals (``) to inject data directly into the HTML structure
      productsHTML += `
            <div class="luxe-product-card" id="card-${product.id}">
                <div class="luxe-img-box">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="luxe-info">
                    <div class="luxe-price">
                         Ksh ${product.price.toLocaleString()}
                    </div>
                    <span class="luxe-name">${product.name}</span>
                </div>
                <button class="luxe-add-btn" onclick="addToCart('${product.name}')">
                    <i class="fa-solid fa-plus"></i> Add
                </button>
            </div>
      `;
    });

    // 8. INNER HTML INJECTION: Combine the category header with the scrollable product track
    section.innerHTML = `
            <div class="row-header">
                <h3>${category}</h3>
                <a href="#" class="view-all-app">See All</a>
            </div>
            <div class="app-scroll-track" id="${baseKey}-track">
                ${productsHTML}
            </div>
        `;

    //  Physically attach the newly built category section to the live website
    storefrontContainer.appendChild(section);
  });
}
// 3. CART LOGIC

/*
  Synchronizes the UI with the current state of the cart.
  Calculates the total quantity and triggers a visual feedback animation.
*/
function updateCartDisplay() {
  // Target the badge element (usually in the header)
  const cartElement = document.getElementById("cart-count");
  
  if (cartElement) {
    // It sums the 'qty' property of every object in the cartItems array.
    // Logic: total = item1.qty + item2.qty + ... starting from 0.
    const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
    
    // Reflect the new total in the UI
    cartElement.innerText = totalItems;

    // Provide visual confirmation of the action.
    // Temporarily scale up the element to 120% size.
    cartElement.style.transform = "scale(1.2)";
    
    // After 200ms, scale it back to normal size.
    // This creates a "pulse" or "pop" effect that draws the user's eye.
    setTimeout(() => (cartElement.style.transform = "scale(1)"), 200);
  }
}

/*
  Global function to handle adding products to the shopping session.
  Manages data integrity, persistence, and user feedback.
 */
window.addToCart = function (productName) {
  // Find the full product object in the master database using the name.
  const product = products.find((p) => p.name === productName);
  if (!product) return; // Safety check: Stop if product doesn't exist

  // Search the current cart to see if this item is already there.
  const existingItem = cartItems.find((item) => item.id === product.id);

  if (existingItem) {
    // If it exists, just increase the quantity.
    existingItem.qty += 1;
  } else {
    // If it's a new item, create a new object.
    // { ...product } copies all existing properties (id, name, price, image).
    // We then add the 'qty: 1' property to initialize it.
    cartItems.push({ ...product, qty: 1 });
  }

  // Save the updated array to the browser's LocalStorage.
  // We must 'stringify' the array because LocalStorage only stores strings.
  localStorage.setItem("luxeCartItems", JSON.stringify(cartItems));

  // Trigger the count update and show the toast message.
  updateCartDisplay();
  showToast(`${product.name} added to cart!`);
};

/*
 Dynamically injects the global navigation bar into the page.
 Uses the Fetch API to allow for a Single header file.
*/
function loadHeader() {
  // Checks if the current page is inside the "/Pages/" subfolder.
  // This prevents broken links when navigating between index.html and sub-pages.
  const inSubfolder = window.location.pathname.includes("/Pages/");
  
  // Switches the file path based on where the user is in the directory.
  const headerPath = inSubfolder
    ? "/Pages/Header/header.html"  // Path for pages inside subfolders
    : "./Pages/Header/header.html"; // Path for index.html at the root

  // Requests the raw HTML content of the header file.
  fetch(headerPath)
    .then((response) => {
      // If the file is missing (404), throw an error immediately.
      if (!response.ok) throw new Error("Header not found at " + headerPath);
      return response.text(); // Convert the server response into a readable string
    })
    .then((data) => {
     // Find the placeholder <header> tag and fill it with the fetched HTML.
      const headerContainer = document.getElementById("main-header");
      if (headerContainer) {
        headerContainer.innerHTML = data;
        
        // Re-run the cart display function. 
        // Important: The cart badge exists inside the injected header!
        updateCartDisplay();
      }
    })
    // Log a warning if the network fails so the developer knows why the header is missing.
    .catch((error) => console.warn("Header fetch skipped or failed:", error));
}

/*
 Dynamically injects the global footer.
 Similar to loadHeader, but includes a "Lazy Creation" fallback.
*/
function loadFooter() {
  const inSubfolder = window.location.pathname.includes("/Pages/");
  const footerPath = inSubfolder
    ? "/Pages/Footer/footer.html"
    : "./Pages/Footer/footer.html";

  fetch(footerPath)
    .then((response) => response.text())
    .then((data) => {
      //Look for an existing <footer> tag.
      let footerContainer = document.querySelector("footer");
      
      // If the developer forgot to add <footer> to the HTML, 
      // the script creates one automatically and appends it to the <body>.
      if (!footerContainer) {
        footerContainer = document.createElement("footer");
        document.body.appendChild(footerContainer);
      }
      
      // Replace the entire placeholder with the full footer content.
      footerContainer.outerHTML = data;
    });
}
window.showToast = function (message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.style.position = "fixed";
  toast.style.bottom = "30px";
  toast.style.right = "30px";
  toast.style.background = "var(--primary-yellow)";
  toast.style.color = "var(--dark-bg)";
  toast.style.fontWeight = "700";
  toast.style.padding = "16px 24px";
  toast.style.borderRadius = "8px";
  toast.style.fontSize = "0.95rem";
  toast.style.zIndex = "9999";
  toast.style.opacity = "0";
  toast.style.transform = "translateY(20px)";
  toast.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  toast.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";

  toast.innerText = message;

  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
  }, 10);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
  }, 3000);
};
