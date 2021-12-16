import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button
} from 'react-native';
import p1 from '../assets/products/p2.jpg';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from "react-native-gesture-handler";

const Product = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.ProductBox}>
                <Image source={p1} style={styles.productImage} />
                <View style={{justifyContent:'center'}}>
                    <Text style={styles.kgText}>1Kg</Text>
                    <Text style={styles.price}>$11.00</Text>
                    <Text style={styles.productName}>Onion</Text>
                    <Text style={{alignSelf:'center',fontSize:18,color:'#4d4f76'}}><Ionicons name='md-star' style={{color:'#ffb918'}} size={18} /> 5.0 (598 Review)</Text>
                </View>
            </View>
            <View style={styles.buyBox}>
                <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold',paddingBottom:5,color:'#4d4f76'}}>Quantity</Text>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',paddingVertical:12}}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="minus-circle-outline" size={50} color={'#4d4f76'} />
                    </TouchableOpacity>
                    <Text style={{alignSelf:'center',fontSize:28,fontWeight:'bold',color:'#4d4f76'}}>1Kg</Text>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="plus-circle-outline" size={50} color={'#4d4f76'} />
                    </TouchableOpacity>
                </View>
                <View style={{width:50,height:60,alignSelf:'center'}}>
                    <MaterialIcons name='shopping-basket'  size={50} color={'#000'} style={{alignSelf:'center',paddingVertical:5}} />
                    <Text style={{color:'#fff',position:'absolute',backgroundColor:'#41aa55',right:0,top:10,borderRadius:10,padding:3,fontSize:14}}>09</Text>
                </View>
                <TouchableOpacity style={styles.cartBtn} onPress={()=>navigation.navigate('mycart')}>
                    <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold'}}>Cart Now</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.cartBtn,{marginTop:10,backgroundColor:'#41aa55'}]}>
                    <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold',color:'#fff'}}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Product;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f9faff',
    },
    ProductBox:{
        flexDirection:'column',
        justifyContent:'center',
        paddingHorizontal:10,
        paddingVertical:10,
    },
    productImage:{
        width:210,
        height:210,
        alignSelf:'center',
        borderRadius:20,
    },
    kgText:{
        backgroundColor:'#41aa55',
        alignSelf:'center',
        color:'#fff',
        paddingHorizontal:30,
        paddingVertical:5,
        borderRadius:5,
        marginTop:6,
    },
    price:{
        fontSize:25,
        alignSelf:'center',
        fontWeight:'bold',
        color:'#4d4f76'
    },
    productName:{
        alignSelf:'center',
        fontSize:20,
        color:'#4d4f76',
        fontWeight:'bold'
    },
    buyBox:{
        marginHorizontal:15,
        paddingVertical:5,
        borderTopWidth:1,
        borderColor:'#ccc',
    },
    cartBtn:{
        backgroundColor:'#ddd',
        paddingVertical:15,
        paddingHorizontal:15,
        marginHorizontal:20,
        borderRadius:10,
    },
})