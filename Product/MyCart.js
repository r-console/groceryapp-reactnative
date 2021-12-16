import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import p1 from '../assets/products/p2.jpg';
import product from '../assets/photo.jpg';
import {
    RoundedCheckbox,
    PureRoundedCheckbox,
} from "react-native-rounded-checkbox";

const datalist = [{key:'1'}, {key:'2'}, {key: '3'},{key:'4'},]

const MyCart = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return(
        
        <View style={styles.container}>
            <ScrollView>
            {/* <View style={styles.cartBox}>
                <View style={{alignSelf:'center',paddingHorizontal:10}}>
                    <TouchableOpacity style={styles.checkBox} onPress={()=>setToggleCheckBox(!toggleCheckBox)}>
                        {toggleCheckBox?
                        <Ionicons name="checkmark-circle" size={14} color={'#000'} style={styles.unCheckBox} />:
                        <Ionicons name="checkmark" size={14} color={'#000'} style={styles.unCheckBox} />}
                    </TouchableOpacity>
                </View>
                <View style={{alignSelf:'center',flexDirection:'row',backgroundColor:'#ccc',borderRadius:7}}>
                    <Image source={p1} style={styles.productImage}/>
                    <View style={{flexDirection:'column',padding:10}}>
                        <Text style={[styles.text,styles.productName]}>Product name</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.text}>1Kg </Text>
                            <Text style={{fontSize:14,fontWeight:'800'}}>
                            <Ionicons name='md-star' style={{color:'#ffb918'}} size={16} /> 5.0 (459 Review)</Text>
                            <MaterialCommunityIcons name="minus" size={15} />
                            <MaterialCommunityIcons name="plus" size={15} />
                        </View>
                        <Text style={{fontSize:13,fontWeight:'600'}}><Text style={{textDecorationLine:'line-through'}}>$30</Text>  <Text style={{fontWeight:'800',color:'#404040'}}>$30</Text></Text>
                    </View>
                </View>
            </View> */}

        {
        datalist.map((item,i)=>{
        return(
        <View style={{flexDirection:'row',width:'100%',justifyContent:'space-evenly'}} key={i}>
            <View style={{alignSelf:'center',}}>
                    {toggleCheckBox?
                    <TouchableOpacity style={styles.checkBox} onPress={()=>setToggleCheckBox(!toggleCheckBox)}>
                        <Ionicons name="checkmark-circle" size={24} color={'green'} />
                    </TouchableOpacity>
                    :<TouchableOpacity style={styles.checkBox} onPress={()=>setToggleCheckBox(!toggleCheckBox)}>
                        <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24} color={'#000'} />
                    </TouchableOpacity>}
            </View>

            <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                    <Image
                    source={p1}
                    resizeMode="cover"
                    style={styles.cardImg}
                    />
                </View>
                <View style={styles.cardInfo}>
                    <Text style={[styles.text,styles.productName]}>Product name</Text>            
                    
                    <View style={{flexDirection:'row',paddingVertical:5}}>
                        <Text style={styles.text}>1Kg </Text>
                        <Text style={{fontSize:14,fontWeight:'800'}}>
                        <Ionicons name='md-star' style={{color:'#ffb918'}} size={16} /> 5.0 (459 Review)</Text>
                    </View>
                    
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <Text style={{fontSize:13,fontWeight:'600',paddingVertical:5}}><Text style={{textDecorationLine:'line-through'}}>$30</Text>  <Text style={{fontWeight:'800',color:'#404040'}}>$30</Text></Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:'#ccc',borderRadius:5,marginHorizontal:10}}>
                                <MaterialCommunityIcons name="minus" size={22} color={'#000'} />
                            </TouchableOpacity>
                            <Text style={{fontWeight:'bold',fontSize:16,color:'#4d4f76'}}>04</Text>
                            <TouchableOpacity style={{borderWidth:1,borderColor:'#ccc',borderRadius:5,marginHorizontal:10}}>
                                <MaterialCommunityIcons name="plus" size={22} color={'#000'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        )})}

        </ScrollView>
        
        <View style={{bottom:8,width:'100%',flexDirection:'row',}}>
            <View style={{width:'20%',justifyContent:'center',marginLeft:5}}>
                <TouchableOpacity style={{alignSelf:'center',flexDirection:'row'}} onPress={()=>setToggleCheckBox(!toggleCheckBox)}>
                    <Ionicons name={toggleCheckBox?"checkbox":"square-outline"} size={24} color={'#4d4f76'} />
                    <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:18,paddingHorizontal:6,color:'#4d4f76'}}>All</Text>
                </TouchableOpacity>
            </View>
            <View style={{width:'70%'}}>
            <TouchableOpacity style={styles.checkBtn}>
                <Text style={{alignSelf:'center',fontSize:16,fontWeight:'bold',color:'#fff'}}>Check Out - Total $100</Text>
            </TouchableOpacity>
            </View>
        </View>
        
        </View>

    )
}

export default MyCart;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f9faff',
    },
    cartBox:{
        flexDirection:'row',
        // height:200,
        justifyContent:'space-evenly'
    },
    checkBox:{
        alignSelf:'center',
    },
    cardd:{
        backgroundColor:'#ccc',
        flexDirection:'row'
    },
    productImage:{
        width:65,
        height:65
    },
    text:{
        color:'#4d4f76'
    },
    productName:{
        fontSize:18,
        fontWeight:'bold'
    },

    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
      },
      card: {
        width:'80%',
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius:5
      },
      cardImgWrapper: {
        flex: 1,
      },
      cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
      },
      cardInfo: {
        flex: 2,
        padding: 10,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
      },
      cardTitle: {
        fontWeight: 'bold',
      },
      cardDetails: {
        fontSize: 12,
        color: '#444',
      },
    checkBtn:{
        backgroundColor:'#ddd',
        paddingVertical:15,
        paddingHorizontal:15,
        marginHorizontal:20,
        borderRadius:10,
        backgroundColor:'#41aa55',
        width:'80%',
    },
})