import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = () => {
  return (
    <View>
      <TextInput placeholder='Search' />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchBar;
