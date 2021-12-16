import 'react-native-gesture-handler';
import React, { useContext, useMemo, useRef, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  TouchableOpacity,
  Animated,
  TextInput,
  FlatList,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import {AuthContext} from './AuthProvider'
import HomeStackScreen from './Product/HomeStack';
import Product from './Product/ProductScreen';
import MyCart from './Product/MyCart';

const GlobalStack = createStackNavigator();

function OrdersScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Order Screen!</Text>
    </View>
  );
}

function DemoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>cart Screen!</Text>
    </View>
  );
}

function WishListScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Wishlist screen!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const MainStackScreen = () => {
  const {setMenuShow, menuShow} = useContext(AuthContext);
  return(
    <Tab.Navigator screenOptions= {{
      tabBarShowLabel:false,
      tabBarStyle: [{ 
      backgroundColor:'#fff',
      position:'absolute',
      bottom: menuShow?-140:0,
      duration: 100,
      height: 70,
      // marginHorizontal:20,
      // borderRadius:15,
      // bottom:60,
      paddingBottom:10,
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
      shadowColor: '#000',
      shadowOpacity: 0.06,
      shadowOffset:{
        width: 0,
        height: 5
      },
      elevation:5,
      shadowRadius:8,
     }],
    }}
      >
      <Tab.Screen name="Home" component={HomeStackScreen} 
      options={{
        headerShown:false,
        tabBarIcon: ({focused}) =>(
          <View style={{position:'absolute',top:'25%'}}>
            <Ionicons name='home-outline' size={25} style={{alignSelf:'center'}} color={focused?'#41aa55':'#4d4f76'} />
            <Text style={{alignSelf:'center'}}>Home</Text>
          </View>
        )
      }}/>
      <Tab.Screen name="Orders" component={HomeStackScreen} 
      options={{
        headerShown:false,
        tabBarIcon: ({focused}) =>(
          <View style={{position:'absolute',top:'25%'}}>
            <MaterialIcons name='list-alt'  size={25} style={{alignSelf:'center',color:focused?'#41aa55':'#4d4f76'}}/>
            <Text style={{alignSelf:'center'}}>Orders</Text>
          </View>
        )
      }}/>
      <Tab.Screen name="cart" component={MyCart} 
      listeners={({ navigation, route }) => ({
        tabPress: (e) => {
          // Prevent default action
          e.preventDefault();
    
          // Do something with the `navigation` object
          navigation.navigate('mycart');
        },
      })}
      options={{
        headerShown:false,
        tabBarIcon: ({focused}) =>(
          <View style={{top:'-50%',backgroundColor:'#41aa55',width:60,height:60,borderRadius:50,justifyContent:'center',alignItems:'center',borderColor:'#ddd',borderWidth:3}}>
            <MaterialIcons name='shopping-basket'  size={25} color={'#fff'}/>
          </View>
        )
      }}
      />
      <Tab.Screen name="Wishlist" component={HomeStackScreen} 
      options={{
        headerShown:false,
        tabBarIcon: ({focused}) =>(
          <View style={{position:'absolute',top:'25%'}}>
            <Ionicons name='heart-outline'  size={25} style={{alignSelf:'center',color:focused?'#41aa55':'#4d4f76'}}/>
            <Text style={{alignSelf:'center'}}>Wishlist</Text>
          </View>
        )
      }}/>
      <Tab.Screen name="Profile" component={HomeStackScreen} 
      options={{
        headerShown:false,
        tabBarIcon: ({focused}) =>(
          <View style={{position:'absolute',top:'25%'}}>
            <MaterialCommunityIcons name='account-outline'  size={25} style={{alignSelf:'center',color:focused?'#41aa55':'#4d4f76'}}/>
            <Text style={{alignSelf:'center'}}>Profile</Text>
          </View>
        )
      }}/>
    </Tab.Navigator>
  )
}

const  App = () => {
  const [menuShow, setMenuShow] = useState(false);
  const authContext = useMemo(()=>({
    menuShow,
    setMenuShow
  }))

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      <GlobalStack.Navigator>
          <GlobalStack.Screen name="Main" component={MainStackScreen}
          options={{
              headerShown:false,
              title:'Grocery Deals'
           }}
          />
          <GlobalStack.Screen name="Product" component={Product}
          options={{
            headerLeft: (props) => (
              <TouchableOpacity style={{paddingHorizontal:10,paddingVertical:10,}} {...props}>
                <MaterialIcons name="keyboard-arrow-left" size={24} color={'#4d4f76'} />
              </TouchableOpacity>
            ),
            headerTitle: props => <Text style={{color:'#4d4f76',fontSize:20,fontWeight:'600',marginLeft:-8}}>Grocery Deals</Text>,
          }}/>
          <GlobalStack.Screen name="mycart" component={MyCart}
          options={{
            headerLeft: (props) => (
              <TouchableOpacity style={{paddingHorizontal:10,paddingVertical:10,}} {...props}>
                <MaterialIcons name="keyboard-arrow-left" size={24} color={'#4d4f76'} />
              </TouchableOpacity>
            ),
            headerTitle: props => <Text style={{color:'#4d4f76',fontSize:20,fontWeight:'600',marginLeft:-8}}>My Cart</Text>,
            headerRight: () => (
              <TouchableOpacity style={{paddingHorizontal:10,paddingVertical:10}}>
                <MaterialCommunityIcons name="trash-can-outline" size={24} color={'#4d4f76'} />
              </TouchableOpacity>
            ),
         }}/>
      </GlobalStack.Navigator>  
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
