import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, FlatList, Image } from 'react-native';
import yelpAPI from 'app/src/api/yelpAPI';

const SearchResultScreen = props => {
  const { navigation } = props;
  const [searchResult, setSearchResult] = useState(null);
  const id = navigation.getParam('id');

  const getSearchResult = async () => {
    const { data } = await yelpAPI.get(`/${id}`);
    setSearchResult(data);
  };

  useEffect(() => {
    getSearchResult();
  }, []);

  if (!searchResult) return null;

  const { name, photos } = searchResult;

  return (
    <>
      <Text style={styles.titleHeader}>{name}</Text>
      <FlatList
        keyExtractor={item => item}
        data={photos}
        renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  titleHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 15,
  },

  image: {
    width: 250,
    height: 125,
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 5,
  },
});

export default SearchResultScreen;
