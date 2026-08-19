import React, { useEffect, useState } from 'react';
import BlogCard from './components/Blogcard';
import Nav from '../../share/components/Nav';

function Blogs() {
  const [blogdata, setdata] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch all blogs only once
  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await fetch('http://localhost:3000/api/blogs');

      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }

      const data = await response.json();

      setdata(data);
      setFilteredBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setdata([]);
      setFilteredBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch blogs when page loads
  useEffect(() => {
    fetchData();
  }, []);

  // Frontend search with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      const searchTerm = search.toLowerCase().trim();

      // If search is empty, show all blogs
      if (searchTerm === '') {
        setFilteredBlogs(blogdata);
        return;
      }

      // Search in frontend
      const filtered = blogdata.filter((blog) => {
        return (
          blog.title?.toLowerCase().includes(searchTerm) ||
          blog.summary?.toLowerCase().includes(searchTerm) ||
          blog.body?.toLowerCase().includes(searchTerm)
        );
      });

      setFilteredBlogs(filtered);
    }, 500);

    // Clear previous timer
    return () => {
      clearTimeout(timer);
    };
  }, [search, blogdata]);

  return (
    <div>
      <Nav />

      <h2>Blogs</h2>

      {/* Search */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Blogs */}
      <div className="productsdiv">
        {loading ? (
          <p>Loading blogs...</p>
        ) : filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
    </div>
  );
}

export default Blogs;