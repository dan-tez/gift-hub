document.addEventListener('DOMContentLoaded', () => {
    if (typeof loadHeader === 'function') loadHeader();
    
    setupToggles();
    renderCheckoutSummary();
});

function setupToggles() {
    // Delivery vs Pickup Toggle
    const btnDelivery = document.getElementById('btn-delivery');
    const btnPickup = document.getElementById('btn-pickup');
    const addressWrapper = document.getElementById('address-wrapper'); // The new wrapper
    
    btnDelivery.addEventListener('click', () => {
        btnDelivery.classList.add('active');
        btnPickup.classList.remove('active');
        addressWrapper.style.display = 'contents'; // Show address fields
    });
    
    btnPickup.addEventListener('click', () => {
        btnPickup.classList.add('active');
        btnDelivery.classList.remove('active');
        addressWrapper.style.display = 'none'; // Hide address fields
    });

    // Payment Method Toggle
    const btnCard = document.getElementById('btn-card');
    const btnMpesa = document.getElementById('btn-mpesa');
    const formCard = document.getElementById('form-card');
    const formMpesa = document.getElementById('form-mpesa');

    btnCard.addEventListener('click', () => {
        btnCard.classList.add('active');
        btnMpesa.classList.remove('active');
        formCard.style.display = 'grid'; 
        formMpesa.style.display = 'none';
    });

    btnMpesa.addEventListener('click', () => {
        btnMpesa.classList.add('active');
        btnCard.classList.remove('active');
        formMpesa.style.display = 'grid';
        formCard.style.display = 'none';
    });
}

function renderCheckoutSummary() {
    const currentCart = JSON.parse(localStorage.getItem('luxeCartItems')) || [];
    const previewContainer = document.getElementById('checkout-items-preview');
    const subtotalEl = document.getElementById('chk-subtotal');
    const deliveryEl = document.getElementById('chk-delivery');
    const totalEl = document.getElementById('chk-total');

    if (currentCart.length === 0) {
        window.location.href = 'cart.html'; 
        return;
    }

    let subtotalValue = 0;
    const deliveryFee = 50; 

    previewContainer.innerHTML = '';
    currentCart.forEach(item => {
        subtotalValue += (item.price * item.qty);
        previewContainer.innerHTML += `
            <div class="mini-chk-item">
                <div style="display: flex; align-items: center;">
                    <img src="${item.image}" alt="">
                    <span>${item.name} (x${item.qty})</span>
                </div>
                <strong>AED ${(item.price * item.qty).toLocaleString()}</strong>
            </div>
        `;
    });

    const finalTotal = subtotalValue + deliveryFee;

    subtotalEl.innerText = `AED ${subtotalValue.toLocaleString()}`;
    deliveryEl.innerText = `AED ${deliveryFee}`;
    totalEl.innerText = `AED ${finalTotal.toLocaleString()}`;
}

// Validation Function
function validateForm() {
    const isDelivery = document.getElementById('btn-delivery').classList.contains('active');
    const isMpesa = document.getElementById('btn-mpesa').classList.contains('active');
    
    // 1. Check Basic Info
    if (!document.getElementById('chk-name').value.trim() || 
        !document.getElementById('chk-email').value.trim() || 
        !document.getElementById('chk-phone').value.trim()) {
        if(typeof showToast === 'function') showToast("Please fill in your name, email, and phone number.");
        return false;
    }

    // 2. Check Address if Delivery is selected
    if (isDelivery) {
        if (!document.getElementById('chk-country').value || 
            !document.getElementById('chk-city').value.trim()) {
            if(typeof showToast === 'function') showToast("Please provide your delivery country and city.");
            return false;
        }
    }

    // 3. Check Payment Fields
    if (isMpesa) {
        if (!document.getElementById('chk-mpesa-phone').value.trim()) {
            if(typeof showToast === 'function') showToast("Please enter your M-Pesa mobile number.");
            return false;
        }
    } else {
        if (!document.getElementById('chk-card-name').value.trim() || 
            !document.getElementById('chk-card-num').value.trim() || 
            !document.getElementById('chk-card-mm').value || 
            !document.getElementById('chk-card-yy').value || 
            !document.getElementById('chk-card-cvv').value.trim()) {
            if(typeof showToast === 'function') showToast("Please fill in all credit card details.");
            return false;
        }
    }

    // 4. Check Terms & Conditions
    if (!document.getElementById('terms').checked) {
        if(typeof showToast === 'function') showToast("Please agree to the Terms and Conditions.");
        return false;
    }

    return true; // Passed all checks!
}

// Handle Submit
document.getElementById('pay-now-btn').addEventListener('click', function() {
    
    // Run the validation check first!
    if (!validateForm()) {
        return; // Stops the process if validation fails
    }

    const btn = this;
    const isMpesa = document.getElementById('btn-mpesa').classList.contains('active');
    
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing...';
    btn.disabled = true;

    setTimeout(() => {
        if (isMpesa) {
            alert('STK Push sent to your phone. Please enter your M-Pesa PIN to complete the transaction.');
        } else {
            alert('Card Payment successful! Your luxury items are on their way.');
        }
        
        localStorage.removeItem('luxeCartItems');
        localStorage.setItem('luxeCartCount', 0); 
        
        window.location.href = '/Pages/Actions/success.html'; 
    }, 2000);
});