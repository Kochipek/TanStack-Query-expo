import { ActivityIndicator, FlatList, StyleSheet, Text, Dimensions } from "react-native";
import { View } from "@/components/Themed";
import { useQuery } from "@tanstack/react-query";
import ProductListItem from "@/components/ProductListItem";
import {fetchProductList} from "@/api/products";


export default function TabOneScreen() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({ queryKey: ["products"], queryFn: fetchProductList });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        contentContainerStyle={styles.flatlistContentContainer}
        renderItem={({ item }) => (
          <ProductListItem product={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatlistContentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});
