import { useState } from "react";
import { StyleSheet, View ,Text, FlatList} from "react-native";
import Colors from "../../constants/colors";
function GameLog({logArray}){
  
return(
  <FlatList data={logArray} 
  renderItem={(logItem)=>{
    return(
      <View style={styles.logItemContainer}>
      <Text style={styles.logItemText}>
        {logItem.item.id}#    
      </Text>
      <Text>Opponent Guessed : {logItem.item.number}</Text>
    </View>
    );
  }}
  keyExtractor={(item,index)=>{
    return item.id;
  }} />
);
}
export default GameLog;

const styles=StyleSheet.create({
logItemContainer:{
  marginVertical:6,
  marginHorizontal:16,
  paddingVertical:15,
  paddingHorizontal:20,
  borderRadius:40,
  backgroundColor:Colors.accent500,
  borderColor:Colors.primary800,
  borderWidth:2,
  flexDirection:'row',
  justifyContent:'space-between',

},
logItemText:{
  color:'black'
}
});
