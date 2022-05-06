import React from "react";
import { FlatList, View, StyleSheet, TextInput, Text } from "react-native";
import store_data from './store_data.json';
import Products from './components/Products';
import SearchBar from './components/SearchBar';


const App = () => {
  const [products, setProducts] = React.useState(store_data);
  const productRender = ({item}) => <Products product={item}/>

  const handleSearch = (text) => {
    const filteredList = store_data.filter(product => {
      const searchedText = text.toLowerCase()
      const currentTitle = product.title.toLowerCase()

      //searchedText currentTitle ın içinde varsa yani değeri -1 den büyükse döndürür
      return currentTitle.indexOf(searchedText) > -1
    })
    setProducts(filteredList)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <SearchBar onChange={handleSearch}></SearchBar>

    <FlatList
    data= {products}
    renderItem= {productRender}
    numColumns={2}
    key={2}
    />
    </View>
  )
};

export default App;

const styles = StyleSheet.create (
  {
    container:{
      flex: 1,
      backgroundColor: 'white',
    },
    title:{
      marginTop: 5,
      marginHorizontal:5,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple'
    }
  }
);