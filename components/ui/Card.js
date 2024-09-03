import Colors from "../../constants/colors";
import { View,StyleSheet } from "react-native";
function Card({children}){
return  <View style={styles.card}>{children}</View>
}
export default Card;

const styles=StyleSheet.create({
  card:{
    backgroundColor:Colors.primary800,
    marginTop:70,
    padding:16,
    marginHorizontal:15,
    borderRadius:10,
    elevation:4,
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowRadius:6,
    shadowOpacity:0.4,
    alignItems:'center'
  },
});