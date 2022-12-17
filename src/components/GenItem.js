import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const GenItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={styles.breadItem}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View>
          <Text style={styles.details}>{item.author}</Text>
          <Text style={styles.details}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GenItem;

const styles = StyleSheet.create({
  breadItem: {
    padding: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: "#ccc",
  },
  title: {
    fontSize: 20,
    fontFamily: "Tillana",
  },
  details: {
    fontSize: 18,
  },
});