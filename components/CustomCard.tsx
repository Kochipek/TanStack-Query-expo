import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { Card, Text, Button, Icon } from '@rneui/themed';

const { width } = Dimensions.get('window');
const cardWidth = (width - 30) / 2;

const CustomCard = ({ title, imageUri, description, price, onPress }) => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title numberOfLines={2}>{title}</Card.Title>
        <Card.Divider />
        <Card.Image style={styles.image} source={{ uri: imageUri }} />
        <Text style={styles.description} numberOfLines={4}>
          {description}
        </Text>
        <Button
          icon={
            <Icon
              name="shopping-cart"
              color="#ffffff"
              iconStyle={{ marginRight: 10 }}
            />
          }
          buttonStyle={styles.button}
          title={`${price} $`}
          onPress={onPress}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: cardWidth,
  },
  image: {
    width: '100%',
  },
  description: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
});

export default CustomCard;
