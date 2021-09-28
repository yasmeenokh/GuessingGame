import React from "react";
import {View , 
    StyleSheet, 
    Text, 
    Button ,
    TextInput, 
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import Card from "./Card";
import Colors from '../constants/colors'
import Number from "./Number";
import { useState } from 'react';


const StartGame = props =>{
   const [enteredValue, setEnteredValue] = useState('');
   const [confirmed, setConfirmed] = useState(false);
   const [selectedNumber, setSelectedNumber] = useState();

   const numberHandler = input =>{
    setEnteredValue(input.replace(/[^0-9]/g, ''))
   }
   const resetInput = ()=>{
    setEnteredValue('');
    setConfirmed(false);
   }
   const confirmInput = ()=>{
       const chosenNum = parseInt(enteredValue);
       if(isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99){
        Alert.alert('Invalid Number !', 'Number has to be between 1-99', [{text : 'Ok', style : 'destructive', onPress: resetInput}])   
        return;
       }
       setConfirmed(true);
       setEnteredValue('');
       setSelectedNumber(chosenNum);

   }
   let confirmedOutput;
   if(confirmed){
    confirmedOutput = 
    <View style={styles.alertContainer}>
    <Text style={styles.alert}>The Chosen Number : 
    </Text>
    <Number>{selectedNumber}</Number>
    <Button title='Start Game'  
    onPress={()=> props.onStartGame(selectedNumber)} 
    color = {Colors.secondaryClr}
/> 
    </View>
   }
    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>

<View style={styles.screen}>
<Text style={styles.title}>Let's Start The Game</Text>
<Card style={styles.inputContainer}>
    <Text style={styles.subTitle}>Select A Number</Text>
    <TextInput 
    blurOnSubmit
    keyboardType='number-pad'
    maxLength ={2}
    style={styles.input} 
    onChangeText={numberHandler}
    value = {enteredValue}
    />
    <View style={styles.btnContainer}>
        <View style={styles.btn}>

        <Button
        color = {Colors.lightestClr}
        title = 'Reset'
        onPress={resetInput}
        />
        </View>
    <View style={styles.btn}>

        <Button 
        color = {Colors.secondaryClr}
        title = 'Confirm'
        onPress={confirmInput}
        />
        </View>
    </View>
</Card>
{confirmedOutput}
</View>
</TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        padding : 10,
        alignItems : 'center',
    },
    title : {
        fontSize: 20,
        marginVertical : 10,
        color : Colors.mainFontClr
    },
    inputContainer : {
        width : 300,
        maxWidth : '80%',
    },
    subTitle :{
        color : Colors.mainFontClr

    },
    input :{
        height : 30,
        width : '20%',
        borderBottomColor : Colors.lightestClr,
        borderBottomWidth : 2,
        padding : '2%',
        marginVertical : '5%',
        textAlign : 'center',
    },
    btnContainer : {
        flexDirection : 'row',
        width : '80%',
        justifyContent : 'space-around',
        paddingHorizontal : 15,
    },
    btn : {
         width : '45%',
    },
    alert : {
        textAlign: 'center',
        color: Colors.mainFontClr,
        marginRight : '2%',
    }, 
    alertContainer :{
        marginTop : '5%',
        borderWidth : .5,
        borderColor : Colors.lightestClr,
        borderRadius : 10,
        padding : '5%',
        width : '60%',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : "center",
        alignItems : 'center'
     },
});

export default StartGame;