import { useState } from 'react';
import { StyleSheet, ImageBackground,SafeAreaView,TouchableWithoutFeedback, Keyboard} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from "./constants/colors";
import GameScreen from './screens/GameScreen';
import {useFonts} from 'expo-font';
import GameOverScreen from './screens/GameOverScreen';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  const [userNumber,setUserNumber]=useState();
  const [gameIsOver,setGameIsOver]=useState(false);
  const[gameRounds,setgameRounds]=useState(0);
  const [fontLoaded]=useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  });
  // if(!fontLoaded){
  //   return <AppLoading/>;
  // }
  function restartHandler(){
    setGameIsOver(false);
    setgameRounds(0);
    setUserNumber();
  }
  function gameOverHandler(gameRound){
    setGameIsOver(true);
    setgameRounds(gameRound);
  }
  function pickNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  }
  let screen=<StartGameScreen onPick={pickNumberHandler}/>
  if(userNumber){
    screen=<GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  if(gameIsOver){
    screen=<GameOverScreen userNumber={userNumber} gameRounds={gameRounds} restart={restartHandler}/>
  }
 return(
  <>
  <StatusBar style='light'/>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <LinearGradient style={styles.rootScreen} colors={[Colors.primary700,Colors.accent500]}>
    <ImageBackground source={require('./assets/images/background.png')} style={styles.rootScreen} resizeMode='cover' imageStyle={styles.backgroundImage}>
    <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
    </ImageBackground>
  </LinearGradient>
  </TouchableWithoutFeedback>

  </>
 );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  },
  backgroundImage:{
    opacity:0.25,
  }
});
