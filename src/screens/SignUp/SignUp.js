import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Toast from 'react-native-simple-toast';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {loginDataSelectors, addUser} from '../../Redux/Login/loginSlice';
import _ from 'lodash';
import {theme} from '../../Theme/theme';

const SignUp = ({navigation, route}) => {
  const dispatch = useDispatch();

  const {userData, loading} = useSelector(loginDataSelectors.getData);

  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  const [email, setEmail] = useState('');

  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20%',
          }}>
          <Image
            style={{
              width: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 28,
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            color: theme.colors.modes.dark.orange,
          }}>
          Sign Up
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '80%',
            marginLeft: '8%',
            marginTop: '2%',
          }}></View>
        <View
          style={{
            // marginTop: "1%",
            width: '80%',
            alignSelf: 'center',
          }}>
          <TextInput
            mode="outlined"
            label="First Name"
            activeOutlineColor="#4864c5"
            placeholder="Type something"
            style={{margin: 7, height: 40}}
            onChangeText={(text) => setFirstName(text)}
          />
          <TextInput
            mode="outlined"
            label="Last Name"
            activeOutlineColor="#4864c5"
            placeholder="Type something"
            style={{margin: 7, height: 40}}
            onChangeText={(text) => setLastName(text)}
          />
          <TextInput
            mode="outlined"
            label="Email Id"
            activeOutlineColor="#4864c5"
            placeholder="Type something"
            style={{margin: 7, height: 40}}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />
          <TextInput
            mode="outlined"
            label="Phone No."
            activeOutlineColor="#4864c5"
            placeholder="Type something"
            style={{margin: 7, height: 40}}
            // secureTextEntry={true}
            onChangeText={(number) => setPhoneNo(number)}
            keyboardType="numeric"
          />
          <TextInput
            mode="outlined"
            label="Password"
            activeOutlineColor="#4864c5"
            placeholder="Type something"
            style={{margin: 7, height: 40}}
            // secureTextEntry={true}
            onChangeText={(number) => setPassword(number)}
            keyboardType="numeric"
          />

          <TouchableOpacity
            onPress={() => {
              if (!firstName) {
                Toast.show('Plesase Enter Your First Name', Toast.SHORT, [
                  'UIAlertController',
                ]);
              } else if (!lastName) {
                Toast.show('Plesase Enter Your Last Name', Toast.SHORT, [
                  'UIAlertController',
                ]);
              } else if (!phoneNo) {
                Toast.show('Plesase Enter Your Phone Number', Toast.SHORT, [
                  'UIAlertController',
                ]);
              } else if (!email) {
                Toast.show('Plesase Enter Your Email', Toast.SHORT, [
                  'UIAlertController',
                ]);
              } else {
                dispatch(
                  addUser({
                    firstName: firstName,
                    lastName: lastName,
                    mobile: phoneNo,
                    email: email,
                    password: password,
                  }),
                );
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
                SignUp
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={{marginTop: '3%', alignSelf: 'center'}}>
            <Text style={{fontSize: 13, color: 'black', fontWeight: 'bold'}}>
              Already have account?{' '}
              <Text
                style={{color: '#4864c5'}}
                onPress={() => navigation.navigate('Login')}>
                Login
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
