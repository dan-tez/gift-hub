// ==========================================
// 1. STATE & INITIALIZATION
// ==========================================
let cartCount = parseInt(localStorage.getItem('luxeCartCount')) || 0;

// Defines the order categories appear on the homepage
const categoriesList = [
    'Watches', 'Handbags', 'Perfumes', 'Wallets', 'Sunglasses', 
    'Jewelry', 'Scarves'
];

document.addEventListener("DOMContentLoaded", () => {
    loadHeader();
    
    if (typeof products !== 'undefined') {
        populateStorefront(); 
    } else {
        console.error("Products array not found. Ensure products.js is loaded.");
    }
});

// ==========================================
// 2. DYNAMIC STOREFRONT RENDERER (Editorial Style)
// ==========================================
function populateStorefront() {
    const storefrontContainer = document.getElementById('storefront');
    if (!storefrontContainer) return;
    
    storefrontContainer.innerHTML = ''; 

    categoriesList.forEach(category => {
        const categoryProducts = products.filter(p => p.category === category);
        if (categoryProducts.length === 0) return;

        const baseKey = category.toLowerCase().replace(' ', '-');
        
        const section = document.createElement('section');
        section.className = 'category-row';
        section.id = `section-${baseKey}`;
        
        let productsHTML = '';
        categoryProducts.forEach(product => {
            productsHTML += `
                <div class="ed-product-card" id="card-${product.id}">
                    <div class="ed-img-wrapper">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                        <button class="ed-add-btn" onclick="addToCart('${product.name}')">Add to Cart</button>
                    </div>
                    <div class="ed-product-info">
                        <h3 class="ed-p-name">${product.name}</h3>
                        <span class="ed-p-price">AED ${product.price.toLocaleString()}</span>
                    </div>
                </div>
            `;
        });

        section.innerHTML = `
            <div class="category-header">
                <h3>${category}</h3>
                <a href="builder.html" class="view-all">Shop ${category}</a>
            </div>
            <div class="scroll-track" id="${baseKey}-track">
                ${productsHTML}
            </div>
        `;

        storefrontContainer.appendChild(section);
    });
}

// ==========================================
// 3. CART & UI INTERACTIONS
// ==========================================


window.showToast = function(message) {
    const toast = document.getElementById("toast");
    if(!toast) return;
    
    // Create the toast UI dynamically if it doesn't have styling
    toast.style.position = 'fixed';
    toast.style.bottom = '30px';
    toast.style.right = '30px';
    toast.style.background = '#1A1A1A';
    toast.style.color = '#fff';
    toast.style.padding = '16px 24px';
    toast.style.fontSize = '0.9rem';
    toast.style.zIndex = '9999';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    toast.innerText = message;
    
    // Trigger animation
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 10);
    
    setTimeout(() => { 
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
    }, 3000);
};

// ==========================================
// 4. HEADER LOADER
// ==========================================
function loadHeader() {
    fetch('/Pages/Header/header.html')
        .then(response => {
            if(!response.ok) throw new Error("Header not found");
            return response.text();
        })
        .then(data => {
            const headerContainer = document.getElementById('main-header');
            if(headerContainer) {
                headerContainer.innerHTML = data;
                updateCartDisplay(); 
            }
        })
        .catch(error => console.warn('Header fetch skipped or failed:', error));
}

// --- UPGRADED CART STATE ---
// We now store an array of objects instead of just a number
let cartItems = JSON.parse(localStorage.getItem('luxeCartItems')) || [];

function updateCartDisplay() {
    const cartElement = document.getElementById('cart-count');
    if (cartElement) {
        // Calculate total items (accounting for quantities)
        const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
        cartElement.innerText = totalItems;
        
        // Quick pop animation
        cartElement.style.transform = 'scale(1.2)';
        setTimeout(() => cartElement.style.transform = 'scale(1)', 200);
    }
}

// Ensure the button passes the product name, and we find the full details from the products array
window.addToCart = function(productName) {
    // Find the product data from your products.js file
    const product = products.find(p => p.name === productName);
    if (!product) return;

    // Check if it's already in the cart
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.qty += 1; // Increase quantity
    } else {
        cartItems.push({ ...product, qty: 1 }); // Add new item with qty: 1
    }

    // Save the upgraded array to localStorage
    localStorage.setItem('luxeCartItems', JSON.stringify(cartItems));
    
    updateCartDisplay();
    showToast(`${product.name} added to cart!`);
};