import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SearchResult from 'app/src/components/SearchResult';

const SearchResultsList = props => {
  const { title, searchResults } = props;
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.resultsCount}>Results: {searchResults.length}</Text>
      <FlatList
        keyExtractor={searchResult => searchResult.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={searchResults}
        renderItem={({ item }) => <SearchResult searchResult={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 2,
  },

  resultsCount: {
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default SearchResultsList;
