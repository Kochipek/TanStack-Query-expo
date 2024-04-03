import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";
import { View } from "@/components/Themed";
import fetchTopRatedMovies from "@/api/movies";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function TabOneScreen() {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({ queryKey: ["movies"], queryFn: fetchTopRatedMovies });
  // When the network request has completed, the returned data will be cached under the movies key.

/* ------------- useEffect -----------------

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error , setError] = useState('');

  useEffect (() => {
    const fetchMovies = async () => {
      setIsLoading(true)
      try{
        const movies = await fetchTopRatedMovies();
        setMovies(movies);
        } catch (error) {
          setError(error);
        }

     setIsLoading(false)
    };
    fetchMovies();
  }, []);
*/
  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
