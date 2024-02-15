import React, { useContext } from 'react';
import { DataContext } from '../../context/ProductDataContext';

interface ProductProps {}

const Product: React.FC<ProductProps> = () => {
  const { product } = useContext(DataContext) || { product: '' }; // Provide a default value

  console.log(product);

  return (
    <>
      store
      <div>{product}</div>
    </>
  );
};

export default Product;
