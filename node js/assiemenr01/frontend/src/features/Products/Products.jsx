import React, { useEffect, useState } from 'react';
import './Products.css';

import Nav from '../../share/components/Nav';
import ProductCard from './components/ProductCard';

function Products() {
  const [productsdata, setdata] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch all products only once
  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await fetch('http://localhost:3000/api/products');

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = await response.json();

      setdata(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setdata([]);
      setFilteredProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch products when page loads
  useEffect(() => {
    fetchData();
  }, []); 

  // Frontend search with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      const searchTerm = search.toLowerCase().trim();

      if (searchTerm === '') {
        setFilteredProducts(productsdata);
        return;
      }

      const filtered = productsdata.filter((product) => {
        return (
          product.title?.toLowerCase().includes(searchTerm) ||
          product.name?.toLowerCase().includes(searchTerm) ||
          product.category?.toLowerCase().includes(searchTerm) ||
          product.description?.toLowerCase().includes(searchTerm)
        );
      });

      setFilteredProducts(filtered);
    }, 500);

    // Clear previous timer
    return () => {
      clearTimeout(timer);
    };
  }, [search, productsdata]);

  return (
    <div>
      <Nav />

      <h2>Our Products</h2>

      {/* Search */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Products */}
      <div className="productsdiv">
        {loading ? (
          <p>Loading products...</p>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Products;