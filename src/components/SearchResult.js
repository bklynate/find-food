import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SearchResult = props => {
  const { searchResult } = props;
  const { image_url, name, rating, review_count } = searchResult;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image_url }} />
      <Text style={styles.name}>{name}</Text>
      <Text>
        {rating} - stars, {review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },

  image: {
    width: 250,
    height: 250,
    borderRadius: 4,
    marginBottom: 5,
  },

  name: {
    fontWeight: 'bold',
  },
});

export default SearchResult;
