import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from 'app/src/components/SearchBar';
import useResults from 'app/src/hooks/useYelpSearch';
import SearchResultsList from 'app/src/components/SearchResultsList';

const SearchFoodScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchAPI, searchResults, error] = useResults();

  const cheapEats = searchResults.reduce((resolved, result) => {
    if (!result.price || result.price.length > 1) return resolved;

    resolved.push(result);

    return resolved;
  }, []);

  const moderateEats = searchResults.reduce((resolved, result) => {
    if (!result.price || result.price.length === 1 || result.price.length === 4) return resolved;

    resolved.push(result);

    return resolved;
  }, []);

  const expensiveEats = searchResults.reduce((resolved, result) => {
    if (!result.price || result.price.length < 4) return resolved;

    resolved.push(result);

    return resolved;
  }, []);

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
      <SearchResultsList title='Cheap Eats' searchResults={cheapEats} />
      <SearchResultsList title='Moderate Eats' searchResults={moderateEats} />
      <SearchResultsList title='Expensive Eats' searchResults={expensiveEats} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchFoodScreen;
