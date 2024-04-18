import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useQuery } from '@tanstack/react-query';
import { fetchProductDetail } from '@/api/products';

const ProductDetailsPage = () => {
  const {id} = useLocalSearchParams();
  const {data, isLoading, error} = useQuery({
    // we used id as a queryKey to make sure that the data is cached per product id
    queryKey : ['products', id], 
    queryFn: () => fetchProductDetail(id),
  })

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View>
      <Text>{data.description}</Text>
    </View>
  )
}

export default ProductDetailsPage

const styles = StyleSheet.create({})