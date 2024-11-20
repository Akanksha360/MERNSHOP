// const products = [
//     {
//       id: 1,
//       name: "Wireless Earbuds",
//       description: "High-quality sound with noise cancellation, Bluetooth 5.0 connectivity.",
//       price: 49.99,
//       image: "https://welpix.b-cdn.net/wp-content/uploads/2024/03/The-art-of-storytelling-in-electronic-product-photography.webp", // Wireless Earbuds image
//     },
//     {
//       id: 2,
//       name: "Smart Watch",
//       description: "Track your fitness, monitor heart rate, and receive notifications directly on your wrist.",
//       price: 199.99,
//       image: "https://images.unsplash.com/photo-1624434207310-94fc4a4394db?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pYyUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D", // Smart Watch image
//     },
//     {
//       id: 3,
//       name: "Gaming Mouse",
//       description: "Ergonomic design with customizable DPI settings for the perfect gaming experience.",
//       price: 29.99,
//       image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWMlMjBwcm9kdWN0fGVufDB8fDB8fHww", // Gaming Mouse image
//     },
//     {
//       id: 4,
//       name: "Bluetooth Speaker",
//       description: "Portable and waterproof with high-quality sound and long battery life.",
//       price: 59.99,
//       image: "https://5.imimg.com/data5/LH/RO/MY-36780464/electronic-podium-500x500.png", // Bluetooth Speaker image
//     },
//     {
//       id: 5,
//       name: "Laptop Stand",
//       description: "Adjustable and ergonomic laptop stand to improve your posture and comfort.",
//       price: 19.99,
//       image: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1719818596870/ffa465988b219058010c14753c1acaba.jpg", // Laptop Stand image
//     },
//     {
//       id: 6,
//       name: "Wireless Keyboard",
//       description: "Sleek design, quiet keys, and Bluetooth connectivity for seamless typing.",
//       price: 39.99,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0onOqdsVUJSyfcGEZ0pTYty3wOpGRNK9PQ&s", // Wireless Keyboard image
//     },
//     {
//       id: 7,
//       name: "4K Monitor",
//       description: "Ultra HD display with vibrant colors and high refresh rate, perfect for gaming or work.",
//       price: 349.99,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCfHTuAVzOvcGUGDhC8LIE0UgjCfu44XxLNw&s", // 4K Monitor image
//     },
//     {
//       id: 8,
//       name: "Portable Charger",
//       description: "Compact power bank with fast charging capabilities for your devices on the go.",
//       price: 24.99,
//       image: "https://www.health.com/thmb/9h4FoqZUAWbITlp8Tmvn11aXCT0=/fit-in/1500x5616/filters:no_upscale():max_bytes(150000):strip_icc()/hlt-product-oral-b-io-series-8-electric-toothbrush-jkim-0496-e5e3c338f97443d79fa4d299508bb6db.jpg", // Portable Charger image
//     },
//   ];
  
  const products = [
    {
      id: 1,
      name: "Aristocrat Trolley Bag",
      description: "Fencer Strolly Textured Hard-Sided Large Trolley Bag - 65 cm",
      image: "https://welpix.b-cdn.net/wp-content/uploads/2024/03/The-art-of-storytelling-in-electronic-product-photography.webp", // Wireless Earbuds image
      additionalImages: [
        "https://via.placeholder.com/100x100",
        "https://via.placeholder.com/100x100",
      ],
      originalPrice: 9770,
      discountedPrice: 1899,
      sizes: [
        { label: "M", price: 1899 },
        { label: "L", price: 2499 },
      ],
    },
    {
      id: 2,
      name: "American Tourister Duffel Bag",
      description: "Spacious and durable duffel bag ideal for travel and gym.",
      image: "https://images.unsplash.com/photo-1624434207310-94fc4a4394db?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pYyUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D", // Smart Watch image
      additionalImages: [
        "https://via.placeholder.com/100x100",
        "https://via.placeholder.com/100x100",
      ],
      originalPrice: 4999,
      discountedPrice: 3499,
      sizes: [
        { label: "S", price: 3499 },
        { label: "M", price: 3999 },
      ],
    },
    {
      id: 3,
      name: "Safari Travel Suitcase",
      description: "Lightweight and sturdy suitcase with expandable storage.",
      image: "https://www.health.com/thmb/9h4FoqZUAWbITlp8Tmvn11aXCT0=/fit-in/1500x5616/filters:no_upscale():max_bytes(150000):strip_icc()/hlt-product-oral-b-io-series-8-electric-toothbrush-jkim-0496-e5e3c338f97443d79fa4d299508bb6db.jpg", // Portable Charger image
      additionalImages: [
        "https://via.placeholder.com/100x100",
        "https://via.placeholder.com/100x100",
      ],
      originalPrice: 8500,
      discountedPrice: 6499,
      sizes: [
        { label: "L", price: 6499 },
        { label: "XL", price: 7499 },
      ],
    },
    {
      id: 4,
      name: "Wildcraft Trek Backpack",
      description: "Ergonomic backpack with spacious compartments for trekking.",
      image: "https://via.placeholder.com/400x400",
      additionalImages: [
        "https://via.placeholder.com/100x100",
        "https://via.placeholder.com/100x100",
      ],
      originalPrice: 5999,
      discountedPrice: 3999,
      sizes: [
        { label: "Standard", price: 3999 },
      ],
    },
    {
      id: 5,
      name: "VIP Cabin Suitcase",
      description: "Premium quality cabin suitcase with TSA lock system.",
      image: "https://via.placeholder.com/400x400",
      additionalImages: [
        "https://via.placeholder.com/100x100",
        "https://via.placeholder.com/100x100",
      ],
      originalPrice: 12000,
      discountedPrice: 8999,
      sizes: [
        { label: "M", price: 8999 },
        { label: "L", price: 10999 },
      ],
    },
    {
      id: 6,
      name: "Skybags School Backpack",
      description: "Durable and stylish backpack suitable for school students.",
      image: "https://via.placeholder.com/400x400",
      additionalImages: [
        "https://via.placeholder.com/100x100",
        "https://via.placeholder.com/100x100",
      ],
      originalPrice: 2500,
      discountedPrice: 1999,
      sizes: [
        { label: "Standard", price: 1999 },
      ],
    },
    {
      id: 7,
      name: "Fastrack Laptop Bag",
      description: "Modern laptop bag with multiple compartments for gadgets.",
      image: "https://via.placeholder.com/400x400",
      additionalImages: [
        "https://via.placeholder.com/100x100",
        "https://via.placeholder.com/100x100",
      ],
      originalPrice: 3500,
      discountedPrice: 2999,
      sizes: [
        { label: "Standard", price: 2999 },
      ],
    },
    {
      id: 8,
      name: "Nike Gym Duffle Bag",
      description: "Lightweight duffle bag perfect for gym and travel use.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCfHTuAVzOvcGUGDhC8LIE0UgjCfu44XxLNw&s", // 4K Monitor image
      additionalImages: [
        "https://via.placeholder.com/100x100",
        "https://via.placeholder.com/100x100",
      ],
      originalPrice: 3999,
      discountedPrice: 2999,
      sizes: [
        { label: "Standard", price: 2999 },
      ],
    },
    {
      id: 9,
      name: "Decathlon Hiking Backpack",
      description: "Compact and durable hiking backpack for outdoor enthusiasts.",
      image: "https://via.placeholder.com/400x400",
      additionalImages: [
        "https://via.placeholder.com/100x100",
        "https://via.placeholder.com/100x100",
      ],
      originalPrice: 5999,
      discountedPrice: 4999,
      sizes: [
        { label: "Standard", price: 4999 },
      ],
    },
    {
      id: 10,
      name: "Puma Sports Duffle Bag",
      description: "Stylish sports bag with ample space for gear and clothing.",
      image: "https://via.placeholder.com/400x400",
      additionalImages: [
        "https://via.placeholder.com/100x100",
        "https://via.placeholder.com/100x100",
      ],
      originalPrice: 4599,
      discountedPrice: 3499,
      sizes: [
        { label: "Standard", price: 3499 },
      ],
    },
    {
      id: 11,
      name: "Adidas Gym Backpack",
      description: "Versatile backpack with compartments for gym and daily use.",
      image: "https://5.imimg.com/data5/LH/RO/MY-36780464/electronic-podium-500x500.png", // Bluetooth Speaker image

      additionalImages: [
        "https://via.placeholder.com/100x100",
        "https://via.placeholder.com/100x100",
      ],
      originalPrice: 3799,
      discountedPrice: 2999,
      sizes: [
        { label: "Standard", price: 2999 },
      ],
    },
    {
      id: 12,
      name: "Samsonite Laptop Bag",
      description: "Premium laptop bag with padded compartments for laptops.",
      image: "https://via.placeholder.com/400x400",
      additionalImages: [
        "https://via.placeholder.com/100x100",
        "https://via.placeholder.com/100x100",
      ],
      originalPrice: 6999,
      discountedPrice: 5499,
      sizes: [
        { label: "Standard", price: 5499 },
      ],
    },
    // Add 18 more products with similar structure
  ];
  
  export default products;
  