import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from 'app/src/components/SearchBar.js';
import useResults from 'app/src/hooks/useYelpSearch';

const SearchFoodScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchAPI, searchResults, error] = useResults();
  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchTermSubmit={() => searchAPI(searchTerm)}
      />
      {error ? (
        <Text>Something went wrong... please try again</Text>
      ) : (
        <Text>We have found {searchResults.length} search results.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchFoodScreen;
