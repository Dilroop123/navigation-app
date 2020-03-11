import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import MEALS from '../data/dummy-data';
const MealDetailScreen =props=> {

  const recivevalue=props.navigation.getParam('MealDetail');
  const displayMeal=MEALS.filter(
    meal=>meal.id===recivevalue.id
);
console.log(displayMeal);


  return (
    <View style={styles.container}>
      <Text>{recivevalue.title}</Text>
    </View>
  );
}


MealDetailScreen.navigationOptions=(navigationData)=>{

  const recivevalue=navigationData.navigation.getParam('MealDetail');

  const navigation_title=recivevalue.title
  return{
       headerTitle:navigation_title,
       headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favorite"
            iconName="md-heart"
            onPress={() => {
              console.log('Mark as favorite!');
            }}
          />
        </HeaderButtons>
      )
  };
}

export default MealDetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
