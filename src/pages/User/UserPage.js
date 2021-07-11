import React, {useState, useEffect, useContext, createRef, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  ToastAndroid,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Appbar, Searchbar} from 'react-native-paper';
import {Button} from 'react-native-paper';

import {useNavigation} from '@react-navigation/native';


const User = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Appbar.Header style={{backgroundColor: 'orange'}}>
        <Appbar.Action
          color="#fff"
          icon="keyboard-backspace"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="GitHub Finders" color="#fff" />
      </Appbar.Header>

      <View
        style={{
          borderWidth: 0.5,
          margin: 15,
          borderRadius: 4,
          borderColor: '#ddd',
        }}>
        <View
          style={{margin: 10, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: 100, height: 100, borderRadius: 50}}
            source={{
              uri: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png',
            }}
          />
          <View>
            <Text
              style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
              Rajan Savaliya
            </Text>
            <Text style={{textAlign: 'center'}}>Loation: Surat</Text>
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{textAlign: 'center'}}>Bio: I do code. Do you </Text>
          <Text style={{textAlign: 'center'}}>UserName: Rajan-Savaliya </Text>
        </View>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',  
          }}>
          <View
            style={{
              borderRadius: 2,
              paddingHorizontal: 5,
              paddingVertical: 8,
              marginVertical: 10,
              backgroundColor: '#000',
              // width: '50%',
            }}>
            <Text style={{color: '#fff', paddingVertical: 0, paddingHorizontal: 10}}>Visit Github Profile</Text>
          </View>
        </TouchableOpacity>
        {/* <View style={{marginTop: 10,  justifyContent: 'center', alignItems: 'center', borderRadius: 0}}>
          <Button mode="contained" color="#000000"  onPress={() => console.log('Pressed')}>
          Visit Github Profile
          </Button>
        </View> */}
      </View>

      <View
        style={{
          borderWidth: 0.5,
          margin: 10,
          borderRadius: 4,
          borderColor: '#ddd',
          padding: 10,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              margin: 1,
              padding: 5,
              backgroundColor: 'red',
              borderRadius: 4,
            }}>
            <Text style={{color: '#fff'}}>follow: 10</Text>
          </View>
          <View
            style={{
              margin: 1,
              padding: 5,
              backgroundColor: 'green',
              borderRadius: 4,
            }}>
            <Text style={{color: '#fff'}}>follow: 10</Text>
          </View>
          <View
            style={{
              margin: 1,
              padding: 5,
              backgroundColor: '#f4f4f4',
              borderRadius: 4,
            }}>
            <Text style={{color: '#000'}}>follow: 10</Text>
          </View>
          <View
            style={{
              margin: 1,
              padding: 5,
              backgroundColor: '#000',
              borderRadius: 4,
            }}>
            <Text style={{color: '#fff'}}>follow: 10</Text>
          </View>
        </View>
      </View>

      <View>
        <View
          style={{
            margin: 5,
            padding: 10,
            paddingLeft: 15,
            borderRadius: 4,
            borderColor: '#ddd',
            borderWidth: 0.5,
          }}>
          <Text style={{color: 'red'}}>react-native-paper</Text>
        </View>
        <View
          style={{
            margin: 5,
            padding: 10,
            paddingLeft: 15,
            borderRadius: 4,
            borderColor: '#ddd',
            borderWidth: 0.5,
          }}>
          <Text style={{color: 'red'}}>react-native-paper</Text>
        </View>
        <View
          style={{
            margin: 5,
            padding: 10,
            paddingLeft: 15,
            borderRadius: 4,
            borderColor: '#ddd',
            borderWidth: 0.5,
          }}>
          <Text style={{color: 'red'}}>react-native-paper</Text>
        </View>
      </View>
    </View>
  );
};

export default User;
