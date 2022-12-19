import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryBookScreen from "../screens/CategoryBookScreen";
import BookDetailsScreen from "../screens/BookDetailsScreen";
import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
  return (

    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: COLORS.secondary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Book's Shop",
        }}
      />
      <Stack.Screen name="Book" component={CategoryBookScreen}
        options={({ route }) => ({
          title: route.params.name
        })}
      />
      <Stack.Screen name="Details" component={BookDetailsScreen} />
    </Stack.Navigator>

  );

};