document.addEventListener('DOMContentLoaded', () => {
    // Component Injection: Ensure the universal header is loaded
    if (typeof loadHeader === 'function') loadHeader();
    
    // UI Logic: Initialize click listeners for buttons
    setupToggles();
    
    // Data Logic: Build the order summary from LocalStorage
    renderCheckoutSummary();
});

/*
  Manages the "Active" state of buttons and the visibility of form sections.
  This keeps the UI clean by only showing relevant fields.
 */
function setupToggles() {
    const btnDelivery = document.getElementById('btn-delivery');
    const btnPickup = document.getElementById('btn-pickup');
    const addressWrapper = document.getElementById('address-wrapper'); 
    
    // DELIVERY vs PICKUP: Toggles the address input fields
    btnDelivery.addEventListener('click', () => {
        btnDelivery.classList.add('active');
        btnPickup.classList.remove('active');
        addressWrapper.style.display = 'contents'; // Reveal address fields
    });
    
    btnPickup.addEventListener('click', () => {
        btnPickup.classList.add('active');
        btnDelivery.classList.remove('active');
        addressWrapper.style.display = 'none'; // Hide unnecessary fields
    });

    // PAYMENT METHOD: Toggles between Credit Card and M-Pesa forms
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

/* 
   3. DATA RENDERING (Order Preview)
*/

/*
  Pulls the cart data from LocalStorage to show the user what they are paying for.
  Includes a 'Guard Clause' to redirect empty carts back to the shop.
*/
function renderCheckoutSummary() {
    const currentCart = JSON.parse(localStorage.getItem('luxeCartItems')) || [];
    const previewContainer = document.getElementById('checkout-items-preview');
    const subtotalEl = document.getElementById('chk-subtotal');
    const deliveryEl = document.getElementById('chk-delivery');
    const totalEl = document.getElementById('chk-total');

    // Prevents users from accessing checkout with an empty cart
    if (currentCart.length === 0) {
        window.location.href = 'cart.html'; 
        return;
    }

    let subtotalValue = 0;
    const deliveryFee = 50; 

    previewContainer.innerHTML = '';
    currentCart.forEach(item => {
        subtotalValue += (item.price * item.qty);
        // Uses Template Literals to build the mini-preview row
        previewContainer.innerHTML += `
            <div class="mini-chk-item">
                <div style="display: flex; align-items: center;">
                    <img src="/${item.image}" alt="">
                    <span>${item.name} (x${item.qty})</span>
                </div>
                <strong>Ksh ${(item.price * item.qty).toLocaleString()}</strong>
            </div>
        `;
    });

    const finalTotal = subtotalValue + deliveryFee;

    // DOM Update with currency formatting
    subtotalEl.innerText = `${subtotalValue.toLocaleString()}`;
    deliveryEl.innerText = `${deliveryFee}`;
    totalEl.innerText = `${finalTotal.toLocaleString()}`;
}

/* 
   4. CONDITIONAL VALIDATION LOGIC
*/

/*
  Validates the form based on the selected Delivery and Payment methods.
  Returns true if the form is valid, false otherwise.
*/
function validateForm() {
    const isDelivery = document.getElementById('btn-delivery').classList.contains('active');
    const isMpesa = document.getElementById('btn-mpesa').classList.contains('active');
    
    // Name, Email, Phone are always required
    if (!document.getElementById('chk-name').value.trim() || 
        !document.getElementById('chk-email').value.trim() || 
        !document.getElementById('chk-phone').value.trim()) {
        showToast("Please fill in your name, email, and phone number.");
        return false;
    }

    //  Only checks if 'Delivery' is selected
    if (isDelivery) {
        if (!document.getElementById('chk-country').value || 
            !document.getElementById('chk-city').value.trim()) {
            showToast("Please provide your delivery country and city.");
            return false;
        }
    }

    // Checks M-Pesa phone OR Card details
    if (isMpesa) {
        if (!document.getElementById('chk-mpesa-phone').value.trim()) {
            showToast("Please enter your M-Pesa mobile number.");
            return false;
        }
    } else {
        // Multi-field check for Credit Card details
        if (!document.getElementById('chk-card-name').value.trim() || 
            !document.getElementById('chk-card-num').value.trim() || 
            !document.getElementById('chk-card-mm').value || 
            !document.getElementById('chk-card-yy').value || 
            !document.getElementById('chk-card-cvv').value.trim()) {
            showToast("Please fill in all credit card details.");
            return false;
        }
    }

    // Terms and Conditions checkbox
    if (!document.getElementById('terms').checked) {
        showToast("Please agree to the Terms and Conditions.");
        return false;
    }

    return true;
}

/* 
   5. TRANSACTION SIMULATION & CLEANUP
*/

document.getElementById('pay-now-btn').addEventListener('click', function() {
    
    // RUN VALIDATION: Stops execution if the user missed a field
    if (!validateForm()) return;

    const btn = this;
    const isMpesa = document.getElementById('btn-mpesa').classList.contains('active');
    
    // FEEDBACK: Disable button and show a loading spinner
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing...';
    btn.disabled = true;

    // ASYNCHRONOUS SIMULATION: Mocking a payment gateway response
    setTimeout(() => {
        if (isMpesa) {
            alert('STK Push sent to your phone. Please enter your M-Pesa PIN to complete.');
        } else {
            alert('Card Payment successful!');
        }
        
        // Wipe the cart from LocalStorage after successful purchase
        localStorage.removeItem('luxeCartItems');
        localStorage.setItem('luxeCartCount', 0); 
        
        // Send the user to the success page
        window.location.href = '/Pages/Actions/success.html'; 
    }, 2000); // 2-second simulated delay
});