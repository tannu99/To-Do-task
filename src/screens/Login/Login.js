import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {loginDataSelectors, userProfile} from '../../Redux/Login/loginSlice';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-simple-toast';
import LottieView from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../../Theme/theme';
const Login = ({navigation, route}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {userData, loading, is_logged, users} = useSelector(
    loginDataSelectors.getData,
  );

  function handleClick(username, password) {
    return users.some(function (el) {
      return el.mobile === username && el.password === password;
    });
  }
  function record() {
    var result = users.find((obj) => {
      return obj.mobile === username && obj.password === password;
    });
    dispatch(userProfile(result));
  }
  // console.log(users);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20%',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 28,
              fontWeight: 'bold',
              color: theme.colors.modes.dark.orange,
            }}>
            Let's Login
          </Text>
          <Text
            style={{
              color: 'grey',
              width: '70%',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Mind your tasks
          </Text>
        </View>
        <View
          style={{
            width: '80%',
            alignSelf: 'center',
            marginTop: '12%',
          }}>
          <TextInput
            mode="outlined"
            label="Phone no."
            activeOutlineColor="#4864c5"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={{margin: 7, height: 40}}
            keyboardType="numeric"
          />
          <TextInput
            mode="outlined"
            label="Password"
            activeOutlineColor="#4864c5"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={{margin: 7, height: 40}}
            secureTextEntry={true}
          />

          <TouchableOpacity
            onPress={() => {
              if (!username) {
                Toast.show('Phone no. is Empty', Toast.SHORT, [
                  'UIAlertController',
                ]);
              } else if (!password) {
                Toast.show('Password is Empty', Toast.SHORT, [
                  'UIAlertController',
                ]);
              } else {
                if (handleClick(username, password)) {
                  record();
                  navigation.navigate('BottomNav');
                } else {
                  Toast.show(
                    'User not exists, Create new account',
                    Toast.SHORT,
                    ['UIAlertController'],
                  );
                }
              }
            }}>
            <LinearGradient
              colors={['#e68028', '#e68028', '#e68028']}
              style={{
                alignItems: 'center',
                // backgroundColor: '#4864c5',
                padding: 10,
                width: '95%',
                marginLeft: '2%',
                borderRadius: 5,
                marginTop: '7%',
              }}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}>
              <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>
                Login
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: '3%', alignSelf: 'center'}}>
          <Text style={{fontSize: 13, color: 'black', fontWeight: 'bold'}}>
            Don't have account?{' '}
            <Text
              style={{color: '#4864c5'}}
              onPress={() => (
                navigation.navigate('SignUp'), setUsername(''), setPassword('')
              )}>
              Sign up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
