import React from 'react';
import CustomCard from './CustomCard';

const ProductListItem = ({ product }) => {
  const handlePress = () => {
  console.log("Item added to cart");
  };

  return (
    <CustomCard
      id = {product.id}
      title={product.title}
      imageUri={product.image}
      description={product.description}
      price={product.price}
      onPress={handlePress}
    />
  );
};

export default ProductListItem;