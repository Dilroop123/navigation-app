import React,{useState} from 'react';
import { StyleSheet, Text, View,Button ,FlatList,TouchableOpacity} from 'react-native';
const CategoriesScreen =props=> {
    const[todos,setTodos]=useState([
        {id:'c1',title:'Italian',color:'#f5428d'},
        {id:'c2',title:'Quick & Easy',color:'#f54242'},
        {id:'c3',title:'Hamburgers',color:'#f5a442'},
        {id:'c4',title:'German',color:'#f5d142'},
        {id:'c5',title:'Light & Lovely',color:'#368dff'},
        {id:'c6',title:'Exotic',color:'#41d95d'},
        {id:'c7',title:'Breakfast',color:'#9eecff'},
        {id:'c8',title:'Asian',color:'#b9ffb0'},
        {id:'c9',title:'French',color:'#ffc7ff'},
        {id:'c10',title:'Summer',color:'#47fced'},
        
      ]);

    

  return (
    <FlatList numColumns={2}
  data={todos} renderItem={itemData=> 
    <TouchableOpacity style={styles.griditem}   onPress={() => props.navigation.navigate({routeName:'CategoryMeal',
    params: { category:itemData.item }
  })}>
  <View style={{...styles.container,...{backgroundColor:itemData.item.color}}}>
      <Text>{itemData.item.title}</Text>
      </View>
      </TouchableOpacity>
      }/>
  );
}

export default CategoriesScreen;
const styles = StyleSheet.create({
    container: {
    flex: 1,
    borderRadius:10,
    shadowColor:'black',
    shadowOpacity:0.26,
    shadowOffset:{width:0,height:2},
    shadowRadius:10,
    justifyContent:"center",
    alignItems:'center',
    elevation:3

  },
  griditem:{
      flex:1,
      margin:15,
      height:150

  }
});
