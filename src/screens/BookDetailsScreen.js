import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from "react-redux";

const BookDetailsScreen = () => {
  const book = useSelector((state) => state.book.selected)

  return (
    <View>
      <Text>BookDetailsScreen</Text>
    </View>
  )
}

export default BookDetailsScreen

const styles = StyleSheet.create({})