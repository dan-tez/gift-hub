// script.js
// --- State Management ---
let cartCount = parseInt(localStorage.getItem('luxeCartCount')) || 0;

// Array matches the spelling in products.js perfectly
const categoriesList = [
    'Watches', 'Handbags', 'Perfumes', 'Wallets', 'Sunglasses', 
    'Belts', 'Jewelry', 'Hats', 'Scarves', 'Gift Sets'
];

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    updateCartDisplay();
    populateStorefront(); 
});

// --- Dynamic Assembly Line Logic ---
function populateStorefront() {
    categoriesList.forEach(category => {
        // Formulate the base key (e.g., "Gift Sets" -> "gift-sets")
        const baseKey = category.toLowerCase().replace(' ', '-');
        
        // Target the simplified grid ID (e.g., id="watches") and the template
        const grid = document.getElementById(baseKey);
        const templateCard = document.getElementById('template-' + baseKey);
        
        if (grid && templateCard) {
            
            // 1. Create the clean blueprint
            const blueprint = templateCard.cloneNode(true);
            blueprint.removeAttribute('id');
            
            // 2. Clear the grid to remove the blank template
            grid.innerHTML = '';
            
            // 3. Filter products for this category
            const categoryProducts = products.filter(p => p.category === category);
            
            // 4. Map the products to the DOM
            categoryProducts.forEach(product => {
                const clone = blueprint.cloneNode(true);
                
                // Find elements using the baseKey identifiers
                const imgEl = clone.querySelector('#img-' + baseKey);
                const infoDiv = clone.querySelector('#' + baseKey + '-info');
                const nameEl = clone.querySelector('#name-' + baseKey);
                const priceEl = clone.querySelector('#price-' + baseKey);
                const btnEl = clone.querySelector('#btn-' + baseKey);
                
                // Inject data and mutate IDs using the database product.id
                if (imgEl) {
                    imgEl.src = product.image;
                    imgEl.alt = product.name;
                    imgEl.id = 'img-' + product.id; 
                }
                
                if (infoDiv) {
                    infoDiv.id = 'info-' + product.id; 
                }
                
                if (nameEl) {
                    nameEl.textContent = product.name;
                    nameEl.id = 'name-' + product.id; 
                }
                
                if (priceEl) {
                    priceEl.textContent = `Ksh ${product.price.toLocaleString()}`;
                    priceEl.id = 'price-' + product.id; 
                }
                
                if (btnEl) {
                    btnEl.onclick = () => addToCart(product.name);
                    btnEl.id = 'btn-' + product.id; 
                }
                
                // 5. Append finished card to the grid
                grid.appendChild(clone);
            });
        }
    });
}

// --- Interactive Features ---
function updateCartDisplay() {
    const cartElement = document.getElementById('cart-count');
    if(cartElement) cartElement.innerText = cartCount;
}

function addToCart(productName) {
    cartCount++;
    localStorage.setItem('luxeCartCount', cartCount);
    updateCartDisplay();
    showToast(`${productName} added to cart! 🛍️`);
}

document.addEventListener('DOMContentLoaded', () => {
    // Target the form from the HTML
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // 1. Prevent the default page reload on submit
            event.preventDefault();

            // 2. Trigger your existing toast function
            showToast('Your email has been sent successfully!');

            // 3. Instantly clear all text inputs, textareas, and checkboxes
            contactForm.reset();
        });
    }
});

// Your existing function remains exactly as is:
function showToast(message) {
    const toast = document.getElementById("toast");
    if(!toast) return;
    toast.innerText = message;
    toast.className = "show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

function loadHeader() {
    fetch('../Pages/Header/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-header').innerHTML = data;
            highlightActiveLink();
        })
        .catch(error => console.error('Error loading header:', error));
}


// Initialize
loadHeader();