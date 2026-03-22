# 🎁 Gift Hub

---

## 🧾 Overview

**Gift Hub** is a fully client-side web application that simulates an e-commerce experience.  
Users can browse products, build custom gift baskets, manage a cart, and complete a checkout flow.

---

## ✨ Core Features

- Dynamic product listing
- Interactive shopping cart system
- Custom gift basket builder
- Persistent cart using browser storage
- Checkout flow with form handling
- Multi-page navigation structure

---

## 🏗️ Architecture

```
Js/
├── builder.js
├── cart.js
├── checkout.js
├── products.js
└── script.js

Pages/
├── Actions/
├── Css/
├── Header/
├── Footer/
├── about.html
├── contact.html
├── custom-basket.html
└── gallery.html

index.html
```

---

## ⚙️ System Workflow

### 🔹 Product Layer
- Defined in `products.js`
- Injected dynamically into UI

### 🔹 Cart Engine
- Managed in `cart.js`
- Uses `localStorage` for persistence

### 🔹 Custom Basket
- Implemented in `builder.js`

### 🔹 Checkout Pipeline
1. Cart review
2. Form input collection
3. Validation
4. Order confirmation

### 🔹 Global Control
- `script.js` manages shared UI behaviors

---
