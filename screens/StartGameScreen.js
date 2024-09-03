import { TextInput, View,Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Colors from "../constants/colors";
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Title from '../components/ui/Title';
function StartGameScreen({onPick}) {
  const [inputNumber,setInputNumber]=useState('');
  function inputHandler(enteredNumber){
    setInputNumber(enteredNumber);
    
  }
  function confirmInputHandler(){
    const inNumber=parseInt(inputNumber);
    if(inNumber<1 ||inNumber>99 ){
      Alert.alert('Invalid Number','Enter Number between 1 and 99',[{text:'Okay',style:'destructive',onPress:resetInput}]);
    
    return;
  }
    onPick(inNumber); // Go to gamescreen 
  }
  function resetInput(){
    setInputNumber('');
  }
  return (
    <View style={styles.rootContainer}>
    <Title>Guess My Number</Title>
    <Card>
      <InstructionText>Enter a Number</InstructionText>
      <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' onChangeText={inputHandler} value={inputNumber}/>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInput} >Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </Card>
    </View>
  );
}

export default StartGameScreen;


const styles=StyleSheet.create({
  rootContainer:{
    marginTop:100,
    flex:1,
    alignItems:'center'
  },
  numberInput:{
    height:50,
    width:50,
    fontSize:32,
    marginVertical:6,
    borderBottomWidth:2,
    borderBottomColor:Colors.accent500,
    color:Colors.accent500,
    fontWeight:'bold',
    textAlign:'center',
    
  },
  buttonsContainer:{
    flexDirection:'row',
  },
  buttonContainer:{
    flex:1,
  },
});