
import { useState, useEffect } from 'react';
import axios from 'axios';

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  rating: number;
  numberOfReviews: number;
};

const emptyProducts: Product[] = [];
function Products() {
  // Store the products retrieved from the API.
  const [products, setProducts] = useState<Product[]>(emptyProducts);

  // Retrieve the product catalog when the component loads.
  useEffect(() => {
    axios
      .get<Product[]>('http://localhost:5251/catalog', {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error loading products:', error);
      });
  }, []);

  return (
    <div className="content">
      
<ul className="products">
{products.map((product) => (
  <li key={product.id}>
    
      <div className="product">
        <img
          className="product-image"
          src={product.imageUrl}
          alt="product"
        />
        <div className="product-name">
          <a href="product.html">{product.name}</a>
        </div>
        <div className="product-brand">{product.brand}</div>
        <div className="product-price">{product.price}</div>
        <div className="product-rating">
          {product.rating} Stars ({product.numberOfReviews} reviews)
        </div>
      </div>
    </li>
  ))}
</ul>

    </div>
  );
}

export default Products;
