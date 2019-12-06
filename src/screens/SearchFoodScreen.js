import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from 'app/src/components/SearchBar.js';
import yelpAPI from 'app/src/api/yelpAPI';

const SearchFoodScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchAPI = async () => {
    const {
      data: { businesses = [] },
    } = await yelpAPI.get('/search', {
      params: {
        limit: 50,
        term: searchTerm,
        location: 'new york',
      },
    });
    setSearchResults(businesses);
  };

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchTermSubmit={searchAPI}
      />
      <Text>We have found {searchResults.length} search results.</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchFoodScreen;
