import React, { useContext, useRef, useState } from 'react';
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
  Pressable
} from 'react-native';

import profile from '../assets/profile.png';
import home from '../assets/home.png';
import search from '../assets/search.png';
import notification from '../assets/bell.png';
import settings from '../assets/settings.png';
import logout from '../assets/logout.png';

import menu from '../assets/menu.png';
import close from '../assets/close.png';
import photo from '../assets/photo.jpg';
import location from '../assets/location.png';
import filter from '../assets/filter.png';

import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import c4 from '../assets/c4.png';

import p1 from '../assets/products/p1.jpg';
import p2 from '../assets/products/p2.jpg';
import p3 from '../assets/products/p3.jpg';
import p4 from '../assets/products/p4.jpg';
import p5 from '../assets/products/p5.jpg';
import p6 from '../assets/products/p6.jpg';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {AuthContext} from '../AuthProvider';

const datalist = [{key:'1'}, {key:'2'}, {key: '3'},{key:'4'}, {key:'5'}, {key: '6'}]

const MainScreen = ({navigation}) => {
  // const isDarkMode = useColorScheme() === 'dark';
  const {setMenuShow, menuShow} = useContext(AuthContext);
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const offsetValueY = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#41aa55'} />
      <View style={{justifyContent:'center',alignItems:'center',width:'100%',paddingTop:15,backgroundColor:'#f9faff'}} 
      onTouchStart={()=>{
        Animated.timing(scaleValue,{
          toValue: showMenu? 1: 0.68,
          duration: 200,
          useNativeDriver:true
        }).start()

        Animated.timing(offsetValue,{
          toValue: showMenu? 0: 230,
          duration: 200,
          useNativeDriver:true
        }).start()
        
        Animated.timing(offsetValueY,{
          toValue: showMenu? 0: 130,
          duration: 200,
          useNativeDriver:true
        }).start()
        setMenuShow(!menuShow)
        setShowMenu(!showMenu)
        }}>
        <Image source={profile} style={styles.profileImage}/>
        <Text style={{fontSize:22,fontWeight:'bold',color:'#4d4f76'}}>Jumsalan Max</Text>
        <Text style={{fontSize:16,fontWeight:'bold',color:'#4d4f76'}}>demo123@gmail.com</Text>
      </View>
          
      <View style={{justifyContent: 'flex-start',padding: 15,flexDirection:'row'}}>
        <View>
          {TabButton(currentTab, setCurrentTab, "Change Password", 'lock-reset', 2)}
          {TabButton(currentTab, setCurrentTab, "Coupons", 'wallet-giftcard', 2)}
          {TabButton(currentTab, setCurrentTab, "My Reviews", 'thumb-up-outline', 2)}
          {TabButton(currentTab, setCurrentTab, "Support", 'support-agent', 4)}
          {TabButton(currentTab, setCurrentTab, "Sign Out", 'sign-out', 3)}
        </View>
        <View style={{width:'100%',height:'100%',marginTop:-15,backgroundColor:'#f9faff'}} onTouchStart={()=>{
        Animated.timing(scaleValue,{
          toValue: showMenu? 1: 0.68,
          duration: 200,
          useNativeDriver:true
        }).start()

        Animated.timing(offsetValue,{
          toValue: showMenu? 0: 230,
          duration: 200,
          useNativeDriver:true
        }).start()
        
        Animated.timing(offsetValueY,{
          toValue: showMenu? 0: 130,
          duration: 200,
          useNativeDriver:true
        }).start()
        setMenuShow(!menuShow)
        setShowMenu(!showMenu)
        }}></View>
      </View>
      <View style={{width:'100%',height:'100%',backgroundColor:'#f9faff'}}
       onTouchStart={()=>{
        Animated.timing(scaleValue,{
          toValue: showMenu? 1: 0.68,
          duration: 200,
          useNativeDriver:true
        }).start()

        Animated.timing(offsetValue,{
          toValue: showMenu? 0: 230,
          duration: 200,
          useNativeDriver:true
        }).start()
        
        Animated.timing(offsetValueY,{
          toValue: showMenu? 0: 130,
          duration: 200,
          useNativeDriver:true
        }).start()
        setMenuShow(!menuShow)
        setShowMenu(!showMenu)
        }}></View>

      <Animated.View style={{flexGrow:1,
        backgroundColor:'white',
        borderColor:'#41aa55',
        position:'absolute',
        elevation:10,
        shadowOffset:{
          width:5,
          height:10
        },
        top:0,
        bottom:0,
        left:0,
        right:0,
        borderRadius: showMenu? 45: 0,
        // marginTop: showMenu? 150: 0,
        transform:[
          {scale:scaleValue},
          {translateX:offsetValue},
          {translateY:offsetValueY},
        ]}}>
          {
            showMenu?
          <View style={{backgroundColor:'#41aa55',paddingHorizontal:10,paddingVertical:10,borderTopLeftRadius: showMenu? 45: 0,}}>
            <Text style={{color:'#fff'}}>10:28</Text>
          </View>:null}

          <ScrollView style={{backgroundColor:'#eef5ef',}}>
          {/* main view */}
          <View style={styles.firstHalf}>
          <View style={{flexDirection:'row'}}>
            <Ionicons name="location-outline" size={25} style={{alignSelf:'center'}} color={'#4d4f76'} />
            {/* <Image source={location} style={{width:20,height:20,alignSelf:'center',marginRight:10}} /> */}
            <View style={{paddingHorizontal:5}}>
              <Text style={{fontSize:16,fontWeight:'bold',color:'#4d4f76'}}>Current location <Ionicons name="caret-down-outline" size={15} /></Text>
              <Text style={{fontWeight:'bold',color:'#4d4f76'}}>Dhaka.Ultara</Text>
            </View>
            <Ionicons name="notifications-outline" size={25} style={{alignSelf:'center',right:0,position:'absolute'}} color={'#4d4f76'} />
            {/* <Image source={notification} style={{width:25,height:25,alignSelf:'center',right:0,position:'absolute'}} /> */}
          </View>
        
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
          <TouchableOpacity onPress={()=>{
            Animated.timing(scaleValue,{
              toValue: showMenu? 1: 0.68,
              duration: 200,
              useNativeDriver:true
            }).start()

            Animated.timing(offsetValue,{
              toValue: showMenu? 0: 230,
              duration: 200,
              useNativeDriver:true
            }).start()
            
            Animated.timing(offsetValueY,{
              toValue: showMenu? 0: 130,
              duration: 200,
              useNativeDriver:true
            }).start()
            
            setMenuShow(!menuShow)
            setShowMenu(!showMenu)
          }} style={{alignSelf:'center'}}>
            <Ionicons name={showMenu?'close':"menu-sharp"} size={30} style={styles.menuIcon} />
          
          {/* search menu */}
          </TouchableOpacity>
          <View style={styles.searchInput}>
            <Ionicons name="search-sharp" size={16} style={{alignSelf:'center',color:'#4d4f76'}} />
            <TextInput placeholder='Search for product' style={styles.searchInputBox} />
          </View>
          <Ionicons name="options" size={30} style={styles.menuIcon} />
        </View>

        {/* <Text style={{fontWeight:'bold',fontSize:30,color:'#000',paddingTop:20}}>{currentTab}</Text> */}
        
        {/* banner card */}
        <View style={{flexDirection:'row'}}>
          <Image source={photo} style={{width:'100%',height:200,borderRadius:15,marginTop:20,opacity:0.9}} />
          <Text style={{position:'absolute',color:'#fff',bottom:10,left:20,fontSize:22,fontWeight:'bold',textShadowColor:'#000',textShadowOffset:{width:0,height:1},textShadowRadius:15}}>Get 20% Off</Text>
        </View>

        {/* category */}
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View>
            <Image source={c1} style={styles.circleImage} />
            <Text style={styles.categoryName}>Vegetables</Text>
          </View>
          <View>
            <Image source={c2} style={styles.circleImage} />
            <Text style={styles.categoryName}>Fruits</Text>
          </View>
          <View>
            <Image source={c3} style={styles.circleImage} />
            <Text style={styles.categoryName}>Meat</Text>
          </View>
          <View>
            <Image source={c4} style={styles.circleImage} />
            <Text style={styles.categoryName}>Seafood</Text>
          </View>
        </View>

        </View>

        <View style={styles.productCardBox}>
          <Text style={styles.title}>Today Grocery Deals</Text>
          <View style={{flexDirection:'row',marginTop:10}}>
            <Pressable onPress={()=>navigation.navigate('Product')} style={styles.item}>
                <Image source={p1} style={styles.productImage} />
                <Text style={styles.itemText}>Product1</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:10,marginTop:10}}>
                  <Text style={{fontSize:13,fontWeight:'600'}}><Text style={{textDecorationLine:'line-through',color:'#4d4f76'}}>$30</Text>  <Text style={{fontWeight:'800',color:'#4d4f76'}}>$30</Text></Text>
                  <Text style={{fontSize:13,fontWeight:'800'}}>
                    <Ionicons name='md-star' style={{color:'#ffb918'}} size={14} /> 5.0</Text>
                </View>
              </Pressable>
              <Pressable onPress={()=>navigation.navigate('Product')} style={styles.item}>
                <Image source={p2} style={styles.productImage} />
                <Text style={styles.itemText}>Product2</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:10,marginTop:10}}>
                  <Text style={{fontSize:13,fontWeight:'600'}}><Text style={{textDecorationLine:'line-through',color:'#4d4f76'}}>$70</Text>  <Text style={{fontWeight:'800',color:'#4d4f76'}}>$50</Text></Text>
                  <Text style={{fontSize:13,fontWeight:'800'}}>
                    <Ionicons name='md-star' style={{color:'#ffb918'}} size={14} /> 5.0</Text>
                </View>
              </Pressable>
              <Pressable onPress={()=>navigation.navigate('Product')} style={styles.item}>
                <Image source={p3} style={styles.productImage} />
                <Text style={styles.itemText}>Product3</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:10,marginTop:10}}>
                  <Text style={{fontSize:13,fontWeight:'600'}}><Text style={{textDecorationLine:'line-through',color:'#4d4f76'}}>$150</Text>  <Text style={{fontWeight:'800',color:'#4d4f76'}}>$120</Text></Text>
                  <Text style={{fontSize:13,fontWeight:'800'}}>
                    <Ionicons name='md-star' style={{color:'#ffb918'}} size={14} /> 5.0</Text>
                </View>
              </Pressable>
          </View>
          
          <View style={{flexDirection:'row'}}>
              <Pressable onPress={()=>navigation.navigate('Product')} style={styles.item}>
                <Image source={p4} style={styles.productImage} />
                <Text style={styles.itemText}>Product1</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:10,marginTop:10}}>
                  <Text style={{fontSize:13,fontWeight:'600'}}><Text style={{fontWeight:'800',color:'#4d4f76'}}>$50</Text></Text>
                  <Text style={{fontSize:13,fontWeight:'800'}}>
                    <Ionicons name='md-star' style={{color:'#ffb918'}} size={14} /> 5.0</Text>
                </View>
              </Pressable>
              <Pressable onPress={()=>navigation.navigate('Product')} style={styles.item}>
                <Image source={p5} style={styles.productImage} />
                <Text style={styles.itemText}>Product2</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:10,marginTop:10}}>
                  <Text style={{fontSize:13,fontWeight:'600'}}><Text style={{textDecorationLine:'line-through',color:'#4d4f76'}}>$70</Text>  <Text style={{fontWeight:'800',color:'#4d4f76'}}>$50</Text></Text>
                  <Text style={{fontSize:13,fontWeight:'800'}}>
                    <Ionicons name='md-star' style={{color:'#ffb918'}} size={14} /> 5.0</Text>
                </View>
              </Pressable>
              <Pressable onPress={()=>navigation.navigate('Product')} style={styles.item}>
                <Image source={p1} style={styles.productImage} />
                <Text style={styles.itemText}>Product3</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:10,marginTop:10}}>
                  <Text style={{fontSize:13,fontWeight:'600'}}><Text style={{fontWeight:'800',color:'#4d4f76'}}>$30</Text></Text>
                  <Text style={{fontSize:13,fontWeight:'800'}}>
                    <Ionicons name='md-star' style={{color:'#ffb918'}} size={14} /> 5.0</Text>
                </View>
              </Pressable>
          </View>

          <View style={{flexDirection:'row'}}>
              <Pressable onPress={()=>navigation.navigate('Product')} style={styles.item}>
                <Image source={p2} style={styles.productImage} />
                <Text style={styles.itemText}>Product1</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:10,marginTop:10}}>
                  <Text style={{fontSize:13,fontWeight:'600'}}><Text style={{fontWeight:'800',color:'#4d4f76'}}>$30</Text></Text>
                  <Text style={{fontSize:13,fontWeight:'800'}}>
                    <Ionicons name='md-star' style={{color:'#ffb918'}} size={14} /> 5.0</Text>
                </View>
              </Pressable>
              <Pressable onPress={()=>navigation.navigate('Product')} style={styles.item}>
                <Image source={p3} style={styles.productImage} />
                <Text style={styles.itemText}>Product2</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:10,marginTop:10}}>
                  <Text style={{fontSize:13,fontWeight:'600'}}><Text style={{fontWeight:'800',color:'#4d4f76'}}>$50</Text></Text>
                  <Text style={{fontSize:13,fontWeight:'800'}}>
                    <Ionicons name='md-star' style={{color:'#ffb918'}} size={14} /> 5.0</Text>
                </View>
              </Pressable>
              <Pressable onPress={()=>navigation.navigate('Product')} style={styles.item}>
                <Image source={p6} style={styles.productImage} />
                <Text style={styles.itemText}>Product3</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:10,marginTop:10}}>
                  <Text style={{fontSize:13,fontWeight:'600'}}><Text style={{textDecorationLine:'line-through',color:'#4d4f76'}}>$70</Text>  <Text style={{fontWeight:'800',color:'#4d4f76'}}>$50</Text></Text>
                  <Text style={{fontSize:13,fontWeight:'800'}}>
                    <Ionicons name='md-star' style={{color:'#ffb918'}} size={14} /> 5.0</Text>
                </View>
              </Pressable>
          </View>
          
        </View>
        {/* second half end */}

        {/* bottom banner */}
        <View style={styles.bottomCard}>
          <Image source={photo} style={{width:'100%',height:100,}} />
        </View>
        {/* bottom banner end */}

          {/* member deals */}
        <View style={[styles.productCardBox,{paddingBottom:110}]}>
          <Text style={styles.title}>Grocery Member Deals</Text>
          <View style={{flexDirection:'row',marginTop:10}}>
              <Pressable onPress={()=>navigation.navigate('Product')} style={styles.item}>
                <Image source={p1} style={styles.productImage} />
                <Text style={styles.itemText}>Product1</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:10,marginTop:10}}>
                  <Text style={{fontSize:13,fontWeight:'600'}}><Text style={{textDecorationLine:'line-through',color:'#4d4f76'}}>$30</Text>  <Text style={{fontWeight:'800',color:'#4d4f76'}}>$30</Text></Text>
                  <Text style={{fontSize:13,fontWeight:'800'}}>
                    <Ionicons name='md-star' style={{color:'#ffb918'}} size={14} /> 5.0</Text>
                </View>
              </Pressable>
              <Pressable onPress={()=>navigation.navigate('Product')} style={styles.item}>
                <Image source={p2} style={styles.productImage} />
                <Text style={styles.itemText}>Product2</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:10,marginTop:10}}>
                  <Text style={{fontSize:13,fontWeight:'600'}}><Text style={{textDecorationLine:'line-through',color:'#4d4f76'}}>$70</Text>  <Text style={{fontWeight:'800',color:'#4d4f76'}}>$50</Text></Text>
                  <Text style={{fontSize:13,fontWeight:'800'}}>
                    <Ionicons name='md-star' style={{color:'#ffb918'}} size={14} /> 5.0</Text>
                </View>
              </Pressable>
              <Pressable onPress={()=>navigation.navigate('Product')} style={styles.item}>
                <Image source={p3} style={styles.productImage} />
                <Text style={styles.itemText}>Product3</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:10,marginTop:10}}>
                  <Text style={{fontSize:13,fontWeight:'600'}}><Text style={{textDecorationLine:'line-through',color:'#4d4f76'}}>$150</Text>  <Text style={{fontWeight:'800',color:'#4d4f76'}}>$120</Text></Text>
                  <Text style={{fontSize:13,fontWeight:'800'}}>
                    <Ionicons name='md-star' style={{color:'#ffb918'}} size={14} /> 5.0</Text>
                </View>
              </Pressable>
          </View>
        </View>
        {/* member deals end */}

        </ScrollView>
        {/* main view end */}
      </Animated.View>
    </SafeAreaView>
  );
};

