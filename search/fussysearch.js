import Fuse from "fuse.js";


const products = [
    { id: 1, name: "iPhone 15", category: "Mobile" },
    { id: 2, name: "Samsung Galaxy S24", category: "Mobile" },
    { id: 3, name: "MacBook Air", category: "Laptop" },
  ];

const fuse = new Fuse(products, {
  keys: ["name", "category"],
  threshold: 0.4,
});

const results = fuse.search("iphr");
console.log(results)