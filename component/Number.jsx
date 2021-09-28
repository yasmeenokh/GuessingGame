import React from "react";

import {View, StyleSheet, Text} from 'react-native';
import Colors from "../constants/colors";
const Number = props => {
    return (
<View style={styles.numContainer}>
    <Text style={styles.numTxt}>
{props.children}
    </Text>
</View>
    )
};

const styles= StyleSheet.create({
    numContainer :{
        borderWidth: 1,
        borderColor : Colors.secondaryClr,
        borderRadius : 20,
        alignItems: 'center',
        justifyContent : 'center',
        padding : 10,
        // margin : 5,
    },
    numTxt :{
        color : Colors.secondaryClr,
        fontWeight: 'bold',
    }
})

export default Number;