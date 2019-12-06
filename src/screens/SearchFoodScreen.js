import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from 'app/src/components/SearchBar.js';
import yelpAPI from 'app/src/api/yelpAPI';

const SearchFoodScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setErrorMessage] = useState('');
  const searchAPI = async () => {
    try {
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
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchTermSubmit={searchAPI}
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
