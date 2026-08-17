const productsData = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2499,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      category: "Electronics",
      description: "Comfortable wireless headphones with high-quality sound and long battery life.",
      rating: 4.5
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 3499,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
      category: "Electronics",
      description: "RGB mechanical keyboard designed for gaming and professional use.",
      rating: 4.6
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 4999,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      category: "Wearables",
      description: "Smart watch with fitness tracking, notifications and health monitoring features.",
      rating: 4.3
    },
    {
      id: 4,
      name: "Laptop Backpack",
      price: 1599,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      category: "Accessories",
      description: "Durable laptop backpack with multiple compartments and water-resistant material.",
      rating: 4.4
    },
    {
      id: 5,
      name: "Gaming Mouse",
      price: 1299,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
      category: "Gaming",
      description: "High-precision gaming mouse with customizable buttons and RGB lighting.",
      rating: 4.5
    },
    {
      id: 6,
      name: "USB-C Hub",
      price: 999,
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761",
      category: "Electronics",
      description: "Multi-port USB-C hub for connecting multiple devices to your laptop.",
      rating: 4.2
    },
    {
      id: 7,
      name: "Bluetooth Speaker",
      price: 1999,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
      category: "Audio",
      description: "Portable Bluetooth speaker with powerful audio and compact design.",
      rating: 4.4
    },
    {
      id: 8,
      name: "Webcam",
      price: 2299,
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
      category: "Electronics",
      description: "Full HD webcam suitable for meetings, streaming and online classes.",
      rating: 4.1
    },
    {
      id: 9,
      name: "Wireless Mouse",
      price: 799,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
      category: "Accessories",
      description: "Ergonomic wireless mouse with smooth tracking and comfortable grip.",
      rating: 4.3
    },
    {
      id: 10,
      name: "Phone Stand",
      price: 499,
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb",
      category: "Accessories",
      description: "Adjustable desk phone stand suitable for smartphones and tablets.",
      rating: 4.0
    },
    {
      id: 11,
      name: "Portable SSD",
      price: 5999,
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b",
      category: "Storage",
      description: "Fast portable SSD for transferring and storing large files.",
      rating: 4.7
    },
    {
      id: 12,
      name: "Power Bank",
      price: 1499,
      image: "https://images.unsplash.com/photo-1609592424087-0e7c6f1e7e6f",
      category: "Electronics",
      description: "High-capacity power bank for charging smartphones and other devices.",
      rating: 4.2
    },
    {
      id: 13,
      name: "Laptop Stand",
      price: 1299,
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      category: "Accessories",
      description: "Adjustable laptop stand designed to improve desk ergonomics.",
      rating: 4.5
    },
    {
      id: 14,
      name: "Gaming Headset",
      price: 2999,
      image: "https://images.unsplash.com/photo-1599669454699-248893623440",
      category: "Gaming",
      description: "Gaming headset with surround sound and noise-isolating ear cushions.",
      rating: 4.6
    },
    {
      id: 15,
      name: "Tablet",
      price: 15999,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
      category: "Electronics",
      description: "Lightweight tablet suitable for entertainment, study and productivity.",
      rating: 4.4
    },
    {
      id: 16,
      name: "Smartphone",
      price: 24999,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      category: "Electronics",
      description: "Modern smartphone with a high-resolution display and powerful processor.",
      rating: 4.5
    },
    {
      id: 17,
      name: "Desk Lamp",
      price: 899,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
      category: "Home",
      description: "LED desk lamp with adjustable brightness for study and office work.",
      rating: 4.1
    },
    {
      id: 18,
      name: "Water Bottle",
      price: 699,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
      category: "Lifestyle",
      description: "Reusable stainless steel water bottle designed to maintain temperature.",
      rating: 4.3
    },
    {
      id: 19,
      name: "Coffee Mug",
      price: 399,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a",
      category: "Home",
      description: "Minimal ceramic coffee mug suitable for home and office use.",
      rating: 4.2
    },
    {
      id: 20,
      name: "Notebook",
      price: 249,
      image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57",
      category: "Stationery",
      description: "Premium notebook with high-quality pages for notes and planning.",
      rating: 4.4
    },
    {
      id: 21,
      name: "Backpack",
      price: 1899,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      category: "Bags",
      description: "Everyday backpack with spacious compartments and modern styling.",
      rating: 4.5
    },
    {
      id: 22,
      name: "Desk Organizer",
      price: 599,
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094",
      category: "Office",
      description: "Compact desk organizer for keeping stationery and accessories arranged.",
      rating: 4.0
    },
    {
      id: 23,
      name: "LED Monitor",
      price: 12999,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
      category: "Electronics",
      description: "Full HD LED monitor suitable for work, study and entertainment.",
      rating: 4.6
    },
    {
      id: 24,
      name: "Gaming Chair",
      price: 8999,
      image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6",
      category: "Furniture",
      description: "Ergonomic gaming chair designed for comfortable long-duration sessions.",
      rating: 4.5
    },
    {
      id: 25,
      name: "Wireless Earbuds",
      price: 1799,
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
      category: "Audio",
      description: "Compact wireless earbuds with clear sound and a comfortable fit.",
      rating: 4.4
    },
    {
      id: 26,
      name: "Smart TV",
      price: 32999,
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
      category: "Electronics",
      description: "4K smart television with streaming apps and vibrant picture quality.",
      rating: 4.6
    },
    {
      id: 27,
      name: "Bluetooth Earphones",
      price: 1299,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
      category: "Audio",
      description: "Lightweight Bluetooth earphones designed for everyday listening.",
      rating: 4.2
    },
    {
      id: 28,
      name: "Fitness Band",
      price: 1999,
      image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558",
      category: "Wearables",
      description: "Fitness band with activity tracking, step counting and notifications.",
      rating: 4.3
    },
    {
      id: 29,
      name: "Air Purifier",
      price: 7499,
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd",
      category: "Home",
      description: "Compact air purifier designed to improve indoor air quality.",
      rating: 4.4
    },
    {
      id: 30,
      name: "Electric Kettle",
      price: 1499,
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5",
      category: "Kitchen",
      description: "Fast-boiling electric kettle with automatic shut-off functionality.",
      rating: 4.3
    },
    {
      id: 31,
      name: "Coffee Maker",
      price: 3999,
      image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6",
      category: "Kitchen",
      description: "Easy-to-use coffee maker for preparing fresh coffee at home.",
      rating: 4.5
    },
    {
      id: 32,
      name: "Air Fryer",
      price: 5499,
      image: "https://images.unsplash.com/photo-1585515320310-259814833e62",
      category: "Kitchen",
      description: "Digital air fryer for preparing crispy meals with less oil.",
      rating: 4.6
    },
    {
      id: 33,
      name: "Running Shoes",
      price: 2499,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      category: "Footwear",
      description: "Comfortable running shoes designed for daily workouts and jogging.",
      rating: 4.5
    },
    {
      id: 34,
      name: "Casual Sneakers",
      price: 2199,
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      category: "Footwear",
      description: "Stylish casual sneakers suitable for everyday wear.",
      rating: 4.4
    },
    {
      id: 35,
      name: "Leather Wallet",
      price: 899,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
      category: "Accessories",
      description: "Compact leather wallet with multiple card and cash compartments.",
      rating: 4.3
    },
    {
      id: 36,
      name: "Sunglasses",
      price: 1299,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
      category: "Accessories",
      description: "Classic sunglasses offering stylish design and comfortable fitting.",
      rating: 4.2
    },
    {
      id: 37,
      name: "Analog Watch",
      price: 2999,
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
      category: "Wearables",
      description: "Classic analog wristwatch with a premium minimalist design.",
      rating: 4.5
    },
    {
      id: 38,
      name: "Bluetooth Keyboard",
      price: 1799,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
      category: "Electronics",
      description: "Compact Bluetooth keyboard suitable for laptops, tablets and phones.",
      rating: 4.2
    },
    {
      id: 39,
      name: "Drawing Tablet",
      price: 4999,
      image: "https://images.unsplash.com/photo-1563089145-599997674d42",
      category: "Electronics",
      description: "Digital drawing tablet designed for artists and graphic designers.",
      rating: 4.6
    },
    {
      id: 40,
      name: "External Hard Drive",
      price: 4499,
      image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58",
      category: "Storage",
      description: "Portable external hard drive for reliable file storage and backup.",
      rating: 4.5
    },
    {
      id: 41,
      name: "Memory Card",
      price: 799,
      image: "https://images.unsplash.com/photo-1617897711389-8f6c1a2c7a2d",
      category: "Storage",
      description: "High-speed memory card suitable for cameras and mobile devices.",
      rating: 4.3
    },
    {
      id: 42,
      name: "WiFi Router",
      price: 2499,
      image: "https://images.unsplash.com/photo-1643123711360-72b6e9f6f9e7",
      category: "Networking",
      description: "High-speed WiFi router providing reliable wireless connectivity.",
      rating: 4.4
    },
    {
      id: 43,
      name: "USB Flash Drive",
      price: 599,
      image: "https://images.unsplash.com/photo-1625314868143-20e93ce3f2d1",
      category: "Storage",
      description: "Compact USB flash drive for quick file transfer and storage.",
      rating: 4.2
    },
    {
      id: 44,
      name: "Webcam Cover",
      price: 199,
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
      category: "Accessories",
      description: "Small privacy cover designed to protect webcam users from unwanted access.",
      rating: 4.1
    },
    {
      id: 45,
      name: "Monitor Stand",
      price: 1599,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      category: "Office",
      description: "Desktop monitor stand that improves screen height and workspace organization.",
      rating: 4.4
    },
    {
      id: 46,
      name: "Office Chair",
      price: 6999,
      image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
      category: "Furniture",
      description: "Ergonomic office chair designed for comfortable working sessions.",
      rating: 4.5
    },
    {
      id: 47,
      name: "Study Table",
      price: 5999,
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      category: "Furniture",
      description: "Minimal study table with a spacious surface for work and learning.",
      rating: 4.4
    },
    {
      id: 48,
      name: "Bookshelf",
      price: 4499,
      image: "https://images.unsplash.com/photo-1594620302200-9a762244a156",
      category: "Furniture",
      description: "Modern bookshelf for organizing books and decorative items.",
      rating: 4.3
    },
    {
      id: 49,
      name: "Floor Lamp",
      price: 2299,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
      category: "Home",
      description: "Modern floor lamp providing warm and comfortable room lighting.",
      rating: 4.4
    },
    {
      id: 50,
      name: "Wall Clock",
      price: 999,
      image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c",
      category: "Home",
      description: "Minimal wall clock with a clean design suitable for modern interiors.",
      rating: 4.2
    },
    {
      id: 51,
      name: "Table Fan",
      price: 1799,
      image: "https://images.unsplash.com/photo-1591019479261-1a103585c559",
      category: "Home",
      description: "Compact table fan providing efficient airflow for rooms and offices.",
      rating: 4.1
    },
    {
      id: 52,
      name: "Electric Iron",
      price: 1299,
      image: "https://images.unsplash.com/photo-1584735175315-9d5df23be620",
      category: "Home",
      description: "Lightweight electric iron with adjustable temperature settings.",
      rating: 4.3
    },
    {
      id: 53,
      name: "Vacuum Cleaner",
      price: 5999,
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001",
      category: "Home",
      description: "Powerful vacuum cleaner designed for convenient household cleaning.",
      rating: 4.5
    },
    {
      id: 54,
      name: "Yoga Mat",
      price: 799,
      image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f",
      category: "Fitness",
      description: "Non-slip yoga mat providing comfortable support during workouts.",
      rating: 4.5
    },
    {
      id: 55,
      name: "Dumbbell Set",
      price: 2499,
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
      category: "Fitness",
      description: "Adjustable dumbbell set suitable for strength training at home.",
      rating: 4.4
    },
    {
      id: 56,
      name: "Resistance Bands",
      price: 599,
      image: "https://images.unsplash.com/photo-1598971639058-999f4b2f8c9d",
      category: "Fitness",
      description: "Resistance bands for strength training, stretching and mobility exercises.",
      rating: 4.3
    },
    {
      id: 57,
      name: "Sports Bottle",
      price: 499,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      category: "Fitness",
      description: "Lightweight sports bottle designed for workouts and outdoor activities.",
      rating: 4.2
    },
    {
      id: 58,
      name: "Football",
      price: 899,
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
      category: "Sports",
      description: "Durable football suitable for training, practice and recreational games.",
      rating: 4.5
    },
    {
      id: 59,
      name: "Basketball",
      price: 999,
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
      category: "Sports",
      description: "Durable basketball designed for indoor and outdoor play.",
      rating: 4.4
    },
    {
      id: 60,
      name: "Tennis Racket",
      price: 1999,
      image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8",
      category: "Sports",
      description: "Lightweight tennis racket suitable for beginners and recreational players.",
      rating: 4.3
    },
    {
      id: 61,
      name: "Cricket Bat",
      price: 2499,
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da",
      category: "Sports",
      description: "Balanced cricket bat designed for practice and competitive play.",
      rating: 4.5
    },
    {
      id: 62,
      name: "School Backpack",
      price: 1299,
      image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa",
      category: "Bags",
      description: "Spacious school backpack with comfortable straps and multiple pockets.",
      rating: 4.4
    },
    {
      id: 63,
      name: "Travel Bag",
      price: 2199,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      category: "Bags",
      description: "Durable travel bag with spacious storage for short trips.",
      rating: 4.3
    },
    {
      id: 64,
      name: "Laptop Sleeve",
      price: 899,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      category: "Bags",
      description: "Protective laptop sleeve with soft interior padding.",
      rating: 4.4
    },
    {
      id: 65,
      name: "Travel Adapter",
      price: 1199,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
      category: "Travel",
      description: "Universal travel adapter compatible with multiple international plug types.",
      rating: 4.3
    },
    {
      id: 66,
      name: "Neck Pillow",
      price: 699,
      image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2",
      category: "Travel",
      description: "Soft travel neck pillow designed for comfortable journeys.",
      rating: 4.2
    },
    {
      id: 67,
      name: "Luggage Suitcase",
      price: 4999,
      image: "https://images.unsplash.com/photo-1565026057447-bc90a1f5d3c8",
      category: "Travel",
      description: "Durable suitcase with spacious compartments and smooth wheels.",
      rating: 4.5
    },
    {
      id: 68,
      name: "Passport Holder",
      price: 599,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
      category: "Travel",
      description: "Compact passport holder with storage for travel documents and cards.",
      rating: 4.2
    },
    {
      id: 69,
      name: "Scented Candle",
      price: 499,
      image: "https://images.unsplash.com/photo-1603006905003-be475563bc59",
      category: "Lifestyle",
      description: "Scented candle designed to create a relaxing atmosphere at home.",
      rating: 4.4
    },
    {
      id: 70,
      name: "Plant Pot",
      price: 399,
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
      category: "Home",
      description: "Decorative plant pot suitable for indoor plants and home decoration.",
      rating: 4.3
    },
    {
      id: 71,
      name: "Indoor Plant",
      price: 599,
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      category: "Lifestyle",
      description: "Low-maintenance indoor plant suitable for desks and living spaces.",
      rating: 4.5
    },
    {
      id: 72,
      name: "Photo Frame",
      price: 499,
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
      category: "Home",
      description: "Simple decorative photo frame for displaying memorable moments.",
      rating: 4.1
    },
    {
      id: 73,
      name: "Desk Calendar",
      price: 299,
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
      category: "Stationery",
      description: "Compact desk calendar for organizing daily schedules and tasks.",
      rating: 4.2
    },
    {
      id: 74,
      name: "Ball Pen Set",
      price: 199,
      image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd",
      category: "Stationery",
      description: "Smooth-writing ball pen set suitable for school, college and office use.",
      rating: 4.3
    },
    {
      id: 75,
      name: "Highlighter Set",
      price: 249,
      image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338",
      category: "Stationery",
      description: "Bright highlighter set designed for studying and note-taking.",
      rating: 4.4
    },
    {
      id: 76,
      name: "Sketchbook",
      price: 399,
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
      category: "Stationery",
      description: "Premium sketchbook suitable for drawing, sketching and creative work.",
      rating: 4.5
    },
    {
      id: 77,
      name: "Programming Book",
      price: 699,
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
      category: "Books",
      description: "Programming reference book covering fundamental software development concepts.",
      rating: 4.6
    },
    {
      id: 78,
      name: "JavaScript Book",
      price: 799,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
      category: "Books",
      description: "Practical JavaScript book for learning modern web development.",
      rating: 4.7
    },
    {
      id: 79,
      name: "Notebook Set",
      price: 449,
      image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57",
      category: "Stationery",
      description: "Set of premium notebooks for notes, planning and journaling.",
      rating: 4.4
    },
    {
      id: 80,
      name: "Desk Mat",
      price: 799,
      image: "https://images.unsplash.com/photo-1616628182503-3c3e3c3e7e5e",
      category: "Office",
      description: "Large desk mat providing a smooth surface for keyboard and mouse use.",
      rating: 4.3
    },
    {
      id: 81,
      name: "Cable Organizer",
      price: 299,
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761",
      category: "Office",
      description: "Cable organizer designed to keep charging and computer cables neatly arranged.",
      rating: 4.2
    },
    {
      id: 82,
      name: "Laptop Cooling Pad",
      price: 1499,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      category: "Electronics",
      description: "Cooling pad designed to improve laptop airflow during extended use.",
      rating: 4.3
    },
    {
      id: 83,
      name: "HDMI Cable",
      price: 499,
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761",
      category: "Electronics",
      description: "High-speed HDMI cable for connecting computers, monitors and televisions.",
      rating: 4.4
    },
    {
      id: 84,
      name: "Smart Bulb",
      price: 799,
      image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2",
      category: "Smart Home",
      description: "Smart LED bulb with adjustable brightness and app-based controls.",
      rating: 4.3
    },
    {
      id: 85,
      name: "Smart Plug",
      price: 999,
      image: "https://images.unsplash.com/photo-1558008258-3256797b43f3",
      category: "Smart Home",
      description: "Smart plug allowing convenient control of connected appliances.",
      rating: 4.2
    },
    {
      id: 86,
      name: "Security Camera",
      price: 2999,
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9",
      category: "Smart Home",
      description: "Indoor security camera with motion detection and remote monitoring.",
      rating: 4.4
    },
    {
      id: 87,
      name: "Robot Vacuum",
      price: 18999,
      image: "https://images.unsplash.com/photo-1610557892470-a8f1a4f7f3b1",
      category: "Smart Home",
      description: "Smart robotic vacuum designed for automated floor cleaning.",
      rating: 4.5
    },
    {
      id: 88,
      name: "Wireless Charger",
      price: 899,
      image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e7",
      category: "Electronics",
      description: "Fast wireless charging pad compatible with supported smartphones.",
      rating: 4.3
    },
    {
      id: 89,
      name: "Phone Case",
      price: 499,
      image: "https://images.unsplash.com/photo-1601593346740-925612772716",
      category: "Accessories",
      description: "Protective smartphone case with a slim design and durable construction.",
      rating: 4.2
    },
    {
      id: 90,
      name: "Screen Protector",
      price: 299,
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8",
      category: "Accessories",
      description: "Tempered glass screen protector designed to protect smartphone displays.",
      rating: 4.3
    },
    {
      id: 91,
      name: "Power Strip",
      price: 899,
      image: "https://images.unsplash.com/photo-1558008258-3256797b43f3",
      category: "Electronics",
      description: "Multi-socket power strip suitable for home and office workspaces.",
      rating: 4.2
    },
    {
      id: 92,
      name: "LED Strip Lights",
      price: 999,
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      category: "Lighting",
      description: "Colorful LED strip lights for desks, bedrooms and entertainment spaces.",
      rating: 4.4
    },
    {
      id: 93,
      name: "Bluetooth Adapter",
      price: 599,
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761",
      category: "Electronics",
      description: "Compact Bluetooth adapter for adding wireless connectivity to compatible devices.",
      rating: 4.1
    },
    {
      id: 94,
      name: "Gaming Controller",
      price: 2499,
      image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f",
      category: "Gaming",
      description: "Ergonomic gaming controller designed for comfortable gameplay.",
      rating: 4.5
    },
    {
      id: 95,
      name: "Gaming Mouse Pad",
      price: 699,
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
      category: "Gaming",
      description: "Large smooth mouse pad designed for accurate gaming movements.",
      rating: 4.4
    },
    {
      id: 96,
      name: "Gaming Monitor",
      price: 17999,
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
      category: "Gaming",
      description: "High-refresh-rate monitor designed for smooth gaming performance.",
      rating: 4.6
    },
    {
      id: 97,
      name: "Gaming Desk",
      price: 7999,
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5",
      category: "Furniture",
      description: "Spacious gaming desk designed for monitors, accessories and gaming setups.",
      rating: 4.5
    },
    {
      id: 98,
      name: "Desk Microphone",
      price: 2999,
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc",
      category: "Audio",
      description: "USB microphone suitable for streaming, gaming, meetings and recording.",
      rating: 4.5
    },
    {
      id: 99,
      name: "Ring Light",
      price: 1599,
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3",
      category: "Lighting",
      description: "Adjustable ring light for video calls, photography and content creation.",
      rating: 4.4
    },
    {
      id: 100,
      name: "Portable Projector",
      price: 8999,
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26",
      category: "Electronics",
      description: "Compact projector suitable for movies, presentations and home entertainment.",
      rating: 4.3
    }
  ];
  
  export default productsData;