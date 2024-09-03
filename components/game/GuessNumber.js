import { StyleSheet,Text } from "react-native";
import Colors from "../../constants/colors";
function GuessNumber({children}){
return(
 
  <Text style={styles.guessNumber} >{children}</Text>
  
);
}
export default GuessNumber;
const styles=StyleSheet.create({
  guessNumber:{
    borderColor:Colors.accent500,
    borderWidth:4,
    borderRadius:12,
    paddingVertical:35,
    textAlign:'center',
    color:Colors.accent500,
    fontSize:32,
    fontFamily:'open-sans-bold',
    marginVertical:30,
    width:'80%',
    
  }
});