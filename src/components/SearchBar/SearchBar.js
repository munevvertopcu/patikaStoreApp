import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';

const SearchBar = (props) => {
  return (
    <View>
      <TextInput style={styles.input} placeholder='Search...' onChangeText={props.onChange}></TextInput>
    </View>
  );
};
 
export default SearchBar; 

const styles = StyleSheet.create({
  input:{
    backgroundColor:"#EEE",
    borderRadius:12,
    paddingLeft:13,
    marginHorizontal:7,
    marginTop:8,
    marginBottom:15,
    height: 30
  }
});