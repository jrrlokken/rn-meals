import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";

import Colors from "../constants/colors";

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  },
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);
