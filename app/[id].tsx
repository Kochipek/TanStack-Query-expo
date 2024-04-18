import { ActivityIndicator, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchProductDetail } from '@/api/products';
import { addToCart } from '@/api/cart';

const ProductDetailsPage = () => {
  const {id} = useLocalSearchParams();
  const {data, isLoading, error} = useQuery({
    queryKey : ['products', id], 
    queryFn: () => fetchProductDetail(id),
  })

  const {mutate} = useMutation({
mutationFn: (quantity: number) => addToCart(id, quantity),
})
    

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  const handlePress = () => {
    mutate(1);
    console.log('added to cart');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Stack.Screen options={{title: data.title}} />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: data.image }} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
          <Text style={styles.price}>{data.price}$</Text>
          <Text style={styles.category}>{data.category}</Text>
          <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>

  )
}

export default ProductDetailsPage

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 400,
    resizeMode: 'cover',
  },
  infoContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'orange',
  },
  category: {
    fontSize: 16,
    marginBottom: 10,
    color: '#888',
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
