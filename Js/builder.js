// ==========================================
// 1. STATE & DOM ELEMENTS
// ==========================================
let currentStep = 1;
let basket = [];
let selectedPackaging = null;
let selectedCard = null;
let currentFilter = 'All';

const grid = document.getElementById('product-grid');
const filterContainer = document.getElementById('filter-container');
const basketItemsContainer = document.getElementById('basket-items');
const basketTotalEl = document.getElementById('basket-total');
const basketCountEl = document.getElementById('basket-count');
const nextBtn = document.getElementById('next-step-btn');
const backBtn = document.getElementById('back-step-btn');
const checkoutModal = document.getElementById('checkout-modal');
const giftRecipientEl = document.getElementById('gift-recipient');
const giftMessageEl = document.getElementById('gift-message');

// ==========================================
// 2. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    if (typeof products !== 'undefined' && typeof packagingOptions !== 'undefined' && typeof cardOptions !== 'undefined') {
        extractAndRenderFilters(); // This now handles rendering the first category automatically
        // renderProducts(products); <-- DELETE THIS LINE
        renderOptionsGrid(packagingOptions, 'packaging-grid', 'packaging');
        renderOptionsGrid(cardOptions, 'card-grid', 'card');
    } else {
        console.error("Data missing. Ensure products.js is loaded first.");
    }
});

// ==========================================
// 3. STEP NAVIGATION LOGIC
// ==========================================
nextBtn.addEventListener('click', () => {
    if (currentStep === 1) {
        goToStep(2);
    } else if (currentStep === 2) {
        if(!selectedPackaging) { showToast("Please select a box first!"); return; }
        goToStep(3);
    } else if (currentStep === 3) {
        
        const messageText = giftMessageEl.value.trim();
        
        // If they selected a card but didn't write a message, stop them.
        if (selectedCard && messageText === '') {
            showToast("Please enter a message for your selected card!");
            giftRecipientEl.focus(); // Instantly puts their cursor in the text box
            return; 
        }
        
        openReviewModal();
    }
});

backBtn.addEventListener('click', () => {
    if (currentStep > 1) goToStep(currentStep - 1);
});

