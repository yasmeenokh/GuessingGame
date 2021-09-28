import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './component/Header';
import StartGame from './component/StartGame';
import Game from './component/Game';
import GameOver from './component/GameOver';

export default function App() {
  
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  
  const newGameHandler = () =>{
    setGuessRounds(0);
    setUserNumber(null);
  }
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = roundsNum =>{
    setGuessRounds(roundsNum);
  }

  let content = <StartGame onStartGame={startGameHandler}/>;

  if(userNumber && guessRounds == 0){
    content = <Game userNum={userNumber}  onGameOver={gameOverHandler}/>;
  } else if(guessRounds > 0){
    content = <GameOver  guessRounds={guessRounds} userNum={userNumber} onNewGameHandler={newGameHandler}/>;
  }
  return (
    <View style={styles.root}>
      <Header title='Guess A Number'/>
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root : {
    flex : 1,
  }
})
