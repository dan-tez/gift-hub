# Luxe Gifts | Premium Gifting Hub

Luxe Gifts is a high-end, all-in-one e-commerce platform designed for a premium Kenyan market. The project transitions from a traditional retail store to a comprehensive "Gifting Hub," allowing users to browse luxury items and build custom gift boxes.

---


The core functionality is split into three primary JavaScript files to ensure a clean **Separation of Concerns**.

### 1. `products.js` (The Data Layer)
This file acts as our "Database." It contains the master arrays for all inventory.
* **The Hub Inventory:** Over 100 products organized into 20+ categories (Watches, Tech, Gourmet, etc.).
* **Packaging & Cards:** Separate arrays specifically for the "Enhancement" step of the gifting process.
* **Localized Pricing:** All values are stored as integers representing **KES** (Kenyan Shillings).

### 2. `script.js` (The Controller)
This is the heart of the Global Storefront. It handles the dynamic rendering of the homepage and the utility functions.
* **Dynamic Row Generation:** Instead of hardcoding HTML, the script iterates through `categoriesList` and automatically builds high-density rows for each category.
* **Modular Loading:** Contains the `loadHeader()` and `loadFooter()` functions. These use the `fetch()` API to inject HTML components into every page, ensuring that a change in the footer reflects site-wide instantly.
* **Cart Management:** Manages `localStorage` to persist user selections across different pages (Home, Gallery, About).

### 3. `builder.js` (The Gift Customizer)
This file powers the **3-Step Gift Builder**.
* **Step Logic:** Manages the State (`currentStep`) to toggle between Product Selection, Packaging, and Personalization.
* **The "Independent" Filter:** Uses an extraction logic to grab unique categories from the `products` array and renders them as "wrapping" filter buttons.
* **Basket State:** A local `basket[]` array tracks items added specifically to the custom box before they are bundled into a single "Master Item" for the final checkout.

---

### The "Independent" CSS Approach
To avoid "CSS Bleed" (where styles from one page break another), every major page (Gallery, About, Builder) has its own dedicated stylesheet. 
* **Glassmorphism:** Used in the sidebars and modals to create a depth-effect consistent with modern luxury UI.

### Gifting Hub Expansion
The site is optimized for **Average Order Value (AOV)** growth:
1.  **Selection:** User picks a high-value item (e.g., a Watch).
2.  **Add-ons:** The UI suggests "Packaging" and "Cards" as natural next steps.
3.  **The Result:** A single product purchase is transformed into a full "Gifting Experience."

---

**Developed as part of the SSE 2210 Project.**
