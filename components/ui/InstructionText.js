import { Text,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function InstructionText({children,style}){
  return  <Text style={[styles.controlText,style]}>{children}</Text>
}
export default InstructionText;

const styles=StyleSheet.create({
  controlText:{
    color:Colors.accent500,
    fontSize:24,
    marginBottom:10,
    fontFamily:'open-sans'
  },
});