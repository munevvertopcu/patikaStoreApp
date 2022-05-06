import {Dimensions, StyleSheet} from 'react-native';


export default StyleSheet.create(
    {
container:{
    backgroundColor: '#eceff1',
    flex: 1,
    borderRadius: 10,
    marginBottom:10,
    marginHorizontal:10,
    padding:10
    
   
},
image:{
    height: Dimensions.get("window").height/4,
    
    
    },
    imageView: {
        borderRadius:10,
        backgroundColor: 'white'
    },

textView:{
    marginTop:5
},
title:{
    marginBottom: 3,
    fontSize: 15,
    fontWeight: 'bold',
},
price:{},
inStock:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red'
}
    }
);