import { useEffect, useState } from 'react';
import ProductCard from './ProductCard.jsx';
import Loading from '../../../components/Loading.jsx';
import Error from '../../../components/Error.jsx';

const URL = 'https://dummyjson.com/products';

const Products = ({ filteredProducts }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(URL);
        const data = await res.json();
        // console.log(data);

        setProducts(data.products);
        setIsLoading(false);
      } catch (error) {
        setError(error.message || 'Failed to fetch products');
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) return <Loading animation={3} />;
  if (error) return <Error message={error} />;

  return (
    <>
      {(filteredProducts.length > 0 ? filteredProducts : products)
        .filter((_, i) => i < 15)
        .reverse()
        .map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
    </>
  );
};
export default Products;
