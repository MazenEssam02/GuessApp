import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
function Title({children}){
return <Text style={styles.titleText}>
        {children}
        </Text>
}
export default Title;

const styles=StyleSheet.create({
  titleText:{
    borderColor:'white',
    borderWidth:3,
    padding:12,
    textAlign:'center',
    color:'white',
    fontSize:26,
    fontFamily:'open-sans-bold'
    
    
  },
});