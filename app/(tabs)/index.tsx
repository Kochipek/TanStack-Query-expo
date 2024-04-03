import { ActivityIndicator, FlatList, StyleSheet, Text, Dimensions } from "react-native";
import { View } from "@/components/Themed";
import { useQuery } from "@tanstack/react-query";
import MovieListItem from "@/components/MovieListItem";
import fetchProductList from "@/api/movies";

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
        contentContainerStyle={styles.flatlistContentContainer} // Yeni eklenen stil
        renderItem={({ item }) => (
          <MovieListItem product={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlistContentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});
