import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const SearchResultsList = props => {
  const { title, searchResults } = props;
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text>Results: {searchResults.length}</Text>
      <FlatList
        keyExtractor={searchResult => searchResult.id}
        horizontal
        data={searchResults}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SearchResultsList;
