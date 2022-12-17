import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import GenItem from "../components/GenItem"
import { BOOKS } from "../data/book"

const CategoryBookScreen = ({ navigation, route }) => {

  const books = BOOKS.filter(book => book.category === route.params.categoryID)

  const handleSelectedCategory = (item) => {
    navigation.navigate("Details", {
      productID: item.id,
      name: item.title,
    });
  };
  const renderBookItem = ({ item }) => (
    <GenItem item={item} onSelected={handleSelectedCategory} />
  );


  return (
    <FlatList
      data={books}
      keyExtractor={(item) => item.id}
      renderItem={renderBookItem}

    />

  );
};

export default CategoryBookScreen

const styles = StyleSheet.create({})