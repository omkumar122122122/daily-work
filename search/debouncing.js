import { useState, useEffect } from "react";
import Fuse from "fuse.js";


const products = [
    { id: 1, name: "iPhone 15", category: "Mobile" },
    { id: 2, name: "Samsung Galaxy S24", category: "Mobile" },
    { id: 3, name: "MacBook Air", category: "Laptop" },
  ];

function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(products);

  useEffect(() => {
    const timer = setTimeout(() => {

     
      if (!searchTerm.trim()) {
        setResults(products);
        return;
      }

    
      const fuse = new Fuse(products, {
        keys: ["name", "category", "description"],
        threshold: 0.4,
      });

      
      const searchResults = fuse
        .search(searchTerm)
        .map((result) => result.item);

      setResults(searchResults);

    }, 300); 
    return () => clearTimeout(timer);

  }, [searchTerm, products]);

  return (
    <div>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {results.map((product) => (
        <div key={product.id}>
          {product.name}
        </div>
      ))}

    </div>
  );
}

export default ProductSearch;