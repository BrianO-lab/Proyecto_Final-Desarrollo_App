import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch, connect } from "react-redux";
import { addItem } from "../store/actions/cart.action";

const BookDetailsScreen = () => {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books.selected)

  const handlerAddItemCart = () => dispatch(addItem(book));

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.description}>{book.author}</Text>
        <Text style={styles.price}>{book.price}</Text>
        <View style={styles.button}>
          <Button title="Agregar al carrito" onPress={handlerAddItemCart} />
        </View>
      </View>
    </View>
  );
};


export default connect()(BookDetailsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  screen: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
  },
  description: {
    fontSize: 20,
  },
  price: {
    fontSize: 40,
  },
  button: {
    marginTop: 15,
  },
});