import Products from './components/Products.jsx';
import './products.css';
import { useState } from 'react';

const ProductsUI = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterProducts = (e) => {
    const filter = e.target.dataset.filter;
    if (filter === 'favorite') {
      const wishListedProducts =
        JSON.parse(localStorage.getItem('wishListedProducts')) || [];
      setFilteredProducts(wishListedProducts);
    }
    if (filter === 'all') {
      setFilteredProducts([]);
    }
  };
  return (
    <section className="section">
      <h2 className="section-title">Products from API</h2>
      <div
        className="filter-btns"
        onClick={(e) => {
          filterProducts(e);
        }}
      >
        <button className="btn" data-filter="all">
          All
        </button>
        <button className="btn" data-filter="favorite">
          Favorite
        </button>
      </div>
      <div className="container products">
        <Products filteredProducts={filteredProducts} />
      </div>
    </section>
  );
};
export default ProductsUI;
