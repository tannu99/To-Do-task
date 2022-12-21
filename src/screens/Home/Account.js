import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {loginDataSelectors, logout} from '../../Redux/Login/loginSlice';
import GenericIcon from '../../components/GenericIcon';
import _ from 'lodash';

const Account = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {userData} = useSelector(loginDataSelectors.getData);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingTop: 16,
          paddingLeft: 16,
          paddingRight: 16,
        }}>
        <TouchableOpacity onPress={() => dispatch(logout())}>
          <GenericIcon
            name="logout"
            style={{
              fontSize: 23,
              color: 'black',
              padding: 12,
              backgroundColor: '#f2f2f2',
              borderRadius: 10,
            }}
            show={true}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: wp('5%'),
          zIndex: 10,
        }}>
        <View
          style={{
            width: wp('30'),
            backgroundColor: '#f2f2f2',
            justifyContent: 'center',

            borderWidth: 1,
            borderColor: 'transparent',
            elevation: 10,
            borderRadius: 65,
          }}>
          <Image
            style={styles.profileImage}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlHBoELHG9IPFDyVp_5_lRfL-9zTYR-YG1nEC8N9c&s',
            }}
          />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: '#f4f4f4',
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          marginTop: hp('-8.5'),
        }}>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#f2f2f2',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            marginTop: hp('8.5'),
          }}>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: hp('2'),
            }}>
            <View style={{marginBottom: hp('2.5')}}>
              <Text
                style={{color: 'black', fontSize: wp('4'), fontWeight: 'bold'}}>
                First Name
              </Text>
              <TextInput
                mode="outlined"
                placeholder="First Name"
                activeOutlineColor="#1eb15a"
                value={userData.firstName}
                editable={false}
                style={{margin: 7, height: hp('6')}}
              />
            </View>
            <View style={{marginBottom: hp('2.5')}}>
              <Text
                style={{color: 'black', fontSize: wp('4'), fontWeight: 'bold'}}>
                Last Name
              </Text>
              <TextInput
                mode="outlined"
                placeholder="Last Name"
                activeOutlineColor="#1eb15a"
                value={userData.lastName}
                editable={false}
                style={{margin: 7, height: hp('6')}}
              />
            </View>

            <View style={{marginBottom: hp('2.5')}}>
              <Text
                style={{color: 'black', fontSize: wp('4'), fontWeight: 'bold'}}>
                Mobile
              </Text>
              <TextInput
                mode="outlined"
                placeholder="Mobile"
                activeOutlineColor="#1eb15a"
                value={userData.mobile}
                editable={false}
                style={{margin: 7, height: hp('6')}}
              />
            </View>

            <View style={{marginBottom: hp('2.5')}}>
              <Text
                style={{color: 'black', fontSize: wp('4'), fontWeight: 'bold'}}>
                Email
              </Text>
              <TextInput
                mode="outlined"
                placeholder="Email"
                activeOutlineColor="#1eb15a"
                value={userData.email}
                editable={false}
                style={{margin: 7, height: hp('6')}}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileImage: {
    height: wp('30'),
    width: wp('30'),
    borderRadius: 65,
    borderWidth: 0.5,
    borderColor: 'black',
  },
});
