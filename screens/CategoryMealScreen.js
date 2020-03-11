import React from 'react';
import { StyleSheet, Text, View,Button,FlatList,Image,TouchableOpacity} from 'react-native';
import MEALS from '../data/dummy-data';
const CategoryMealScreen =props=> {

const recivevalue=props.navigation.getParam('category');


console.log(MEALS);

const displayMeal=MEALS.filter(
    meal=>meal.categoryIds.indexOf(recivevalue.id)>=0
);

  return (
    <View style={styles.container}>
      <FlatList 
  data={displayMeal} renderItem={itemData=> 
    
    <TouchableOpacity    onPress={() => props.navigation.navigate({routeName:'MealDetailScreen',
    params: { MealDetail:itemData.item }
  })}>
    <View  style={styles.item}>
      <Image
      style={{width: '100%', height: 170}}
      source={{uri:itemData.item.imageUrl}}
    />
    <View  style={styles.titleBar}>
    <Text style={{fontSize:22,fontWeight:'bold',color:'white', backgroundColor: 'rgba(0, 0, 0, 0.7)',}}>{itemData.item.title}</Text>
    </View>
  <View style={styles.itemvalue}>
     
      <Text>{itemData.item.duration+'M'}</Text>
      <Text>{itemData.item.complexity}</Text>
      <Text>{itemData.item.affordability}</Text>
      </View>
      </View>
      </TouchableOpacity>
      }/>
    </View>
  );
}

CategoryMealScreen.navigationOptions=(navigationData)=>{

    const recivevalue=navigationData.navigation.getParam('category');

    const navigation_title=recivevalue.title
    return{
         headerTitle:navigation_title
    };
}

export default CategoryMealScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10
    
  },
  item:
  {
    
    backgroundColor:'grey',
    height:200,
    
  },
  itemvalue:{
    flexDirection:'row',
    alignItems:'flex-end',
    paddingTop:5,
    paddingLeft:15,
    paddingRight:15,
    paddingBottom:5,
    justifyContent:'space-between'
  },
  titleBar:{
    marginTop:140,
    height:32,
    position: 'absolute', 
    top: 0, left: 0, right: 0, bottom: 0, 
    justifyContent: 'center',
     alignItems: 'flex-end'
  }
});
