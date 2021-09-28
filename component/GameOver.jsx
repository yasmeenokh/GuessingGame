import React from "react";
import {View, StyleSheet, Button, Text} from 'react-native';

import Card from "./Card";
import Colors from "../constants/colors";
import GradientText from "./GradientText";
import FadeInView from "./FadeIn";
const GameOver = props =>{

    return(
        <FadeInView style={styles.screen}>
            <Card style={styles.card}>
           <GradientText/>
            <Text style={styles.textS}>Number Of Rounds : {props.guessRounds}</Text>
            <Text style={styles.textS}> The Number Was : {props.userNum}</Text>
            <View style={styles.btnContainer}>
            <Button 
            color = {Colors.primaryClr}
            title = 'New Game'
            onPress = {props.onNewGameHandler}
            />
            </View>
            </Card>
        </FadeInView>
    )

}

const styles = StyleSheet.create({
screen : {
    flex : 1,
    alignItems : 'center',
    justifyContent : "center"
},
card : {
    padding : '10%', 
}, 
btnContainer :{
    marginVertical : '4%'
}, 
textS : {
    color : Colors.mainFontClr,
    fontSize : 18,
},
textBig : {
    fontSize : 20,
    fontWeight : "bold",
   
},

});

export default GameOver;