import { View, Text,Pressable,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function PrimaryButton({children,onPress}){

  return(
    <View style={styles.buttonOuterContainer}>
      <Pressable 
        style={({pressed})=> pressed?
         [styles.buttonInnerContainer,styles.pressed]: 
         styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{color:Colors.primary600}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles=StyleSheet.create({
  buttonOuterContainer:{
    margin:4,
    borderRadius:28,
    overflow:'hidden',
  },
  buttonInnerContainer:{
   backgroundColor:Colors.primary500,
   paddingHorizontal:16,
   paddingVertical:10,
  
  },
  buttonText:{
    color:'white',
    fontSize:16,
    textAlign:'center'
  },
  pressed:{
    opacity:0.75,
  }
});