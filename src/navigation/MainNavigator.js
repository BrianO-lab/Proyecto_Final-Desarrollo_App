import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/MainScreen"
import AddItemScreen from "../screens/AddItemScreen"

const Stack = createNativeStackNavigator();

export default MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={MainScreen} />
        <Stack.Screen name="Agregar" component={AddItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};