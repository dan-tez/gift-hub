const products = [
    // 1-5: WATCHES
    { id: 1, name: "Men's Chronograph", price: 25000, category: "Watches", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=400" },
    { id: 2, name: "Rose Gold Minimalist", price: 32000, category: "Watches", image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?q=80&w=400" },
    { id: 3, name: "Sport Digital Watch", price: 15000, category: "Watches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400" },
    { id: 4, name: "Luxury Diamond Bezel", price: 85000, category: "Watches", image: "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?q=80&w=400" },
    { id: 5, name: "Vintage Leather Strap", price: 21000, category: "Watches", image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=400" },

    // 6-10: HANDBAGS
    { id: 6, name: "Designer Leather Tote", price: 45000, category: "Handbags", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=400" },
    { id: 7, name: "Chic Evening Clutch", price: 18000, category: "Handbags", image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=400" },
    { id: 8, name: "Everyday Crossbody", price: 22000, category: "Handbags", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=400" },
    { id: 9, name: "Woven Summer Satchel", price: 28000, category: "Handbags", image: "https://images.unsplash.com/photo-1614179689702-355944cd0918?q=80&w=400" },
    { id: 10, name: "Monogram Hobo Bag", price: 60000, category: "Handbags", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=400" },

    // 11-15: PERFUMES
    { id: 11, name: "Signature Eau de Parfum", price: 15000, category: "Perfumes", image: "https://images.unsplash.com/photo-1594035910387-fea47714263f?q=80&w=400" },
    { id: 12, name: "Ocean Breeze Cologne", price: 12500, category: "Perfumes", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=400" },
    { id: 13, name: "Midnight Rose Floral", price: 14200, category: "Perfumes", image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=400" },
    { id: 14, name: "Wood & Spice Musk", price: 18000, category: "Perfumes", image: "https://images.unsplash.com/photo-1615486171448-4e899cb48197?q=80&w=400" },
    { id: 15, name: "Citrus Bloom Mist", price: 8500, category: "Perfumes", image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=400" },

    // 16-20: WALLETS
    { id: 16, name: "Slim Leather Bifold", price: 5500, category: "Wallets", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=400" },
    { id: 17, name: "Women's Zip-Around", price: 7800, category: "Wallets", image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=400" },
    { id: 18, name: "Minimalist Cardholder", price: 3200, category: "Wallets", image: "https://images.unsplash.com/photo-1534062597401-4ec4c4ad0cd0?q=80&w=400" },
    { id: 19, name: "RFID Blocking Trifold", price: 6500, category: "Wallets", image: "https://images.unsplash.com/photo-1590845947376-2638caa89309?q=80&w=400" },
    { id: 20, name: "Travel Wallet", price: 9500, category: "Wallets", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400" },

    // 21-25: SUNGLASSES
    { id: 21, name: "Polarized Aviators", price: 12500, category: "Sunglasses", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=400" },
    { id: 22, name: "Retro Wayfarers", price: 9800, category: "Sunglasses", image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=400" },
    { id: 23, name: "Oversized Cat-Eye", price: 14500, category: "Sunglasses", image: "https://images.unsplash.com/photo-1508296695146-257a814050b4?q=80&w=400" },
    { id: 24, name: "Round Metal Frames", price: 11200, category: "Sunglasses", image: "https://images.unsplash.com/photo-1556306535-0f09a536f0b1?q=80&w=400" },
    { id: 25, name: "Shield Performance Shades", price: 16000, category: "Sunglasses", image: "https://images.unsplash.com/photo-1589782869914-7299a912bb04?q=80&w=400" },

    // 26-30: JEWELRY
    { id: 26, name: "18k Gold Chain", price: 75000, category: "Jewelry", image: "https://images.unsplash.com/photo-1599643478514-4a820cbf311e?q=80&w=400" },
    { id: 27, name: "Silver Tennis Bracelet", price: 32000, category: "Jewelry", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=400" },
    { id: 28, name: "Pearl Earrings", price: 18500, category: "Jewelry", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400" },
    { id: 29, name: "Diamond Solitaire Ring", price: 150000, category: "Jewelry", image: "https://images.unsplash.com/photo-1605100804763-247f66126e28?q=80&w=400" },
    { id: 30, name: "Crystal Pendant", price: 12800, category: "Jewelry", image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=400" },

    // 31-35: TECH ACCESSORIES
    { id: 31, name: "Wireless Headphones", price: 35000, category: "Tech", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400" },
    { id: 32, name: "Leather Charging Pad", price: 12000, category: "Tech", image: "https://images.unsplash.com/photo-1616438662555-604399e53a2c?q=80&w=400" },
    { id: 33, name: "Bluetooth Speaker", price: 28000, category: "Tech", image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=400" },
    { id: 34, name: "Smart Reusable Notebook", price: 8500, category: "Tech", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400" },
    { id: 35, name: "Aluminum Tablet Stand", price: 5200, category: "Tech", image: "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?q=80&w=400" },

    // 36-40: HOME DECOR
    { id: 36, name: "Scented Soy Candle", price: 4500, category: "Home", image: "https://images.unsplash.com/photo-1603006375271-7f3b904bb167?q=80&w=400" },
    { id: 37, name: "Silk Velvet Pillow", price: 7200, category: "Home", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?q=80&w=400" },
    { id: 38, name: "Marble Coaster Set", price: 5500, category: "Home", image: "https://images.unsplash.com/photo-1612459284970-e8f027596582?q=80&w=400" },
    { id: 39, name: "Minimalist Ceramic Vase", price: 8800, category: "Home", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=400" },
    { id: 40, name: "Woven Throw Blanket", price: 12500, category: "Home", image: "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?q=80&w=400" },

    // 41-45: GOURMET TREATS
    { id: 41, name: "Artisan Chocolate Box", price: 4200, category: "Gourmet", image: "https://images.unsplash.com/photo-1548335132-7198420be74c?q=80&w=400" },
    { id: 42, name: "Gold Leaf Macarons", price: 5500, category: "Gourmet", image: "https://images.unsplash.com/photo-1558326567-98ae21e520d5?q=80&w=400" },
    { id: 43, name: "Single Origin Coffee", price: 2800, category: "Gourmet", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400" },
    { id: 44, name: "Premium Tea Selection", price: 3200, category: "Gourmet", image: "https://images.unsplash.com/photo-1597481499750-3e6b216446ad?q=80&w=400" },
    { id: 45, name: "Sparkling Fruit Nectar", price: 1800, category: "Gourmet", image: "https://images.unsplash.com/photo-1622484210965-062e78749e1e?q=80&w=400" },

    // 46-50: FLOWERS
    { id: 46, name: "Infinity Rose Box", price: 15000, category: "Flowers", image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=400" },
    { id: 47, name: "Orchid Arrangement", price: 9500, category: "Flowers", image: "https://images.unsplash.com/photo-1567331711402-509c14bc606c?q=80&w=400" },
    { id: 48, name: "Tulip Bouquet", price: 6800, category: "Flowers", image: "https://images.unsplash.com/photo-1520188129113-6490333240e5?q=80&w=400" },
    { id: 49, name: "Mixed Peony Vase", price: 11000, category: "Flowers", image: "https://images.unsplash.com/photo-1563241527-3004b7be0fab?q=80&w=400" },
    { id: 50, name: "Sunflower Bundle", price: 4200, category: "Flowers", image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=400" },

    // 51-55: STATIONERY
    { id: 51, name: "Fountain Pen Set", price: 18500, category: "Stationery", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=400" },
    { id: 52, name: "Hardcover Journal", price: 3500, category: "Stationery", image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=400" },
    { id: 53, name: "Leather Desk Mat", price: 7200, category: "Stationery", image: "https://images.unsplash.com/photo-1593642634367-d91a135567b5?q=80&w=400" },
    { id: 54, name: "Personalized Wax Seal", price: 4800, category: "Stationery", image: "https://images.unsplash.com/photo-1603730628141-d85559894299?q=80&w=400" },
    { id: 55, name: "Brass Paperweight", price: 2900, category: "Stationery", image: "https://images.unsplash.com/photo-1588663806001-c3098f98c6ba?q=80&w=400" },

    // 56-60: WELLNESS
    { id: 56, name: "Silk Sleep Mask", price: 3200, category: "Wellness", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=400" },
    { id: 57, name: "Essential Oil Diffuser", price: 8500, category: "Wellness", image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=400" },
    { id: 58, name: "Luxury Bath Salts", price: 2800, category: "Wellness", image: "https://images.unsplash.com/photo-1554460300-85f053592c30?q=80&w=400" },
    { id: 59, name: "Plush Cotton Robe", price: 14500, category: "Wellness", image: "https://images.unsplash.com/photo-1518131394553-c3fd24b07908?q=80&w=400" },
    { id: 60, name: "Yoga Mat with Strap", price: 9200, category: "Wellness", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400" },

    // 61-65: BELTS
    { id: 61, name: "Classic Dress Belt", price: 6500, category: "Belts", image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=400" },
    { id: 62, name: "Skinny Leather Belt", price: 4800, category: "Belts", image: "https://images.unsplash.com/photo-1553704571-c32d20e6c74f?q=80&w=400" },
    { id: 63, name: "Reversible Belt", price: 8200, category: "Belts", image: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=400" },
    { id: 64, name: "Automatic Buckle Belt", price: 12500, category: "Belts", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=400" },
    { id: 65, name: "Braided Casual Belt", price: 5500, category: "Belts", image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=400" },

    // 66-70: HATS
    { id: 66, name: "Wool Fedora", price: 9500, category: "Hats", image: "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?q=80&w=400" },
    { id: 67, name: "Wide Brim Sun Hat", price: 7200, category: "Hats", image: "https://images.unsplash.com/photo-1521369909029-2afed882ba9d?q=80&w=400" },
    { id: 68, name: "Structured Baseball Cap", price: 4500, category: "Hats", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=400" },
    { id: 69, name: "Cashmere Beanie", price: 6800, category: "Hats", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=400" },
    { id: 70, name: "Panama Straw Hat", price: 8500, category: "Hats", image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?q=80&w=400" },

    // 71-75: SCARVES
    { id: 71, name: "Printed Silk Scarf", price: 14500, category: "Scarves", image: "https://images.unsplash.com/photo-1601379326922-0d127a3c7519?q=80&w=400" },
    { id: 72, name: "Cashmere Wrap", price: 28000, category: "Scarves", image: "https://images.unsplash.com/photo-1520903073663-8f0a0bbbfcc7?q=80&w=400" },
    { id: 73, name: "Winter Wool Scarf", price: 8200, category: "Scarves", image: "https://images.unsplash.com/photo-1584988358434-297eb04dc66d?q=80&w=400" },
    { id: 74, name: "Linen Lightweight Scarf", price: 5500, category: "Scarves", image: "https://images.unsplash.com/photo-1605335964860-252f2f767a99?q=80&w=400" },
    { id: 75, name: "Hand-knit Infinity Scarf", price: 6800, category: "Scarves", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400" },

    // 76-80: BABY GIFTS
    { id: 76, name: "Organic Cotton Onesie Set", price: 6500, category: "Baby", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=400" },
    { id: 77, name: "Silver Baby Rattle", price: 12500, category: "Baby", image: "https://images.unsplash.com/photo-1543362905-f2423ef4e0f8?q=80&w=400" },
    { id: 78, name: "Cashmere Baby Blanket", price: 18000, category: "Baby", image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=400" },
    { id: 79, name: "Wooden Block Set", price: 4200, category: "Baby", image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=400" },
    { id: 80, name: "Soft Plush Teddy", price: 3800, category: "Baby", image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=400" },

    // 81-85: DRINKWARE
    { id: 81, name: "Crystal Wine Glasses (Set of 2)", price: 11000, category: "Drinkware", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=400" },
    { id: 82, name: "Copper Moscow Mule Mugs", price: 7500, category: "Drinkware", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=400" },
    { id: 83, name: "Insulated Coffee Tumbler", price: 4800, category: "Drinkware", image: "https://images.unsplash.com/photo-1577931957312-58f826dfcf8d?q=80&w=400" },
    { id: 84, name: "Ceramic Teapot Set", price: 15500, category: "Drinkware", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=400" },
    { id: 85, name: "Glass Decanter", price: 18000, category: "Drinkware", image: "https://images.unsplash.com/photo-1582231245981-0846fc40669b?q=80&w=400" },

    // 86-90: PACKAGING
    { id: 86, name: "Matte Black Signature Box", price: 1500, category: "Packaging", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400" },
    { id: 87, name: "White & Gold Luxe Box", price: 2200, category: "Packaging", image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=400" },
    { id: 88, name: "Eco-Kraft Ribbon Box", price: 850, category: "Packaging", image: "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?q=80&w=400" },
    { id: 89, name: "Wooden Keepsake Crate", price: 3500, category: "Packaging", image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=400" },
    { id: 90, name: "Velvet Pouch Set", price: 1200, category: "Packaging", image: "https://images.unsplash.com/photo-1591122947157-26bad3a117d2?q=80&w=400" },

    // 91-100: CARDS & EXTRAS
    { id: 91, name: "Happy Birthday Foil Card", price: 500, category: "Cards", image: "https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?q=80&w=400" },
    { id: 92, name: "Anniversary Love Card", price: 500, category: "Cards", image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=400" },
    { id: 93, name: "Congratulations Card", price: 500, category: "Cards", image: "https://images.unsplash.com/photo-1606768666853-403c90a981ad?q=80&w=400" },
    { id: 94, name: "Thank You Note", price: 500, category: "Cards", image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=400" },
    { id: 95, name: "Blank Elegant Note", price: 350, category: "Cards", image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=400" },
    { id: 96, name: "Sympathy Card", price: 500, category: "Cards", image: "https://images.unsplash.com/photo-1544145945-f904253d0c71?q=80&w=400" },
    { id: 97, name: "Get Well Soon Card", price: 500, category: "Cards", image: "https://images.unsplash.com/photo-1593006526979-5f8814c229f9?q=80&w=400" },
    { id: 98, name: "Welcome Little One", price: 500, category: "Cards", image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=400" },
    { id: 99, name: "Silk Gift Ribbon", price: 200, category: "Extras", image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=400" },
    { id: 100, name: "Personalized Gift Tag", price: 150, category: "Extras", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=400" }
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