import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import React from 'react';
import { TabBarIOS } from 'react-native';


const MealNavigation = createStackNavigator({ 
    Categories: {
    screen: CategoriesScreen,
  },
  CategoryMeal: {
    screen: CategoryMealScreen,
  },
  MealDetailScreen: {
    screen: MealDetailScreen,
  }});

  /*const FavtTabNavigation = createBottomTabNavigator({ 
   Meals:MealNavigation,
   Favorite:FavoritesScreen
  });*/



export default createAppContainer(MealNavigation);