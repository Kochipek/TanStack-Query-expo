import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ProductDetailsPage = () => {
  const {id} = useLocalSearchParams();
  return (
    <View>
      <Text>Details : {id}</Text>
    </View>
  )
}

export default ProductDetailsPage

const styles = StyleSheet.create({})