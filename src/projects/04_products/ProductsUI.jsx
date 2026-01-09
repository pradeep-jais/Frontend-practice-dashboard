import Products from './components/Products.jsx';
import './products.css';
import { useState } from 'react';

const ProductsUI = () => {
  const [filter, setFilter] = useState('all');

  return (
    <section className="section">
      <h2 className="section-title">Products from API</h2>
      <div className="filter-btns">
        <button className="btn" onClick={() => setFilter('all')}>
          All
        </button>
        <button className="btn" onClick={() => setFilter('favorite')}>
          Favorite
        </button>
      </div>
      <div className="container products">
        <Products filter={filter} />
      </div>
    </section>
  );
};
export default ProductsUI;
