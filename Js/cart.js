// State
let discountPercent = 0;
const DELIVERY_FEE = 50; // Hardcoded flat fee

document.addEventListener('DOMContentLoaded', () => {
    // If you are using the global header loader, ensure it runs
    if (typeof loadHeader === 'function') loadHeader();
    renderCartPage();
});

function renderCartPage() {
    let currentCart = JSON.parse(localStorage.getItem('luxeCartItems')) || [];
    
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('summary-subtotal');
    const totalEl = document.getElementById('summary-total');
    const deliveryEl = document.getElementById('summary-delivery');
    const discountRow = document.getElementById('discount-row');
    const discountLabel = document.getElementById('discount-label');
    const discountAmountEl = document.getElementById('summary-discount');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Handle Empty Cart
    if (currentCart.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 0;">
                <p style="color: var(--text-muted); margin-bottom: 20px;">Your cart is currently empty.</p>
                <a href="/index.html" class="btn-solid pill-btn" style="width: auto;">Continue Shopping</a>
            </div>
        `;
        subtotalEl.innerText = `AED 0`;
        deliveryEl.innerText = `AED 0`;
        totalEl.innerText = `AED 0`;
        discountRow.style.display = 'none';
        checkoutBtn.disabled = true;
        return;
    }

    // Render Cart Items
    container.innerHTML = '';
    let subtotalValue = 0;

    currentCart.forEach(item => {
        subtotalValue += (item.price * item.qty);

        const row = document.createElement('div');
        row.className = 'cart-item-row';
        row.innerHTML = `
            <div class="cart-item-img-box">
                <img src="${item.image}" alt="${item.name}">
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
                    <span class="cart-item-price">AED ${item.price.toLocaleString()}</span>
                    
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

    // Calculate Totals
    let discountAmount = 0;
    if (discountPercent > 0) {
        discountAmount = subtotalValue * discountPercent;
        discountRow.style.display = 'flex';
        discountLabel.innerText = `(-${discountPercent * 100}%)`;
        discountAmountEl.innerText = `-AED ${discountAmount.toLocaleString()}`;
    } else {
        discountRow.style.display = 'none';
    }

    const finalTotal = (subtotalValue - discountAmount) + DELIVERY_FEE;

    // Update DOM
    subtotalEl.innerText = `AED ${subtotalValue.toLocaleString()}`;
    deliveryEl.innerText = `AED ${DELIVERY_FEE}`;
    totalEl.innerText = `AED ${finalTotal.toLocaleString()}`;
    checkoutBtn.disabled = false;
}

// Global functions
window.updateItemQty = function(productId, change) {
    let currentCart = JSON.parse(localStorage.getItem('luxeCartItems')) || [];
    const item = currentCart.find(i => i.id === productId);
    
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            currentCart = currentCart.filter(i => i.id !== productId);
        }
        localStorage.setItem('luxeCartItems', JSON.stringify(currentCart));
        renderCartPage();
        if (typeof updateCartDisplay === 'function') updateCartDisplay();
    }
};

window.removeItem = function(productId) {
    let currentCart = JSON.parse(localStorage.getItem('luxeCartItems')) || [];
    currentCart = currentCart.filter(i => i.id !== productId);
    
    localStorage.setItem('luxeCartItems', JSON.stringify(currentCart));
    renderCartPage();
    if (typeof updateCartDisplay === 'function') updateCartDisplay();
};

// --- PROMO CODE LOGIC ---
document.getElementById('apply-promo-btn')?.addEventListener('click', () => {
    const input = document.getElementById('promo-input');
    const code = input.value.trim().toUpperCase();

    if (code === 'LUXE20') {
        discountPercent = 0.20; // 20% off
        renderCartPage();
        if (typeof showToast === 'function') showToast('Promo code applied!');
        input.value = ''; // clear input
    } else {
        if (typeof showToast === 'function') showToast('Invalid promo code.');
    }
});

// Proceed to Checkout Page
document.getElementById('checkout-btn')?.addEventListener('click', function() {
    const btn = this;
    
    // Give a brief, premium loading state so it doesn't feel abrupt
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Loading Secure Checkout...';
    btn.disabled = true;

    // Small delay to let the animation play before the page transition
    setTimeout(() => {
        // Redirect the user to your newly created checkout page
        window.location.href = 'checkout.html'; 
    }, 600); 
});