const TabButton = (currentTab, setCurrentTab, title, iconName, iconType) =>{
  return (
    <TouchableOpacity onPress={()=>{
      if(title == "Logout"){
        
      }else{
        setCurrentTab(title)
      }
      }}>
      <View style={{
            flexDirection:'row',
            alignItems:'center',
            paddingVertical:8,
            // backgroundColor: currentTab == title? '#ddd': 'transparent',
            paddingLeft:13,
            paddingRight: 35,
            borderRadius:8,
            marginTop:10
            }}>
              {
                iconType == 1?
                <Ionicons name={iconName} size={25} color={'#4d4f76'} />:null
              }
              {
                iconType == 2?
                <MaterialCommunityIcons name={iconName} size={25} color={'#4d4f76'} />:null
              }
              {
                iconType == 3?
                <Octicons name={iconName} size={25} color={'#4d4f76'} />:null
              }
              {
                iconType == 4?
                <MaterialIcons name={iconName} size={25} color={'#4d4f76'} />:null
              }
          {/* <Image source={image} style={{width:25,height:25}} /> */}
        <Text style={{fontSize:18,fontWeight:'bold',paddingLeft:15,color:'#4d4f76'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f9faff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  profileImage:{
    width:80,
    height:80,
    borderRadius:50,
    marginTop:8,
    borderWidth:4,
    borderColor:'#41aa55'
  },
  searchInput:{
    borderWidth:1,
    borderColor:'#ddd',
    borderRadius:6,
    paddingHorizontal:10,
    width:'70%',
    // height:35,
    alignSelf:'center',
    flexDirection:'row'
  },
  searchInputBox:{
    paddingHorizontal:3,
    paddingVertical:6,
  },
  menuIcon:{
    alignSelf:'center',
    color:'#4d4f76',
    borderWidth:1,
    paddingHorizontal:5,
    paddingVertical:3,
    borderRadius:6,
    borderColor:'#ccc',
  },
  circleImage:{
    width:80,
    height:80,
    borderRadius:50,
    marginTop:20,
  },
  categoryName:{
    alignSelf:'center',
    marginTop:10,
    color:'#4d4f76',
    fontSize:16,
    fontWeight:'bold'
  },
  firstHalf:{
    paddingHorizontal:15,
    paddingVertical:20,
  },
  productCardBox:{
    backgroundColor:'#fff',
    paddingTop:10,
  },
  title:{
    fontSize:18,
    color:'#4d4f76',
    fontWeight:'bold',
    marginLeft:10
  },
  item:{
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    width:'33%',
    paddingBottom:5,
    borderWidth:0.8,
    borderColor:'#f5f1f1'
  },
  itemText:{
    color:'#4d4f76',
    fontWeight:'bold'
  },
  productImage:{
    width:50,
    height:50,
    borderRadius:15,
    marginTop:20,
  },
  bottomCard:{
    backgroundColor:'#fff',
    marginTop:10,
    marginBottom:10
  },
});

export default MainScreen;
