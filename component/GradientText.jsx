import React from "react";
import Svg, { LinearGradient,  Stop, Text} from 'react-native-svg';

    
const GradientText = (props) => {
  return (
    <Svg height="50"
    width="300" >
   <LinearGradient id="Gradient" x1="0" x2=".8" y1="3" y2="4">
   <Stop  stopColor="#89c2d9" offset="50%" stopOpacity=".9" />
   <Stop stopColor="#a9d6e5" offset="40%" stopOpacity="1" />
   <Stop stopColor="#014f86" offset="10%" stopOpacity=".6" />

   </LinearGradient>
 <Text fill="url(#Gradient)"
 x="50"
 y="30"
 stroke="#468faf"
 fontSize="40"
 fontWeight ='bold'
 textAnchor="start">
Game Over      
</Text>
</Svg>
  );
};

export default GradientText;