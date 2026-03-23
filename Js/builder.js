
// tracking user progress and selections without needing a database refresh.
let currentStep = 1; // Tracks the current step.
let basket = []; // Stores the array of product objects selected in Step 1
let selectedPackaging = null; // Stores the single object for the chosen box/packaging
let selectedCard = null; // Stores the single object for the chosen card
let currentFilter = "All"; // Tracks the currently active category filter

//Grabbing the HTML elements we need to manipulate.
const grid = document.getElementById("product-grid");
const filterContainer = document.getElementById("filter-container");
const basketItemsContainer = document.getElementById("basket-items");
const basketTotalEl = document.getElementById("basket-total");
const basketCountEl = document.getElementById("basket-count");
const nextBtn = document.getElementById("next-step-btn");
const backBtn = document.getElementById("back-step-btn");
const checkoutModal = document.getElementById("checkout-modal");
const giftRecipientEl = document.getElementById("gift-recipient");
const giftMessageEl = document.getElementById("gift-message");

/* 
   2. INITIALIZATION
*/

document.addEventListener("DOMContentLoaded", () => {
  // Ensure the products are loaded before running.
  if (
    typeof products !== "undefined" &&
    typeof packagingOptions !== "undefined" &&
    typeof cardOptions !== "undefined"
  ) {
    extractAndRenderFilters(); // Generate the category buttons
    renderOptionsGrid(packagingOptions, "packaging-grid", "packaging"); // Build packaging UI
    renderOptionsGrid(cardOptions, "card-grid", "card"); // Build card UI
  } else {
    console.error("Data missing. Ensure products.js is loaded first.");
  }
});

/* 
   3. STEP NAVIGATION LOGIC
*/

// Handles the  movement in the page.
nextBtn.addEventListener("click", () => {
  if (currentStep === 1) {
    // Step 1 -> 2: No validation needed here (handled by disabling the button elsewhere)
    goToStep(2);
  } else if (currentStep === 2) {
    // Step 2 -> 3 VALIDATION: Ensure a box is picked before allowing personalization.
    if (!selectedPackaging) {
      showToast("Please select a box first!");
      return;
    }
    goToStep(3);
  } else if (currentStep === 3) {
    // Step 3 -> MODAL VALIDATION: Ensure a message is provided if a card is selected.
    const messageText = giftMessageEl.value.trim();
    if (selectedCard && messageText === "") {
      showToast("Please enter a message for your selected card!");
      giftRecipientEl.focus();
      return;
    }
    openReviewModal(); // Final review before adding to the global cart.
  }
});

// Handles the "Backward" movement.
backBtn.addEventListener("click", () => {
  if (currentStep > 1) goToStep(currentStep - 1);
});

/*
  Updates the UI to show the correct step section and header progress.
  @param {number} stepNumber - The step to navigate to.
*/
function goToStep(stepNumber) {
  // 1. Toggle visibility of the main sections.
  document
    .querySelectorAll(".step-section")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById(`step-${stepNumber}`).classList.add("active");

  // 2. Update the progress indicators in the header.
  document.querySelectorAll(".header-steps .step").forEach((el, index) => {
    el.classList.toggle("active", index + 1 === stepNumber);
  });

  currentStep = stepNumber;

  // 3. Update navigation button visibility and labels.
  backBtn.style.display = currentStep === 1 ? "none" : "block";

  if (currentStep === 1) {
    nextBtn.innerHTML =
      'Next: Choose Packaging <i class="fa-solid fa-arrow-right"></i>';
    updateBasketUI();
  } else if (currentStep === 2) {
    nextBtn.innerHTML =
      'Next: Add a Card <i class="fa-solid fa-arrow-right"></i>';
    nextBtn.disabled = false;
  } else if (currentStep === 3) {
    nextBtn.innerHTML = 'Review & Complete <i class="fa-solid fa-check"></i>';
  }

  // Smoothly scroll back to top to give the user a clean start on the next step.
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* 
   4. RENDERING GRIDS (UI Generation)
*/

/*
  Creates the dynamic filter buttons by extracting unique categories from products.
*/
function extractAndRenderFilters() {
  // Use a 'Set' to ensure we only get unique category names from the product list.
  const categories = [...new Set(products.map((p) => p.category))];
  filterContainer.innerHTML = "";

  categories.forEach((category, index) => {
    const btn = document.createElement("button");

    // Make the first button 'Active' by default.
    btn.className = `filter-btn ${index === 0 ? "active" : ""}`;
    btn.innerText = category;

    btn.onclick = () => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = category;

      // Re-render the grid based on the selected category.
      const filtered = products.filter((p) => p.category === category);
      renderProducts(filtered);
    };
    filterContainer.appendChild(btn);
  });

  // Default: Load the first category immediately.
  if (categories.length > 0) {
    currentFilter = categories[0];
    renderProducts(products.filter((p) => p.category === currentFilter));
  }
}

