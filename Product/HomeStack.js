import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MainScreen from './main';
import Product from './ProductScreen';
// import TournamentDetails from './TournamentDetails';

const ProductStack = createStackNavigator();

function OrdersScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Order Screen!</Text>
      </View>
    );
  }

const HomeStackScreen = ({navigation}) =>{
    return (
        <ProductStack.Navigator>
            <ProductStack.Screen name="Main" component={MainScreen}
            options={{
                headerShown:false,
                title:'Grocery Deals',
             }}
            />
        </ProductStack.Navigator>
    );
};
export default HomeStackScreen;

const styles = StyleSheet.create({
    map:{
        height:'100%'
    },
    container:{
        flexDirection: 'column',
        alignSelf: 'flex-start'
    },
    bubble:{
        flexDirection:'row',
        alignSelf:'flex-start',
        backgroundColor:'#fff',
        borderRadius:6,
        borderColor:'#ccc',
        borderWidth:0.5,
        padding:15,
        width:150
    },
    arrow:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        borderTopColor:'#fff',
        borderWidth:16,
        alignSelf:'center',
        marginTop:-32,
    },
    arrowBorder:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        borderTopColor:'#007a87',
        borderWidth:16,
        alignSelf:'center',
        marginTop:-0.5,
    },
    name:{
        fontSize:16,
        marginBottom:5
    },
    image:{
        width:120,
        height:80
    }
});