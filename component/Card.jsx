import React from "react";

import {View, StyleSheet} from 'react-native';

const Card = props =>{
    return <View style={{...styles.card, ...props.style}}>{props.children}
    </View>

}

const styles = StyleSheet.create({
    card : {
        alignItems: 'center',
        shadowColor : '#014f86', 
        shadowOffset : {width : 1, height :2},
        shadowRadius : 5,
        shadowOpacity : .3,
        backgroundColor : 'white',
        elevation : 2,
        paddingVertical : 20,
        borderRadius : 10,

    },
});

export default Card;