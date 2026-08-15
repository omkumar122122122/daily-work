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
    }
  ];
  
  export default productsData;