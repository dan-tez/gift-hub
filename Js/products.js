const products = [
    //WATCHES
    { id: 1, name: "Omega Seamaster", price: 6500, category: "Watches", image: "Images/Products/Omega_Seamaster_1.jpg" },
    { id: 2, name: "Rose Gold Minimalist", price: 1800, category: "Watches", image: "Images/Products/Rose Gold Minimalist.jpeg" },
    { id: 3, name: "Sport Digital Watch", price: 1500, category: "Watches", image: "Images/Products/Sport_Digital_Watch.jpg" },
    { id: 4, name: "Analog Watch", price: 1200, category: "Watches", image: "Images/Products/Analog Watch.jpeg" },
    { id: 5, name: "Vintage With Leather Strap", price: 2800, category: "Watches", image: "Images/Products/Vintage With Leather Strap.jpeg" },

    //HANDBAGS
    { id: 6, name: "Designer Leather Tote", price: 3500, category: "Handbags", image: "Images/Products/totebag.webp" },
    { id: 7, name: "Chic Evening Clutch", price: 1200, category: "Handbags", image: "Images/Products/Chic Evening Clutch.jpeg" },
    { id: 8, name: "Everyday Crossbody", price: 850, category: "Handbags", image: "Images/Products/Everyday Crossbody.jpeg" },
    { id: 9, name: "Woven Summer Satchel", price: 620, category: "Handbags", image: "Images/Products/Woven Summer Satchel.jpeg" },
    { id: 10, name: "Hobo Bag", price: 1580, category: "Handbags", image: "Images/Products/hobo bag.webp" },

    //PERFUMES
    { id: 11, name: "Signature Eau de Parfum", price: 1850, category: "Perfumes", image: "Images/Products/Signature Eau de Parfum.webp" },
    { id: 12, name: "Azha Ocean Breeze Cologne", price: 920, category: "Perfumes", image: "Images/Products/Ocean Breeze Cologne.webp" },
    { id: 13, name: "Midnight Rose Floral", price: 1150, category: "Perfumes", image: "Images/Products/Midnight Rose Floral.jpeg" },
    { id: 14, name: "Wood & Spice Musk", price: 1400, category: "Perfumes", image: "Images/Products/Wood & Spice Musk.webp" },
    { id: 15, name: "Citrus Bloom Mist", price: 3500, category: "Perfumes", image: "Images/Products/Citrus Bloom Mist.webp" },

    //ACCESSORIES 
    { id: 16, name: "Slim Leather Bifold", price: 4200, category: "Accessories", image: "Images/Products/Slim Leather Bifold.webp" },
    { id: 17, name: "Women's Zip-Around", price: 5800, category: "Accessories", image: "Images/Products/Women's Zip-Around.webp" },
    { id: 18, name: "Cardholder", price: 2200, category: "Accessories", image: "Images/Products/Minimalist Cardholder.webp" },
    { id: 19, name: "Polarized Aviators", price: 1650, category: "Accessories", image: "Images/Products/Polarized Aviators.webp" },
    { id: 20, name: "Retro Wayfarers", price: 1200, category: "Accessories", image: "Images/Products/Retro Wayfarers.webp" },
    { id: 21, name: "Oversized Cat-Eye", price: 1450, category: "Accessories", image: "Images/Products/Oversized Cat-Eye.webp" },
    { id: 22, name: "Classic Dress Belt", price: 5500, category: "Accessories", image: "Images/Products/Classic Dress Belt.webp" },
    { id: 23, name: "Skinny Leather Belt", price: 3800, category: "Accessories", image: "Images/Products/Skinny Leather Belt.webp" },
    { id: 24, name: "Reversible Belt", price: 7200, category: "Accessories", image: "Images/Products/Reversible Belt.webp" },
    { id: 25, name: "Wool Fedora", price: 8500, category: "Accessories", image: "Images/Products/Wool Fedora.webp" },
    { id: 26, name: "Wide Brim Sun Hat", price: 4200, category: "Accessories", image: "Images/Products/Wide Brim Sun Hat.webp" },
    { id: 27, name: "Cashmere Beanie", price: 980, category: "Accessories", image: "Images/Products/Cashmere Beanie.webp" },
    { id: 28, name: "Printed Silk Scarf", price: 1200, category: "Accessories", image: "Images/Products/Printed Silk Scarf.webp" },
    { id: 29, name: "Cashmere Wrap", price: 2200, category: "Accessories", image: "Images/Products/Cashmere Wrap.webp" },
    { id: 30, name: "Winter Wool Scarf", price: 650, category: "Accessories", image: "Images/Products/Winter Wool Scarf.webp" },

    // JEWELRY
    { id: 31, name: "18k Gold Chain", price: 12500, category: "Jewelry", image: "Images/Products/18k Gold Chain.webp" },
    { id: 32, name: "Silver Tennis Bracelet", price: 4500, category: "Jewelry", image: "Images/Products/Silver Tennis Bracelet.jpeg" },
    { id: 33, name: "Pearl Earrings", price: 1250, category: "Jewelry", image: "Images/Products/pearl earings.jpeg" },
    { id: 34, name: "Diamond Solitaire Ring", price: 45000, category: "Jewelry", image: "Images/Products/Diamond Solitaire Ring.webp" },
    { id: 35, name: "Crystal Pendant", price: 680, category: "Jewelry", image: "Images/Products/Crystal Pendant.webp" },

    //TECH
    { id: 36, name: "Wireless Headphones", price: 2800, category: "Tech", image: "Images/Products/Wireless Headphones.jpeg" },
    { id: 37, name: "Leather Charging Pad", price: 750, category: "Tech", image: "Images/Products/Leather Charging Pad.webp" },
    { id: 38, name: "Bluetooth Speaker", price: 1400, category: "Tech", image: "Images/Products/Bluetooth Speaker.jpeg" },
    { id: 39, name: "Smart Reusable Notebook", price: 4500, category: "Tech", image: "Images/Products/Smart Reusable Notebook.webp" },
    { id: 40, name: "Wireless keyboard and mouse", price: 6500, category: "Tech", image: "Images/Products/keyboard and mouse.webp" },

    //HOME
    { id: 41, name: "Scented Soy Candle", price: 2800, category: "Home", image: "Images/Products/Scented Soy Candle.webp" },
    { id: 42, name: "Silk Velvet Pillow", price: 5500, category: "Home", image: "Images/Products/Silk Velvet Pillow.webp" },
    { id: 43, name: "Marble Coaster Set", price: 4200, category: "Home", image: "Images/Products/Marble Coaster Set.webp" },
    { id: 44, name: "Ceramic Vase", price: 6800, category: "Home", image: "Images/Products/Ceramic Vase.webp" },
    { id: 45, name: "Woven Throw Blanket", price: 9500, category: "Home", image: "Images/Products/Woven Throw Blanket.webp" },

    //FLOWERS
    { id: 46, name: "Infinity Rose Box", price: 12000, category: "Flowers", image: "Images/Products/Infinity Rose Box.webp" },
    { id: 47, name: "Orchid Arrangement", price: 8500, category: "Flowers", image: "Images/Products/Orchid Arrangement.webp" },
    { id: 48, name: "Tulip Bouquet", price: 3500, category: "Flowers", image: "Images/Products/Tulip Bouquet.webp" },
    { id: 49, name: "Mixed Peony Vase", price: 7500, category: "Flowers", image: "Images/Products/Mixed Peony Vase.webp" },
    { id: 50, name: "Sunflower Bundle", price: 2800, category: "Flowers", image: "Images/Products/Sunflower Bundle.webp" },

    // STATIONERY
    { id: 51, name: "Fountain Pen Set", price: 14500, category: "Stationery", image: "Images/Products/Fountain Pen Set.webp" },
    { id: 52, name: "Hardcover Journal", price: 2500, category: "Stationery", image: "Images/Products/Hardcover Journal.webp" },
    { id: 53, name: "Leather Desk Mat", price: 6200, category: "Stationery", image: "Images/Products/Leather Desk Mat.webp" },
    { id: 54, name: "Personalized Wax Seal", price: 3800, category: "Stationery", image: "Images/Products/Personalized Wax Seal.webp" },
    { id: 55, name: "Brass Paperweight", price: 4500, category: "Stationery", image: "Images/Products/Brass Paperweight.webp" },

    // WELLNESS
    { id: 56, name: "Silk Sleep Mask", price: 3500, category: "Wellness", image: "Images/Products/Silk Sleep Mask.webp" },
    { id: 57, name: "Essential Oil Diffuser", price: 6500, category: "Wellness", image: "Images/Products/Essential Oil Diffuser.webp" },
    { id: 58, name: "Bath Salts", price: 1800, category: "Wellness", image: "Images/Products/Bath Salts.webp" },
    { id: 59, name: "Plush Cotton Robe", price: 12000, category: "Wellness", image: "Images/Products/Plush Cotton Robe.webp" },
    { id: 60, name: "Yoga Mat with Strap", price: 7500, category: "Wellness", image: "Images/Products/Yoga Mat with Strap.webp" },

    // BABY
    { id: 61, name: "Organic Cotton Onesie Set", price: 4800, category: "Baby", image: "Images/Products/Organic Cotton Onesie Set.webp" },
    { id: 62, name: "Silver Baby Rattle", price: 14500, category: "Baby", image: "Images/Products/Silver Baby Rattle.webp" },
    { id: 63, name: "Cashmere Baby Blanket", price: 16000, category: "Baby", image: "Images/Products/Cashmere Baby Blanket.webp" },
    { id: 64, name: "Wooden Block Set", price: 5500, category: "Baby", image: "Images/Products/Wooden Block Set.webp" },
    { id: 65, name: "Soft Plush Teddy", price: 4200, category: "Baby", image: "Images/Products/Soft Plush Teddy.webp" },

    // 66-70: DRINKWARE
    { id: 66, name: "Crystal Wine Glasses (Set of 2)", price: 8500, category: "Drinkware", image: "Images/Products/Crystal Wine Glasses.webp" },
    { id: 67, name: "Copper Moscow Mule Mugs", price: 5200, category: "Drinkware", image: "Images/Products/Copper Moscow Mule Mugs.webp" },
    { id: 68, name: "Insulated Coffee Tumbler", price: 3500, category: "Drinkware", image: "Images/Products/Insulated Coffee Tumbler.webp" },
    { id: 69, name: "Ceramic Teapot Set", price: 12500, category: "Drinkware", image: "Images/Products/Ceramic Teapot Set.webp" },
    { id: 70, name: "Glass Decanter", price: 11000, category: "Drinkware", image: "Images/Products/Glass Decanter.webp" },    
];

