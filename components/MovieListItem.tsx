import React from 'react';
import CustomCard from './CustomCard';

const MovieListItem = ({ product }) => {
  const handlePress = () => {
   //TODO add to cart
  };

  return (
    <CustomCard
      title={product.title}
      imageUri={product.image}
      description={product.description}
      price={product.price}
      onPress={handlePress}
    />
  );
};

export default MovieListItem;