
// 1. STATE & INITIALIZATION

let cartCount = parseInt(localStorage.getItem('luxeCartCount')) || 0;
let cartItems = JSON.parse(localStorage.getItem('luxeCartItems')) || [];

const categoriesList = [
    'Watches', 'Handbags', 'Perfumes', 'Sunglasses', 
    'Jewelry', 'Tech', 'Home',  'Flowers', 
    'Stationery', 'Wellness',
    'Baby', 'Drinkware', 'Accessories'
];
document.addEventListener("DOMContentLoaded", () => {
    loadHeader();
    loadFooter();
    
    if (typeof products !== 'undefined') {
        populateStorefront(); 
    } else {
        console.error("Products array not found. Ensure products.js is loaded.");
    }
});


// 2. DYNAMIC STOREFRONT (Carrefour Architecture)

function populateStorefront() {
    const storefrontContainer = document.getElementById('storefront');
    if (!storefrontContainer) return;
    
    storefrontContainer.innerHTML = ''; 

    categoriesList.forEach(category => {
        const categoryProducts = products.filter(p => p.category === category);
        if (categoryProducts.length === 0) return;

        const baseKey = category.toLowerCase().replace(' ', '-');
        
        // The white container block for the whole category row
        const section = document.createElement('section');
        section.className = 'category-row'; 
        section.id = `section-${baseKey}`;
        
        let productsHTML = '';
        categoryProducts.forEach(product => {
            // Calculate a fake "old price" (20% higher) to mimic Carrefour discounts
            const oldPrice = Math.floor(product.price * 1.2);

            productsHTML += `
                    <div class="luxe-product-card" id="card-${product.id}">
                        <div class="luxe-img-box">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="luxe-info">
                            <div class="luxe-price">
                                <span class="luxe-old-price">Ksh ${oldPrice}</span>
                                 Ksh ${product.price}
                            </div>
                            <span class="luxe-name">${product.name}</span>
                        </div>
                        <button class="luxe-add-btn" onclick="addToCart('${product.name}')">
                            <i class="fa-solid fa-plus"></i> Add
                        </button>
                    </div>
            `;
        });

        // Combine the header and the horizontal scroll track
        section.innerHTML = `
            <div class="row-header">
                <h3>${category}</h3>
                <a href="#" class="view-all-app">See All</a>
            </div>
            <div class="app-scroll-track" id="${baseKey}-track">
                ${productsHTML}
            </div>
        `;

        storefrontContainer.appendChild(section);
    });
}


// 3. CART LOGIC

function updateCartDisplay() {
    const cartElement = document.getElementById('cart-count');
    if (cartElement) {
        const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
        cartElement.innerText = totalItems;
        
        // Quick pop animation
        cartElement.style.transform = 'scale(1.2)';
        setTimeout(() => cartElement.style.transform = 'scale(1)', 200);
    }
}

window.addToCart = function(productName) {
    const product = products.find(p => p.name === productName);
    if (!product) return;

    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cartItems.push({ ...product, qty: 1 });
    }

    localStorage.setItem('luxeCartItems', JSON.stringify(cartItems));
    updateCartDisplay();
    showToast(`${product.name} added to cart!`);
};


// 4. UTILITIES (Header & Toast)

function loadHeader() {
    // Allows the header to load properly if you are in the root folder or the Pages folder
    const inSubfolder = window.location.pathname.includes('/Pages/');
    const headerPath = inSubfolder ? '/Pages/Header/header.html' : './Pages/Header/header.html';

    fetch(headerPath)
        .then(response => {
            if(!response.ok) throw new Error("Header not found at " + headerPath);
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

function loadFooter() {
    const inSubfolder = window.location.pathname.includes('/Pages/');
    const footerPath = inSubfolder ? '/Pages/Footer/footer.html' : './Pages/Footer/footer.html';

    fetch(footerPath)
        .then(response => response.text())
        .then(data => {
            // Find or create a footer tag
            let footerContainer = document.querySelector('footer');
            if (!footerContainer) {
                footerContainer = document.createElement('footer');
                document.body.appendChild(footerContainer);
            }
            footerContainer.outerHTML = data;
        });
}
window.showToast = function(message) {
    const toast = document.getElementById("toast");
    if(!toast) return;
    
    toast.style.position = 'fixed';
    toast.style.bottom = '30px';
    toast.style.right = '30px';
    toast.style.background = 'var(--primary-yellow)';
    toast.style.color = 'var(--dark-bg)';
    toast.style.fontWeight = '700';
    toast.style.padding = '16px 24px';
    toast.style.borderRadius = '8px';
    toast.style.fontSize = '0.95rem';
    toast.style.zIndex = '9999';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
    
    toast.innerText = message;
    
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 10);
    
    setTimeout(() => { 
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
    }, 3000);
};