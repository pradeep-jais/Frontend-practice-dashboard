import Products from './components/Products.jsx';
import './products.css';

const ProductsUI = () => {
  return (
    <section className="section">
      <h2 className="section-title">Products from API</h2>
      <div className="container products">
        <Products />
      </div>
    </section>
  );
};
export default ProductsUI;
