// Represents the current discount as a decimal (e.g., 0.20 for 20%)
let discountPercent = 0; 
// Using a 'const' for the fee ensures a "Single Source of Truth" across calculations
const DELIVERY_FEE = 50; 

document.addEventListener('DOMContentLoaded', () => {
    // Component Injection: Loads the universal header
    if (typeof loadHeader === 'function') loadHeader();
    
    // Builds the cart UI from stored data immediately on load
    renderCartPage();
});

/*
  The 'renderCartPage' function is a state-synced UI generator. 
  Every time an item is added, removed, or a promo is applied, 
  this entire function re-runs to ensure the UI matches the data.
*/
function renderCartPage() {
    // Pulling the stringified array from LocalStorage
    let currentCart = JSON.parse(localStorage.getItem('luxeCartItems')) || [];
    
    // Mapping JavaScript variables to HTML elements
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('summary-subtotal');
    const totalEl = document.getElementById('summary-total');
    const deliveryEl = document.getElementById('summary-delivery');
    const discountRow = document.getElementById('discount-row');
    const discountLabel = document.getElementById('discount-label');
    const discountAmountEl = document.getElementById('summary-discount');
    const checkoutBtn = document.getElementById('checkout-btn');

    //  EMPTY STATE GUARD
    if (currentCart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-display">
                <p>Your cart is currently empty.</p>
                <a href="/index.html" class="btn-solid pill-btn">Continue Shopping</a>
            </div>
        `;
        subtotalEl.innerText = `0`;
        deliveryEl.innerText = `0`;
        totalEl.innerText = `0`;
        discountRow.style.display = 'none';
        checkoutBtn.disabled = true;
        return;
    }

    // Clear existing items before rebuilding the list
    container.innerHTML = '';
    let subtotalValue = 0;

    // Iterates through each item in the cart array
    currentCart.forEach(item => {
        // Increment the running subtotal (Price * Quantity)
        subtotalValue += (item.price * item.qty);

        // Create the individual product row element
        const row = document.createElement('div');
        row.className = 'cart-item-row';
        row.innerHTML = `
            <div class="cart-item-img-box">
                <img src="/${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="item-header-row">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <button class="trash-btn" onclick="removeItem(${item.id})">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
                
                <p class="cart-item-meta">Category: ${item.category}</p>
                
                <div class="item-bottom-row">
                    <span class="cart-item-price">${item.price.toLocaleString()}</span>
                    
                    <div class="qty-pill">
                        <button onclick="updateItemQty(${item.id}, -1)"><i class="fa-solid fa-minus"></i></button>
                        <span>${item.qty}</span>
                        <button onclick="updateItemQty(${item.id}, 1)"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(row);
    });

    // Conditional rendering based on the Global State
    let discountAmount = 0;
    if (discountPercent > 0) {
        discountAmount = subtotalValue * discountPercent;
        discountRow.style.display = 'flex';
        discountLabel.innerText = `(-${discountPercent * 100}%)`;
        discountAmountEl.innerText = `-${discountAmount.toLocaleString()}`;
    } else {
        discountRow.style.display = 'none';
    }

    //  Net Total after discounts plus shipping
    const finalTotal = (subtotalValue - discountAmount) + DELIVERY_FEE;

    // 8. DATA FORMATTING: Using .toLocaleString() to ensure KES currency formatting
    subtotalEl.innerText = `${subtotalValue.toLocaleString()}`;
    deliveryEl.innerText = `${DELIVERY_FEE}`;
    totalEl.innerText = `${finalTotal.toLocaleString()}`;
    checkoutBtn.disabled = false;
}

/* 
   3. DATA MANAGEMENT (Persistence Logic)
*/

window.updateItemQty = function(productId, change) {
    let currentCart = JSON.parse(localStorage.getItem('luxeCartItems')) || [];
    
    // Find the specific object in the array
    const item = currentCart.find(i => i.id === productId);
    
    if (item) {
        item.qty += change;
        
        // SELF-CLEANING: If quantity drops to zero, remove the item entirely
        if (item.qty <= 0) {
            currentCart = currentCart.filter(i => i.id !== productId);
        }
        
        // PERSISTENCE: Save changes and re-render the view
        localStorage.setItem('luxeCartItems', JSON.stringify(currentCart));
        renderCartPage();
        
        // UI SYNC: Update the badge in the global header
        if (typeof updateCartDisplay === 'function') updateCartDisplay();
    }
};

window.removeItem = function(productId) {
    let currentCart = JSON.parse(localStorage.getItem('luxeCartItems')) || [];
    
    // ARRAY FILTERING: Creates a new array excluding the selected ID
    currentCart = currentCart.filter(i => i.id !== productId);
    
    localStorage.setItem('luxeCartItems', JSON.stringify(currentCart));
    renderCartPage();
    if (typeof updateCartDisplay === 'function') updateCartDisplay();
};

/* 
   4. PROMO & CHECKOUT UX
*/

document.getElementById('apply-promo-btn')?.addEventListener('click', () => {
    const input = document.getElementById('promo-input');
    // SANITIZATION: Removes whitespace and forces uppercase for case-insensitive matching
    const code = input.value.trim().toUpperCase();

    if (code === 'LUXE20') {
        discountPercent = 0.20; // Sets state to 20%
        renderCartPage(); // Re-calculates and re-renders
        if (typeof showToast === 'function') showToast('Promo code applied!');
        input.value = ''; 
    } else {
        if (typeof showToast === 'function') showToast('Invalid promo code.');
    }
});

document.getElementById('checkout-btn')?.addEventListener('click', function() {
    const btn = this;
    
    // FEEDBACK LOOP: Swaps text for a loading spinner to build trust
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Loading...';
    btn.disabled = true;

    // PERCEIVED PERFORMANCE: A small delay simulates a "security check" before redirect
    setTimeout(() => {
        window.location.href = 'checkout.html'; 
    }, 600); 
});