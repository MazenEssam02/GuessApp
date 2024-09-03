import { useState } from 'react';
import { StyleSheet, ImageBackground,SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from "./constants/colors";
import GameScreen from './screens/GameScreen';
import {useFonts} from 'expo-font';
import GameOverScreen from './screens/GameOverScreen';
import AppLoading from 'expo-app-loading';
export default function App() {
  const [userNumber,setUserNumber]=useState();
  const [gameIsOver,setGameIsOver]=useState(false);
  const [fontLoaded]=useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  });
  // if(!fontLoaded){
  //   return <AppLoading/>;
  // }
  function gameOverHandler(){
    setGameIsOver(true);
  }
  function pickNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  }
  let screen=<StartGameScreen onPick={pickNumberHandler}/>
  if(userNumber){
    screen=<GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  if(gameIsOver){
    screen=<GameOverScreen userNumber={userNumber}/>
  }
 return(
  <LinearGradient style={styles.rootScreen} colors={[Colors.primary700,Colors.accent500]}>
    <ImageBackground source={require('./assets/images/background.png')} style={styles.rootScreen} resizeMode='cover' imageStyle={styles.backgroundImage}>
    <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
    </ImageBackground>
  </LinearGradient>
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