function goToStep(stepNumber) {
    document.querySelectorAll('.step-section').forEach(el => el.classList.remove('active'));
    document.getElementById(`step-${stepNumber}`).classList.add('active');
    
    document.querySelectorAll('.header-steps .step').forEach((el, index) => {
        el.classList.toggle('active', index + 1 === stepNumber);
    });

    currentStep = stepNumber;
    backBtn.style.display = currentStep === 1 ? 'none' : 'block';
    
    if (currentStep === 1) {
        nextBtn.innerHTML = 'Next: Choose Packaging <i class="fa-solid fa-arrow-right"></i>';
        updateBasketUI(); 
    } else if (currentStep === 2) {
        nextBtn.innerHTML = 'Next: Add a Card <i class="fa-solid fa-arrow-right"></i>';
        nextBtn.disabled = false; 
    } else if (currentStep === 3) {
        nextBtn.innerHTML = 'Review & Complete <i class="fa-solid fa-check"></i>';
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 4. RENDERING GRIDS
// ==========================================
function extractAndRenderFilters() {
    // 1. Remove 'All' - just grab the unique categories directly
    const categories = [...new Set(products.map(p => p.category))];
    filterContainer.innerHTML = '';
    
    categories.forEach((category, index) => {
        const btn = document.createElement('button');
        
        // 2. Make the very first category in the array active by default
        btn.className = `filter-btn ${index === 0 ? 'active' : ''}`;
        btn.innerText = category;
        
        btn.onclick = () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = category;
            
            // 3. Filter logic simplified since 'All' no longer exists
            const filtered = products.filter(p => p.category === category);
            renderProducts(filtered);
        };
        filterContainer.appendChild(btn);
    });

    // 4. Automatically render the first category's products when this runs
    if (categories.length > 0) {
        currentFilter = categories[0];
        renderProducts(products.filter(p => p.category === currentFilter));
    }
}

function renderProducts(items) {
    grid.innerHTML = ''; 
    if (items.length === 0) {
        grid.innerHTML = '<p style="color: var(--text-secondary); grid-column: 1 / -1;">No products found.</p>';
        return;
    }
    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="img-wrapper"><img src="${product.image}" alt="${product.name}" loading="lazy"></div>
            <div class="product-info">
                <span class="p-category">${product.category}</span>
                <h3 class="p-name">${product.name}</h3>
                <div class="p-bottom">
                    <span class="p-price"> ${product.price.toLocaleString()}</span>
                    <button class="add-btn" onclick="addToBasket(${product.id})"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderOptionsGrid(optionsArray, containerId, type) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    optionsArray.forEach(option => {
        const card = document.createElement('div');
        card.className = 'selection-card';
        card.id = `${type}-${option.id}`;
        card.innerHTML = `
            <img src="${option.image}" alt="${option.name}">
            <span class="selection-title">${option.name}</span>
            <span class="selection-price"> ${option.price}</span>
        `;
        
        card.onclick = () => {
            document.querySelectorAll(`#${containerId} .selection-card`).forEach(el => el.classList.remove('selected'));
            card.classList.add('selected');
            if(type === 'packaging') selectedPackaging = option;
            if(type === 'card') selectedCard = option;
            updateBasketUI();
        };
        container.appendChild(card);
    });
}

// ==========================================
// 5. BASKET LOGIC
// ==========================================
window.addToBasket = function(productId) {
    const product = products.find(p => p.id === productId);
    if(basket.find(item => item.id === productId)) { showToast("Item already in box!"); return; }
    
    basket.push(product);
    updateBasketUI();
    showToast(`${product.name} added!`);
};

window.removeFromBasket = function(productId) {
    basket = basket.filter(p => p.id !== productId);
    updateBasketUI();
};

function updateBasketUI() {
    let totalCount = basket.length;
    let totalPrice = basket.reduce((sum, item) => sum + item.price, 0);

    if (selectedPackaging) totalPrice += selectedPackaging.price;
    if (selectedCard) totalPrice += selectedCard.price;

    basketCountEl.innerText = `${totalCount} item${totalCount !== 1 ? 's' : ''}`;
    basketTotalEl.innerText = ` ${totalPrice.toLocaleString()}`;

    if (currentStep === 1) nextBtn.disabled = basket.length === 0;

    if (basket.length === 0 && !selectedPackaging && !selectedCard) {
        basketItemsContainer.innerHTML = `<div class="empty-basket"><div class="empty-icon"><i class="fa-solid fa-box-open"></i></div><p>Your box is empty.</p></div>`;
        return;
    }

    basketItemsContainer.innerHTML = '';
    
    basket.forEach(item => {
        basketItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}">
                <div class="cart-item-details">
                    <span class="cart-item-title">${item.name}</span>
                    <span class="cart-item-price"> ${item.price.toLocaleString()}</span>
                </div>
                <button class="remove-btn" onclick="removeFromBasket(${item.id})"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `;
    });

    if (selectedPackaging) {
        basketItemsContainer.innerHTML += `
            <div class="cart-item" style="border-left: 3px solid var(--text-primary);">
                <img src="${selectedPackaging.image}">
                <div class="cart-item-details">
                    <span class="cart-item-title">Box: ${selectedPackaging.name}</span>
                    <span class="cart-item-price"> ${selectedPackaging.price}</span>
                </div>
            </div>
        `;
    }

    if (selectedCard) {
        basketItemsContainer.innerHTML += `
            <div class="cart-item" style="border-left: 3px solid var(--text-primary);">
                <img src="${selectedCard.image}">
                <div class="cart-item-details">
                    <span class="cart-item-title">Card: ${selectedCard.name}</span>
                    <span class="cart-item-price"> ${selectedCard.price}</span>
                </div>
            </div>
        `;
    }
}

// ==========================================
// 6. CATEGORIZED MODAL & CHECKOUT
// ==========================================
function openReviewModal() {
    const total = basket.reduce((sum, item) => sum + item.price, 0) + (selectedPackaging?.price || 0) + (selectedCard?.price || 0);
    const modalItemsList = document.getElementById('modal-items-list');
    modalItemsList.innerHTML = '';
    
    // CATEGORY 1: PRODUCTS
    if (basket.length > 0) {
        modalItemsList.innerHTML += `<h4 class="review-category-title">1. Selected Items</h4>`;
        basket.forEach(item => {
            modalItemsList.innerHTML += `
                <div class="review-item">
                    <img src="${item.image}">
                    <div class="r-details">
                        <span class="r-name">${item.name}</span>
                        <span class="r-price"> ${item.price.toLocaleString()}</span>
                    </div>
                </div>
            `;
        });
    }

    // CATEGORY 2: PACKAGING
    if (selectedPackaging) {
        modalItemsList.innerHTML += `<h4 class="review-category-title">2. Packaging</h4>`;
        modalItemsList.innerHTML += `
            <div class="review-item">
                <img src="${selectedPackaging.image}">
                <div class="r-details">
                    <span class="r-name">${selectedPackaging.name}</span>
                    <span class="r-price"> ${selectedPackaging.price}</span>
                </div>
            </div>
        `;
    }

    // CATEGORY 3: CARD & MESSAGE
    if (selectedCard) {
        modalItemsList.innerHTML += `<h4 class="review-category-title">3. Card & Note</h4>`;
        modalItemsList.innerHTML += `
            <div class="review-item">
                <img src="${selectedCard.image}">
                <div class="r-details">
                    <span class="r-name">${selectedCard.name}</span>
                    <span class="r-price"> ${selectedCard.price}</span>
                </div>
            </div>
        `;
    }

    // Recipient & Message Container
    const recipient = giftRecipientEl?.value.trim() || '';
    const message = giftMessageEl?.value.trim() || '';

    if (recipient !== '' || message !== '') {
        modalItemsList.innerHTML += `
            <div style="background:#f9fafb; padding:16px; border-radius:12px; margin-top:12px; border: 1px solid var(--border-color);">
                ${recipient ? `<strong style="color:var(--text-primary); display:block; margin-bottom:6px; font-size: 0.95rem;">To: ${recipient}</strong>` : ''}
                ${message ? `<span style="font-style:italic; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5; display: block;">"${message}"</span>` : ''}
            </div>
        `;
    }

    // Update Totals
    document.getElementById('modal-subtotal').innerText = ` ${total.toLocaleString()}`;
    document.getElementById('modal-total').innerText = ` ${total.toLocaleString()}`;
    
    checkoutModal.classList.add('active');
}

document.getElementById('close-modal').addEventListener('click', () => checkoutModal.classList.remove('active'));
checkoutModal.addEventListener('click', (e) => { if (e.target === checkoutModal) checkoutModal.classList.remove('active'); });

// Mock Payment
const payBtn = document.getElementById('pay-btn');
if(payBtn) {
    payBtn.addEventListener('click', () => {
        payBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing...';
        payBtn.disabled = true;

        setTimeout(() => {
            showToast('Payment successful! Your custom box is being prepared.');
            
            // Reset state
            basket = [];
            selectedPackaging = null;
            selectedCard = null;
            if(giftRecipientEl) giftRecipientEl.value = '';
            if(giftMessageEl) giftMessageEl.value = '';
            document.querySelectorAll('.selection-card').forEach(el => el.classList.remove('selected'));
            
            updateBasketUI();
            checkoutModal.classList.remove('active');
            goToStep(1); 
            
            payBtn.innerHTML = 'Proceed to Payment <i class="fa-solid fa-lock"></i>';
            payBtn.disabled = false;
        }, 2000); 
    });
}

// ==========================================
// 7. TOAST UTILITY
// ==========================================
function showToast(message) {
    const toast = document.getElementById("toast");
    if(!toast) return;
    toast.innerText = message;
    toast.className = "show success-toast"; 
    setTimeout(() => { toast.className = toast.className.replace("show", "").trim(); }, 3000);
}