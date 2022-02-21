import { Text, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/colors';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
  },
  headerTitleStyle: {
    fontFamily: 'roboto-black',
  },
  headerBackTitleStyle: {
    fontFamily: 'roboto-regular',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'roboto-regular' }}>Meals</Text>
        ) : (
          'Meals'
        ),
    },
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.secondary,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'roboto-regular' }}>Favorites</Text>
        ) : (
          'Favorites'
        ),
    },
  },
};

const FavoritesTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: 'roboto-regular',
          },
          activeTintColor: Colors.secondary,
        },
      });

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen,
});

const MainNavigator = createDrawerNavigator(
  {
    FavoriteMeals: {
      screen: FavoritesTabNavigator,
      navigationOptions: { drawerLabel: 'Meals' },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
      labelStyle: {
        fontFamily: 'roboto-black',
      },
    },
  }
);

export default createAppContainer(MainNavigator);