/*
  Generates the HTML for individual product cards in Step 1.
*/
function renderProducts(items) {
  grid.innerHTML = "";
  if (items.length === 0) {
    grid.innerHTML =
      '<p style="color: var(--text-secondary); grid-column: 1 / -1;">No products found.</p>';
    return;
  }
  items.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    // Using Template Literals to build the card UI with dynamic data.
    card.innerHTML = `
            <div class="img-wrapper"><img src="/${product.image}" alt="${product.name}" loading="lazy"></div>
            <div class="product-info">
                <span class="p-category">${product.category}</span>
                <h3 class="p-name">${product.name}</h3>
                <div class="p-bottom">
                    <span class="p-price"> Ksh ${product.price.toLocaleString()}</span>
                    <button class="add-btn" onclick="addToBasket(${product.id})"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        `;
    grid.appendChild(card);
  });
}

/*
  Reusable function to render simple selection grids (Boxes and Cards).
*/
function renderOptionsGrid(optionsArray, containerId, type) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  optionsArray.forEach((option) => {
    const card = document.createElement("div");
    card.className = "selection-card";
    card.id = `${type}-${option.id}`;
    card.innerHTML = `
            <img src="/${option.image}" alt="${option.name}">
            <span class="selection-title">${option.name}</span>
            <span class="selection-price"> Ksh ${option.price}</span>
        `;

    card.onclick = () => {
      // Visual feedback: clear previous selection and highlight new one.
      document
        .querySelectorAll(`#${containerId} .selection-card`)
        .forEach((el) => el.classList.remove("selected"));
      card.classList.add("selected");

      // Assign selection to global state based on type.
      if (type === "packaging") selectedPackaging = option;
      if (type === "card") selectedCard = option;

      updateBasketUI(); // Recalculate totals and refresh sidebar.
    };
    container.appendChild(card);
  });
}

/* 
   5. BASKET LOGIC
*/

/*
  Adds an item to the custom box.
  @param {number} productId - ID from the products.js file.
*/
window.addToBasket = function (productId) {
  const product = products.find((p) => p.id === productId);
  // PREVENTION: Don't allow duplicates in the same gift box.
  if (basket.find((item) => item.id === productId)) {
    showToast("Item already in box!");
    return;
  }

  basket.push(product);
  updateBasketUI();
  showToast(`${product.name} added!`);
};

/*
  Removes an item from the current box array.
*/
window.removeFromBasket = function (productId) {
  basket = basket.filter((p) => p.id !== productId);
  updateBasketUI();
};

