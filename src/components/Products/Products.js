import React from "react";
import { View, Text, Image } from 'react-native';
import styles from './Products.style';

const Products = ({product}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
            <Image style={styles.image} source={{uri:product.imgURL}} resizeMode='contain'/>
            </View>
            <View style={styles.textView}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
            {product.inStock==false ? <Text style={styles.inStock}>STOKTA YOK</Text> : null}
            </View>


        </View>
    )
}

export default Products;