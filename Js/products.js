const products = [
    // WATCHES
    { id: 1, name: "Classic Men's Chronograph", price: 2500, category: "Watches", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=400" },
    { id: 2, name: "Rose Gold Minimalist", price: 3200, category: "Watches", image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?q=80&w=400" },
    { id: 3, name: "Sport Digital Watch", price: 1500, category: "Watches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400" },
    { id: 4, name: "Luxury Diamond Bezel", price: 8500, category: "Watches", image: "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?q=80&w=400" },
    { id: 5, name: "Vintage Leather Strap", price: 2100, category: "Watches", image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=400" },
    

    // HANDBAGS
    { id: 6, name: "Designer Leather Tote", price: 4500, category: "Handbags", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=400" },
    { id: 7, name: "Chic Evening Clutch", price: 1800, category: "Handbags", image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=400" },
    { id: 8, name: "Everyday Crossbody", price: 2200, category: "Handbags", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=400" },
    { id: 9, name: "Woven Summer Satchel", price: 2800, category: "Handbags", image: "https://images.unsplash.com/photo-1614179689702-355944cd0918?q=80&w=400" },
    { id: 10, name: "Luxury Monogram Hobo", price: 6000, category: "Handbags", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=400" },

    // PERFUMES
    { id: 11, name: "Signature Eau de Parfum", price: 3500, category: "Perfumes", image: "https://images.unsplash.com/photo-1594035910387-fea47714263f?q=80&w=400" },
    { id: 12, name: "Ocean Breeze Cologne", price: 2800, category: "Perfumes", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=400" },
    { id: 13, name: "Midnight Rose Floral", price: 3200, category: "Perfumes", image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=400" },
    { id: 14, name: "Wood & Spice Musk", price: 4000, category: "Perfumes", image: "https://images.unsplash.com/photo-1615486171448-4e899cb48197?q=80&w=400" },
    { id: 15, name: "Citrus Bloom Mist", price: 1500, category: "Perfumes", image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=400" },

    // WALLETS
    { id: 16, name: "Slim Leather Bifold", price: 1200, category: "Wallets", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=400" },
    { id: 17, name: "Women's Zip-Around", price: 1800, category: "Wallets", image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=400" },
    { id: 18, name: "Minimalist Cardholder", price: 800, category: "Wallets", image: "https://images.unsplash.com/photo-1534062597401-4ec4c4ad0cd0?q=80&w=400" },
    { id: 19, name: "RFID Blocking Trifold", price: 1500, category: "Wallets", image: "https://images.unsplash.com/photo-1590845947376-2638caa89309?q=80&w=400" },
    { id: 20, name: "Designer Travel Wallet", price: 2500, category: "Wallets", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400" },

    // SUNGLASSES
    { id: 21, name: "Polarized Aviators", price: 1500, category: "Sunglasses", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=400" },
    { id: 22, name: "Retro Wayfarers", price: 1200, category: "Sunglasses", image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=400" },
    { id: 23, name: "Oversized Cat-Eye", price: 1800, category: "Sunglasses", image: "https://images.unsplash.com/photo-1508296695146-257a814050b4?q=80&w=400" },
    { id: 24, name: "Classic Round Metal", price: 1400, category: "Sunglasses", image: "https://images.unsplash.com/photo-1556306535-0f09a536f0b1?q=80&w=400" },
    { id: 25, name: "Sport Shield Shades", price: 2000, category: "Sunglasses", image: "https://images.unsplash.com/photo-1589782869914-7299a912bb04?q=80&w=400" },

    // BELTS
    { id: 26, name: "Men's Classic Dress Belt", price: 1000, category: "Belts", image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=400" },
    { id: 27, name: "Women's Skinny Leather", price: 800, category: "Belts", image: "https://images.unsplash.com/photo-1553704571-c32d20e6c74f?q=80&w=400" },
    { id: 28, name: "Reversible Black/Brown", price: 1500, category: "Belts", image: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=400" },
    { id: 29, name: "Designer Buckle Belt", price: 2500, category: "Belts", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=400" }, 
    { id: 30, name: "Braided Casual Belt", price: 1200, category: "Belts", image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=400" },

    // JEWELRY
    { id: 31, name: "18k Gold Chain", price: 5500, category: "Jewelry", image: "https://images.unsplash.com/photo-1599643478514-4a820cbf311e?q=80&w=400" },
    { id: 32, name: "Silver Tennis Bracelet", price: 3200, category: "Jewelry", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=400" },
    { id: 33, name: "Freshwater Pearl Earrings", price: 2000, category: "Jewelry", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400" },
    { id: 34, name: "Diamond Solitaire Ring", price: 12000, category: "Jewelry", image: "https://images.unsplash.com/photo-1605100804763-247f66126e28?q=80&w=400" },
    { id: 35, name: "Crystal Pendant Necklace", price: 1800, category: "Jewelry", image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=400" },

    // HATS
    { id: 36, name: "Classic Wool Fedora", price: 1500, category: "Hats", image: "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?q=80&w=400" },
    { id: 37, name: "Wide Brim Sun Hat", price: 1200, category: "Hats", image: "https://images.unsplash.com/photo-1521369909029-2afed882ba9d?q=80&w=400" },
    { id: 38, name: "Premium Baseball Cap", price: 800, category: "Hats", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=400" },
    { id: 39, name: "Cozy Knit Beanie", price: 600, category: "Hats", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=400" },
    { id: 40, name: "Straw Panama Hat", price: 1400, category: "Hats", image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?q=80&w=400" },

    // SCARVES
    { id: 41, name: "Pure Silk Scarf", price: 2000, category: "Scarves", image: "https://images.unsplash.com/photo-1601379326922-0d127a3c7519?q=80&w=400" },
    { id: 42, name: "Warm Cashmere Wrap", price: 3500, category: "Scarves", image: "https://images.unsplash.com/photo-1520903073663-8f0a0bbbfcc7?q=80&w=400" },
    { id: 43, name: "Plaid Winter Scarf", price: 1200, category: "Scarves", image: "https://images.unsplash.com/photo-1584988358434-297eb04dc66d?q=80&w=400" },
    { id: 44, name: "Lightweight Chiffon", price: 800, category: "Scarves", image: "https://images.unsplash.com/photo-1605335964860-252f2f767a99?q=80&w=400" },
    { id: 45, name: "Knit Infinity Scarf", price: 1000, category: "Scarves", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400" },

];

// 2. PACKAGING OPTIONS
const packagingOptions = [
    { id: 'box-1', name: "Signature Matte Black", price: 50, image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400" },
    { id: 'box-2', name: "Luxe White & Gold", price: 75, image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=400" },
    { id: 'box-3', name: "Eco-Kraft Ribbon", price: 30, image: "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?q=80&w=400" }
];

// 3. CARD OPTIONS
const cardOptions = [
    { id: 'card-1', name: "Happy Birthday", price: 15, image: "https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?q=80&w=400" },
    { id: 'card-2', name: "Congratulations", price: 15, image: "https://images.unsplash.com/photo-1606768666853-403c90a981ad?q=80&w=400" },
    { id: 'card-3', name: "A Note to Say Thanks", price: 15, image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=400" },
    { id: 'card-4', name: "Blank Elegant Card", price: 10, image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=400" }
];