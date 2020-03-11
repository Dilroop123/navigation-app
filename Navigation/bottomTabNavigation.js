import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealsNavigation from '../Navigation/MealsNavigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
const Tab = createBottomTabNavigator();


export default function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={CategoriesScreen} />
        <Tab.Screen name="Settings" component={FavoritesScreen} />
      </Tab.Navigator>
    );
  }


