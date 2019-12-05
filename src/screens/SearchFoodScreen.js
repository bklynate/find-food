import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from 'app/src/components/SearchBar.js';

const SearchFoodScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchTermSubmit={() => console.log('Submitted')}
      />
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchFoodScreen;
