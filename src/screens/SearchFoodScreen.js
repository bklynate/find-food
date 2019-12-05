import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from 'app/src/components/SearchBar.js';

const SearchFoodScreen = () => {
  return (
    <View>
      <SearchBar />
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchFoodScreen;
