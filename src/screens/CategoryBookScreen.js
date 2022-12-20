import React, { useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import GenItem from "../components/GenItem"
import { BOOKS } from "../data/book"

import { useSelector, useDispatch, connect } from "react-redux";
import { filteredBook, selectBook } from '../store/actions/book.action';

const CategoryBookScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const categoryBooks = useSelector((state) => state.books.filteredBook);
  const category = useSelector((state) => state.categories.selected);

  useEffect(() => {
    dispatch(filteredBook(category.id));
  }, []);


  // const books = BOOKS.filter(book => book.category === route.params.categoryID);

  const handleSelectedCategory = (item) => {
    dispatch(selectBook(item.id));
    navigation.navigate("Details", {
      name: item.title,
    });
  };
  const renderBookItem = ({ item }) => (
    <GenItem item={item} onSelected={handleSelectedCategory} />
  );


  return (
    <FlatList
      data={categoryBooks}
      keyExtractor={(item) => item.id}
      renderItem={renderBookItem}

    />

  );
};

export default connect()(CategoryBookScreen);

const styles = StyleSheet.create({})