// 2. PACKAGING OPTIONS
const packagingOptions = [
    { id: 86, name: "Matte Black Signature Box", price: 1200, category: "Packaging", image: "Images/Products/Matte Black Signature Box.webp" },
    { id: 87, name: "White & Gold Luxe Box", price: 1800, category: "Packaging", image: "Images/Products/White & Gold Luxe Box.webp" },
    { id: 88, name: "Eco-Kraft Ribbon Box", price: 650, category: "Packaging", image: "Images/Products/Eco-Kraft Ribbon Box.webp" },
    { id: 89, name: "Wooden Keepsake Crate", price: 4500, category: "Packaging", image: "Images/Products/Wooden Keepsake Crate.webp" },
    { id: 90, name: "Velvet Pouch Set", price: 950, category: "Packaging", image: "Images/Products/Velvet Pouch Set.webp" },
];

// 3. CARD OPTIONS
const cardOptions = [
    { id: 91, name: "Happy Birthday Foil Card", price: 450, category: "Cards", image: "Images/Products/Happy Birthday Foil Card.webp" },
    { id: 92, name: "Anniversary Love Card", price: 450, category: "Cards", image: "Images/Products/Anniversary Love Card.webp" },
    { id: 93, name: "Congratulations Card", price: 450, category: "Cards", image: "Images/Products/Congratulations Card.webp" },
    { id: 94, name: "Thank You Note", price: 450, category: "Cards", image: "Images/Products/Thank You Note.webp" },
    { id: 95, name: "Blank Elegant Note", price: 350, category: "Cards", image: "Images/Products/Blank Elegant Note.webp" },
    { id: 96, name: "Sympathy Card", price: 450, category: "Cards", image: "Images/Products/Sympathy Card.webp" },
    { id: 97, name: "Get Well Soon Card", price: 450, category: "Cards", image: "Images/Products/Get Well Soon Card.webp" },
    { id: 98, name: "Welcome Little One", price: 450, category: "Cards", image: "Images/Products/Welcome Little One.webp" },
];