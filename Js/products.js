const products = [
    //WATCHES
    { id: 1, name: "Omega Seamaster", price: 25000, category: "Watches", image: "Images/Products/Omega_Seamaster_1.jpg" },
    { id: 2, name: "Rose Gold Minimalist", price: 32000, category: "Watches", image: "Images/Products/Rose Gold Minimalist.jpeg" },
    { id: 3, name: "Sport Digital Watch", price: 15000, category: "Watches", image: "Images/Products/Sport_Digital_Watch.jpg" },
    { id: 4, name: "Analog Watch", price: 85000, category: "Watches", image: "Images/Products/Analog Watch.jpeg" },
    { id: 5, name: "Vintage With Leather Strap", price: 21000, category: "Watches", image: "Images/Products/Vintage With Leather Strap.jpeg" },

    //HANDBAGS
    { id: 6, name: "Designer Leather Tote", price: 45000, category: "Handbags", image: "Images/Products/totebag.webp" },
    { id: 7, name: "Chic Evening Clutch", price: 18000, category: "Handbags", image: "Images/Products/Chic Evening Clutch.jpeg" },
    { id: 8, name: "Everyday Crossbody", price: 22000, category: "Handbags", image: "Images/Products/Everyday Crossbody.jpeg" },
    { id: 9, name: "Woven Summer Satchel", price: 28000, category: "Handbags", image: "Images/Products/Woven Summer Satchel.jpeg" },
    { id: 10, name: "Hobo Bag", price: 60000, category: "Handbags", image: "Images/Products/hobo bag.webp" },

    //PERFUMES
    { id: 11, name: "Signature Eau de Parfum", price: 15000, category: "Perfumes", image: "Images/Products/Signature Eau de Parfum.webp" },
    { id: 12, name: "Azha Ocean Breeze Cologne", price: 12500, category: "Perfumes", image: "Images/Products/Ocean Breeze Cologne.webp" },
    { id: 13, name: "Midnight Rose Floral", price: 14200, category: "Perfumes", image: "Images/Products/Midnight Rose Floral.jpeg" },
    { id: 14, name: "Wood & Spice Musk", price: 18000, category: "Perfumes", image: "Images/Products/Wood & Spice Musk.webp" },
    { id: 15, name: "Citrus Bloom Mist", price: 8500, category: "Perfumes", image: "Images/Products/Citrus Bloom Mist.webp" },

    //ACCESSORIES 
    { id: 16, name: "Slim Leather Bifold", price: 5500, category: "Accessories", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=400" },
    { id: 17, name: "Women's Zip-Around", price: 7800, category: "Accessories", image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=400" },
    { id: 18, name: "Minimalist Cardholder", price: 3200, category: "Accessories", image: "https://images.unsplash.com/photo-1534062597401-4ec4c4ad0cd0?q=80&w=400" },
    { id: 19, name: "Polarized Aviators", price: 12500, category: "Accessories", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=400" },
    { id: 20, name: "Retro Wayfarers", price: 9800, category: "Accessories", image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=400" },
    { id: 21, name: "Oversized Cat-Eye", price: 14500, category: "Accessories", image: "https://images.unsplash.com/photo-1508296695146-257a814050b4?q=80&w=400" },
    { id: 22, name: "Classic Dress Belt", price: 6500, category: "Accessories", image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=400" },
    { id: 23, name: "Skinny Leather Belt", price: 4800, category: "Accessories", image: "https://images.unsplash.com/photo-1553704571-c32d20e6c74f?q=80&w=400" },
    { id: 24, name: "Reversible Belt", price: 8200, category: "Accessories", image: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=400" },
    { id: 25, name: "Wool Fedora", price: 9500, category: "Accessories", image: "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?q=80&w=400" },
    { id: 26, name: "Wide Brim Sun Hat", price: 7200, category: "Accessories", image: "https://images.unsplash.com/photo-1521369909029-2afed882ba9d?q=80&w=400" },
    { id: 27, name: "Cashmere Beanie", price: 6800, category: "Accessories", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=400" },
    { id: 28, name: "Printed Silk Scarf", price: 14500, category: "Accessories", image: "https://images.unsplash.com/photo-1601379326922-0d127a3c7519?q=80&w=400" },
    { id: 29, name: "Cashmere Wrap", price: 28000, category: "Accessories", image: "https://images.unsplash.com/photo-1520903073663-8f0a0bbbfcc7?q=80&w=400" },
    { id: 30, name: "Winter Wool Scarf", price: 8200, category: "Accessories", image: "https://images.unsplash.com/photo-1584988358434-297eb04dc66d?q=80&w=400" },

    // JEWELRY
    { id: 31, name: "18k Gold Chain", price: 75000, category: "Jewelry", image: "Images/Products/18k Gold Chain.webp" },
    { id: 32, name: "Silver Tennis Bracelet", price: 32000, category: "Jewelry", image: "Images/Products/Silver Tennis Bracelet.jpeg" },
    { id: 33, name: "Pearl Earrings", price: 18500, category: "Jewelry", image: "Images/Products/pearl earings.jpeg" },
    { id: 34, name: "Diamond Solitaire Ring", price: 150000, category: "Jewelry", image: "Images/Products/Diamond Solitaire Ring.webp" },
    { id: 35, name: "Crystal Pendant", price: 12800, category: "Jewelry", image: "Images/Products/Crystal Pendant.webp" },

    //TECH
    { id: 36, name: "Wireless Headphones", price: 35000, category: "Tech", image: "Images/Products/Wireless Headphones.jpeg" },
    { id: 37, name: "Leather Charging Pad", price: 12000, category: "Tech", image: "Images/Products/Leather Charging Pad.webp" },
    { id: 38, name: "Bluetooth Speaker", price: 28000, category: "Tech", image: "Images/Products/Bluetooth Speaker.jpeg" },
    { id: 39, name: "Smart Reusable Notebook", price: 8500, category: "Tech", image: "Images/Products/Smart Reusable Notebook.webp" },
    { id: 40, name: "Wireless keyboard and mouse", price: 5200, category: "Tech", image: "Images/Products/keyboard and mouse.webp" },

    //HOME
    { id: 41, name: "Scented Soy Candle", price: 4500, category: "Home", image: "Images/Products/Scented Soy Candle.webp" },
    { id: 42, name: "Silk Velvet Pillow", price: 7200, category: "Home", image: "Images/Products/Silk Velvet Pillow.webp" },
    { id: 43, name: "Marble Coaster Set", price: 5500, category: "Home", image: "Images/Products/Marble Coaster Set.webp" },
    { id: 44, name: "Ceramic Vase", price: 8800, category: "Home", image: "Images/Products/Ceramic Vase.webp" },
    { id: 45, name: "Woven Throw Blanket", price: 12500, category: "Home", image: "Images/Products/Woven Throw Blanket.webp" },

    //FLOWERS
    { id: 46, name: "Infinity Rose Box", price: 15000, category: "Flowers", image: "Images/Products/Infinity Rose Box.webp" },
    { id: 47, name: "Orchid Arrangement", price: 9500, category: "Flowers", image: "Images/Products/Orchid Arrangement.webp" },
    { id: 48, name: "Tulip Bouquet", price: 6800, category: "Flowers", image: "Images/Products/Tulip Bouquet.webp" },
    { id: 49, name: "Mixed Peony Vase", price: 11000, category: "Flowers", image: "Images/Products/Mixed Peony Vase.webp" },
    { id: 50, name: "Sunflower Bundle", price: 4200, category: "Flowers", image: "Images/Products/Sunflower Bundle.webp" },

    // STATIONERY
    { id: 51, name: "Fountain Pen Set", price: 18500, category: "Stationery", image: "Images/Products/Fountain Pen Set.webp" },
    { id: 52, name: "Hardcover Journal", price: 3500, category: "Stationery", image: "Images/Products/Hardcover Journal.webp" },
    { id: 53, name: "Leather Desk Mat", price: 7200, category: "Stationery", image: "Images/Products/Leather Desk Mat.webp" },
    { id: 54, name: "Personalized Wax Seal", price: 4800, category: "Stationery", image: "Images/Products/Personalized Wax Seal.webp" },
    { id: 55, name: "Brass Paperweight", price: 2900, category: "Stationery", image: "Images/Products/Brass Paperweight.webp" },

    // WELLNESS
    { id: 56, name: "Silk Sleep Mask", price: 3200, category: "Wellness", image: "Images/Products/Silk Sleep Mask.webp" },
    { id: 57, name: "Essential Oil Diffuser", price: 8500, category: "Wellness", image: "Images/Products/Essential Oil Diffuser.webp" },
    { id: 58, name: "Bath Salts", price: 2800, category: "Wellness", image: "Images/Products/Bath Salts.webp" },
    { id: 59, name: "Plush Cotton Robe", price: 14500, category: "Wellness", image: "Images/Products/Plush Cotton Robe.webp" },
    { id: 60, name: "Yoga Mat with Strap", price: 9200, category: "Wellness", image: "Images/Products/Yoga Mat with Strap.webp" },

    // BABY
    { id: 61, name: "Organic Cotton Onesie Set", price: 6500, category: "Baby", image: "Images/Products/Organic Cotton Onesie Set.webp" },
    { id: 62, name: "Silver Baby Rattle", price: 12500, category: "Baby", image: "Images/Products/Silver Baby Rattle.webp" },
    { id: 63, name: "Cashmere Baby Blanket", price: 18000, category: "Baby", image: "Images/Products/Cashmere Baby Blanket.webp" },
    { id: 64, name: "Wooden Block Set", price: 4200, category: "Baby", image: "Images/Products/Wooden Block Set.webp" },
    { id: 65, name: "Soft Plush Teddy", price: 3800, category: "Baby", image: "Images/Products/Soft Plush Teddy.webp" },

    // 66-70: DRINKWARE
    { id: 66, name: "Crystal Wine Glasses (Set of 2)", price: 11000, category: "Drinkware", image: "Images/Products/Crystal Wine Glasses.webp" },
    { id: 67, name: "Copper Moscow Mule Mugs", price: 7500, category: "Drinkware", image: "Images/Products/Copper Moscow Mule Mugs.webp" },
    { id: 68, name: "Insulated Coffee Tumbler", price: 4800, category: "Drinkware", image: "Images/Products/Insulated Coffee Tumbler.webp" },
    { id: 69, name: "Ceramic Teapot Set", price: 15500, category: "Drinkware", image: "Images/Products/Ceramic Teapot Set.webp" },
    { id: 70, name: "Glass Decanter", price: 18000, category: "Drinkware", image: "Images/Products/Glass Decanter.webp" },    
];

// 2. PACKAGING OPTIONS
const packagingOptions = [
    { id: 86, name: "Matte Black Signature Box", price: 1500, category: "Packaging", image: "Images/Products/Matte Black Signature Box.webp" },
    { id: 87, name: "White & Gold Luxe Box", price: 2200, category: "Packaging", image: "Images/Products/White & Gold Luxe Box.webp" },
    { id: 88, name: "Eco-Kraft Ribbon Box", price: 850, category: "Packaging", image: "Images/Products/Eco-Kraft Ribbon Box.webp" },
    { id: 89, name: "Wooden Keepsake Crate", price: 3500, category: "Packaging", image: "Images/Products/Wooden Keepsake Crate.webp" },
    { id: 90, name: "Velvet Pouch Set", price: 1200, category: "Packaging", image: "Images/Products/Velvet Pouch Set.webp" },
];

// 3. CARD OPTIONS
const cardOptions = [
    { id: 91, name: "Happy Birthday Foil Card", price: 500, category: "Cards", image: "Images/Products/Happy Birthday Foil Card.webp" },
    { id: 92, name: "Anniversary Love Card", price: 500, category: "Cards", image: "Images/Products/Anniversary Love Card.webp" },
    { id: 93, name: "Congratulations Card", price: 500, category: "Cards", image: "Images/Products/Congratulations Card.webp" },
    { id: 94, name: "Thank You Note", price: 500, category: "Cards", image: "Images/Products/Thank You Note.webp" },
    { id: 95, name: "Blank Elegant Note", price: 350, category: "Cards", image: "Images/Products/Blank Elegant Note.webp" },
    { id: 96, name: "Sympathy Card", price: 500, category: "Cards", image: "Images/Products/Sympathy Card.webp" },
    { id: 97, name: "Get Well Soon Card", price: 500, category: "Cards", image: "Images/Products/Get Well Soon Card.webp" },
    { id: 98, name: "Welcome Little One", price: 500, category: "Cards", image: "Images/Products/Welcome Little One.webp" },
];