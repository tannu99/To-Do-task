import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Sample, Home, Account, Product, MyCart, Wishlist} from '../screens';
import * as Animatable from 'react-native-animatable';
import GenericIcon from './GenericIcon';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {loginDataSelectors} from '../Redux/Login/loginSlice';

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    icon: 'home',
    component: Home,
  },

  {
    route: 'Account',
    label: 'Setting',
    icon: 'account',
    component: Account,
  },
];

const Tab = createBottomTabNavigator();

const animate1 = {
  0: {scale: 0.5, translateY: 7},
  0.92: {translateY: -34},
  1: {scale: 1.2, translateY: -24},
};
const animate2 = {
  0: {scale: 1.2, translateY: -24},
  1: {scale: 1, translateY: 7},
};

const circle1 = {
  0: {scale: 0},
  0.3: {scale: 0.9},
  0.5: {scale: 0.2},
  0.8: {scale: 0.7},
  1: {scale: 1},
};
const circle2 = {0: {scale: 1}, 1: {scale: 0}};

const TabButton = (props) => {
  const {item, onPress, accessibilityState, navigation} = props;
  // console.log('navigation', navigation);
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({scale: 1});
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({scale: 0});
    }
  }, [focused]);

  const {profileData, loading, userData} = useSelector(
    loginDataSelectors.getData,
  );

  // console.log('profileData', profileData);

  // useEffect(() => {}, [profileData]);

  return (
    <TouchableOpacity
      // onPress={onPress}
      onPress={() =>
        navigation.reset({
          index: 0,
          routes: [
            {
              name: item.route,
            },
          ],
        })
      }
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <LinearGradient
            colors={
              focused
                ? ['#e68028', '#e68028', '#e68028']
                : ['#ffffff', '#ffffff']
            }
            style={styles.circle}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}>
            <GenericIcon
              name={item.icon}
              style={{
                color: focused ? 'white' : 'black',
                fontSize: 25,
              }}
              show={true}
            />
          </LinearGradient>
        </View>
        <Animatable.Text ref={textRef} style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const BottomNav = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              unmountOnBlur: true,
              tabBarButton: (props) => (
                <TabButton {...props} item={item} navigation={navigation} />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 70,
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 16,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: 'white',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#4864c5',
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    color: '#e68028',
  },
});
