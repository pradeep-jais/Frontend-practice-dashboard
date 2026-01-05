import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard.jsx';
import './products.css';

const URL = 'https://dummyjson.com/products';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        // console.log(data);

        setProducts(data.products);
      } catch (error) {
        console.log('Error while fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="section">
      <h2 className="section-title">Products from API</h2>
      <div className="container products">
        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          products
            .filter((_, i) => i < 15)
            .reverse()
            .map((product) => {
              const { id, title, thumbnail, description } = product;
              return (
                <ProductCard
                  key={id}
                  title={title}
                  img={thumbnail}
                  description={description}
                />
              );
            })
        )}
      </div>
    </section>
  );
};
export default Products;
