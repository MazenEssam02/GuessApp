import { Text,View,StyleSheet,Image } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
function GameOverScreen({userNumber,gameRounds,restart}){
  return <View style={styles.rootContainer}>
    <Title>GameOver</Title>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={require('../assets/images/success.png')}/>
    </View>
    <Text style={styles.summaryText}>Your phone needed 
      <Text style={styles.highlight}> {gameRounds} </Text>
       rounds to get the number 
      <Text style={styles.highlight}> {userNumber}</Text>
    </Text>
    <PrimaryButton onPress={restart}>Start New Game</PrimaryButton>
  </View>

}
export default GameOverScreen

const styles=StyleSheet.create({
  rootContainer:{
    flex:1,
    padding:25,
    justifyContent:'center',
    alignItems:'center'

  },
  imageContainer:{
    width:300,
    height:300,
    borderColor:Colors.primary800,
    borderRadius:200,
    borderWidth:3,
    overflow:'hidden',
    margin:36,
  },
  image:{
    height:'100%',
    width:'100%',
  },
  summaryText:{
    fontFamily:'open-sans',
    color:'white',
    fontSize:24,
    textAlign:'center',
    marginVertical:24,
  },
  highlight:{
    fontFamily:'open-sans-bold',
    color:Colors.primary500,
  }
});