/*
  RECONCILIATION: This function syncs the 'basket' array state with the visible sidebar.
  It handles the calculations and dynamic HTML for the sidebar preview.
*/
function updateBasketUI() {
  let totalCount = basket.length;

  // SUMMATION: Start with items, then conditionally add packaging/card costs.
  let totalPrice = basket.reduce((sum, item) => sum + item.price, 0);
  if (selectedPackaging) totalPrice += selectedPackaging.price;
  if (selectedCard) totalPrice += selectedCard.price;

  basketCountEl.innerText = `${totalCount} item${totalCount !== 1 ? "s" : ""}`;
  basketTotalEl.innerText = ` ${totalPrice.toLocaleString()}`;

  // VALIDATION: Force the user to pick at least one product before proceeding.
  if (currentStep === 1) nextBtn.disabled = basket.length === 0;

  // EMPTY STATE: If nothing is selected, show a placeholder.
  if (basket.length === 0 && !selectedPackaging && !selectedCard) {
    basketItemsContainer.innerHTML = `
            <div class="empty-basket">
                <div class="empty-icon"><i class="fa-solid fa-box-open"></i></div>
                <p>Your box is empty.</p>
            </div>`;
    return;
  }

  basketItemsContainer.innerHTML = "";

  // 1. Render Products
  basket.forEach((item) => {
    basketItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="/${item.image}">
                <div class="cart-item-details">
                    <span class="cart-item-title">${item.name}</span>
                    <span class="cart-item-price">Ksh ${item.price.toLocaleString()}</span>
                </div>
                <button class="remove-btn" onclick="removeFromBasket(${item.id})"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `;
  });

  // 2. Render Packaging (if selected)
  if (selectedPackaging) {
    basketItemsContainer.innerHTML += `
            <div class="cart-item" style="border-left: 3px solid var(--text-primary);">
                <img src="/${selectedPackaging.image}">
                <div class="cart-item-details">
                    <span class="cart-item-title">Box: ${selectedPackaging.name}</span>
                    <span class="cart-item-price"> Ksh ${selectedPackaging.price}</span>
                </div>
            </div>
        `;
  }

  // 3. Render Card (if selected)
  if (selectedCard) {
    basketItemsContainer.innerHTML += `
            <div class="cart-item" style="border-left: 3px solid var(--text-primary);">
                <img src="/${selectedCard.image}">
                <div class="cart-item-details">
                    <span class="cart-item-title">Card: ${selectedCard.name}</span>
                    <span class="cart-item-price">Ksh ${selectedCard.price}</span>
                </div>
            </div>
        `;
  }
}

/* 
   6. REVIEW MODAL & CHECKOUT BUNDLING
*/

/*
 * Aggregates all selections into a categorized final summary for the user to review.
*/
function openReviewModal() {
  const total =
    basket.reduce((sum, item) => sum + item.price, 0) +
    (selectedPackaging?.price || 0) +
    (selectedCard?.price || 0);
  const modalItemsList = document.getElementById("modal-items-list");
  modalItemsList.innerHTML = "";

  // CATEGORIZATION: The modal sorts items into Products, Packaging, and Cards.
  if (basket.length > 0) {
    modalItemsList.innerHTML += `<h4 class="review-category-title">1. Selected Items</h4>`;
    basket.forEach((item) => {
      modalItemsList.innerHTML += `
                <div class="review-item">
                    <img src="/${item.image}">
                    <div class="r-details">
                        <span class="r-name">${item.name}</span>
                        <span class="r-price">Ksh ${item.price.toLocaleString()}</span>
                    </div>
                </div>`;
    });
  }

  if (selectedPackaging) {
    modalItemsList.innerHTML += `<h4 class="review-category-title">2. Packaging</h4>`;
    modalItemsList.innerHTML += `
            <div class="review-item">
                <img src="/${selectedPackaging.image}">
                <div class="r-details">
                    <span class="r-name">${selectedPackaging.name}</span>
                    <span class="r-price">ksh ${selectedPackaging.price}</span>
                </div>
            </div>`;
  }

  if (selectedCard) {
    modalItemsList.innerHTML += `<h4 class="review-category-title">3. Card & Note</h4>`;
    modalItemsList.innerHTML += `
            <div class="review-item">
                <img src="/${selectedCard.image}">
                <div class="r-details">
                    <span class="r-name">${selectedCard.name}</span>
                    <span class="r-price">Ksh ${selectedCard.price}</span>
                </div>
            </div>`;
  }

  // PERSONALIZATION: Include the recipient name and custom message.
  const recipient = giftRecipientEl?.value.trim() || "";
  const message = giftMessageEl?.value.trim() || "";

  if (recipient !== "" || message !== "") {
    modalItemsList.innerHTML += `
            <div style="background:#f9fafb; padding:16px; border-radius:12px; margin-top:12px; border: 1px solid var(--border-color);">
                ${recipient ? `<strong style="color:var(--text-primary); display:block; margin-bottom:6px; font-size: 0.95rem;">To: ${recipient}</strong>` : ""}
                ${message ? `<span style="font-style:italic; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5; display: block;">"${message}"</span>` : ""}
            </div>`;
  }

  document.getElementById("modal-subtotal").innerText =
    ` ${total.toLocaleString()}`;
  document.getElementById("modal-total").innerText =
    ` ${total.toLocaleString()}`;

  checkoutModal.classList.add("active");
}

// Modal closing logic.
document
  .getElementById("close-modal")
  .addEventListener("click", () => checkoutModal.classList.remove("active"));
checkoutModal.addEventListener("click", (e) => {
  if (e.target === checkoutModal) checkoutModal.classList.remove("active");
});

/* 
   7. BUNDLING & GLOBAL CART ROUTING
*/

const payBtn = document.getElementById("pay-btn");
if (payBtn) {
  payBtn.addEventListener("click", () => {
    // UI Feedback: Show a loading state during the "processing" delay.
    payBtn.innerHTML =
      '<i class="fa-solid fa-circle-notch fa-spin"></i> Loading ....';
    payBtn.disabled = true;

    setTimeout(() => {
      const total =
        basket.reduce((sum, item) => sum + item.price, 0) +
        (selectedPackaging?.price || 0) +
        (selectedCard?.price || 0);

      // DATA BUNDLING: This is a clever design pattern.
      // We collapse the entire builder state into a single 'Custom Box' object
      // so the main cart page only sees one line item.
      const customBoxItem = {
        id: "custom-box-" + Date.now(), // Generate a unique ID using a timestamp.
        name: "Bespoke Curated Box",
        category: "Custom Gift",
        price: total,
        image: selectedPackaging
          ? `/${selectedPackaging.image}`
          : "Placeholder",
        qty: 1,
      };

      // PERSISTENCE: Save the new custom box to the global cart in localStorage.
      let currentCart = JSON.parse(localStorage.getItem("luxeCartItems")) || [];
      currentCart.push(customBoxItem);
      localStorage.setItem("luxeCartItems", JSON.stringify(currentCart));

      // Redirect the user to the final checkout flow.
      window.location.href = "/Pages/Actions/checkout.html";
    }, 800);
  });
}

/* 
   8. UTILITIES
*/

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.innerText = message;
  toast.className = "show success-toast";
  // Auto-hide the notification after 3 seconds.
  setTimeout(() => {
    toast.className = toast.className.replace("show", "").trim();
  }, 3000);
}
