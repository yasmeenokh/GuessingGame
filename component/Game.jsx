import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Number from "./Number";
import Card from "./Card";
import Colors from "../constants/colors";

const generateRandom = (min, max, exclude) => {
    min === Math.ceil(min);
    max === Math.floor(max);
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    if (randomNum === exclude) {
        generateRandom = (min, max, exclude);
    } else {
        return randomNum;
    };
};

const Game = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandom(1, 100, props.userNum));
    const [rounds, setRounds] = useState(0);

    const {userNum, onGameOver} = props;
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(()=>{
        if(currentGuess === props.userNum){
            props.onGameOver(rounds);
        }
    }, [currentGuess, userNum, onGameOver]);

    const nextGuessHandler = direction => {
        if((direction === 'lower' && currentGuess < props.userNum) || (direction === 'higher' && currentGuess > props.userNum)){
            Alert.alert('Are You Sure This is the right hint', 'Try Again ...', [{text : 'Again', style : 'cancel'}]);
            // return;
        } if(direction === 'lower'){
            currentHigh.current = currentGuess;
        }
        else if(direction === 'higher'){
            currentLow.current = currentGuess;
        };

        const nxtNumber = generateRandom(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nxtNumber);
        setRounds(currentRounds => currentRounds +1);
    };

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>
                Our Guess
            </Text>
            <Number>{currentGuess}</Number>
            <Card style={styles.btnContainer}>
                <Button title=' Lower ' 
                color = {Colors.secondaryClr}
                onPress={()=>nextGuessHandler('lower')}
                />
                <Button title=' Higher ' 
                color = {Colors.lightestClr}
                onPress={()=> nextGuessHandler('higher')} 
                />
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
screen : {
    flex : 1,
    padding : 10,
    alignItems : 'center',
},
btnContainer : {
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    marginVertical : 10,
    width : 250,
    maxWidth : '80%'
},
text :{
    color : Colors.mainFontClr,
    paddingVertical : 10,
    fontSize : 20,
    fontWeight: 'bold',
},
});

export default Game;