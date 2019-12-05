import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = props => {
  const { searchTerm, onSearchTermChange, onSearchTermSubmit } = props;

  return (
    <View style={styles.searchBarContainer}>
      <Feather name='search' style={styles.featherIcon} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        value={searchTerm}
        style={styles.searchInput}
        onChangeText={onSearchTermChange}
        placeholder='Search'
        onEndEditing={onSearchTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: '#f0eeee',
    height: 45,
    borderRadius: 5,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    marginTop: 15,
    flexDirection: 'row',
  },

  featherIcon: {
    marginHorizontal: 15,
    fontSize: 35,
    alignSelf: 'center',
  },

  searchInput: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
