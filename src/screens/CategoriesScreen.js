import React from 'react'
import { FlatList } from 'react-native'
import GridItem from "../components/GridItem";
import { CATEGORIES } from "../data/categories";

import { useSelector, useDispatch, connect } from "react-redux";
import { selectedCategory } from '../store/actions/category.action';

const CategoriesScreen = ({ navigation, route }) => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const handleSelectedCategory = (item) => {
    dispatch(selectedCategory(item.id));
    navigation.navigate("Book", {
      name: item.title,
    });
  };
  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );


  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      numColumns={2}

    />

  );
}

export default connect()(CategoriesScreen);

