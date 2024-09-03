import { Text, View ,StyleSheet, Alert} from "react-native";
import GuessNumber from "../components/game/GuessNumber";
import Title from "../components/ui/Title";
import { useState,useEffect } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from '@expo/vector-icons';
let minNumber=1;
let maxNumber=100;
function GameScreen({userNumber,onGameOver}){
  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  const initialGuess=generateRandomBetween(1,100,userNumber);
  const [currentGuess,setCurrentGuess]=useState(initialGuess);
  useEffect(()=>{
    if(currentGuess===userNumber){
      onGameOver();
     
    }
  },[currentGuess,userNumber,onGameOver])
  function guessCheckHandler(guessDirection){
    if((guessDirection==='lower' && currentGuess>userNumber)||(guessDirection==='higher' && currentGuess<userNumber)){
  
    if(guessDirection==='lower'){
      maxNumber=currentGuess;
    }
    else{
      minNumber=currentGuess+1;
    }
    setCurrentGuess(generateRandomBetween(minNumber,maxNumber,currentGuess));
  }
  else{
    Alert.alert('Dont Lie...' ,'This Is wrong',[{text:'Sorry',style:'cancel'}])
    
  }
  }
return(
  <View style={styles.gameContainer}>
    <Title>Opponent's Guess</Title>
    <View style={styles.guessContainer}> 
    <GuessNumber>{currentGuess}</GuessNumber>
    </View>
   <Card>
      <InstructionText>Higher Or Lower?</InstructionText>
      <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={guessCheckHandler.bind(this,'lower')} >
                <Ionicons name="remove" size={24} color='white'/>
                
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={guessCheckHandler.bind(this,'higher')} >
              <Ionicons name="add" size={24} color='white'/>
              </PrimaryButton>
            </View>
          </View>
    </Card>
  </View>
)
}
export default GameScreen;

const styles=StyleSheet.create({
  gameContainer:{
    flex:1,
    padding:24,
    
    
  },
  guessContainer:{
    alignItems:'center'
  },

 
  buttonsContainer:{
    flexDirection:'row',
  },
  buttonContainer:{
    flex:1,
  },
});