import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from 'app/src/components/SearchBar';
import useYelpSearchAPI from 'app/src/hooks/useYelpSearch';
import SearchResultsList from 'app/src/components/SearchResultsList';

const SearchFoodScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchAPI, searchResults, error] = useYelpSearchAPI();

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
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchTermSubmit={() => searchAPI(searchTerm)}
      />
      {Boolean(error) && (
        <Text style={{ marginLeft: 15, marginBottom: 15 }}>
          Something went wrong... please try again
        </Text>
      )}
      <ScrollView>
        <SearchResultsList title='Cheap Eats' searchResults={cheapEats} />
        <SearchResultsList title='Moderate Eats' searchResults={moderateEats} />
        <SearchResultsList title='Expensive Eats' searchResults={expensiveEats} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchFoodScreen;
