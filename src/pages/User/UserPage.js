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
  ImageBackground,
} from 'react-native';
import {Appbar, Searchbar} from 'react-native-paper';
import {Button} from 'react-native-paper';

import {useNavigation} from '@react-navigation/native';
import GithubContext from '../../context/github/githubContext';

const User = ({navigation}) => {
  const {searchUsers} = useContext(GithubContext);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ImageBackground
        style={{width: '100%', height: '100%', flex: 1}}
        blurRadius={5}
        resizeMode="cover"
        source={require('../../bg.jpg')}>
        <Appbar.Header style={{backgroundColor: '#04009A'}}>
          <Appbar.Action
            color="#fff"
            icon="keyboard-backspace"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
          <Appbar.Content title="GitHub Finders" color="#fff" />
        </Appbar.Header>
        <View
          style={{
            borderWidth: 2,
            margin: 15,
            borderRadius: 4,
            borderColor: '#ddd',
            backgroundColor: '#000',
            opacity: 0.755555
          }}>
          <View
            style={{
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 100, height: 100, borderRadius: 50}}
              source={{
                uri: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png',
              }}
            />
            <View>
              <Text
                style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: '#FFFFFF'}}>
                Rajan Savaliya
              </Text>
              <Text style={{textAlign: 'center', color: '#FFFFFF'}}>Loation: Surat</Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: 40, padding: 0.5, marginBottom: 10, backgroundColor: '#FFFFFF'}}>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{textAlign: 'center', color: '#FFFFFF'}}>Bio: I do code. Do you </Text>
            <Text style={{textAlign: 'center', color: '#FFFFFF'}}>UserName: Rajan-Savaliya </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              searchUsers('Rajan-Savaliya');
            }}
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
              <Text
                style={{
                  color: '#fff',
                  paddingVertical: 0,
                  paddingHorizontal: 10,
                }}>
                Visit Github Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            borderWidth: 2,
            margin: 10,
            borderRadius: 4,
            borderColor: '#ddd',
            padding: 10,
            backgroundColor: '#000',
            opacity: 0.755555

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
              borderWidth: 2,
              backgroundColor: '#000',
              opacity: 0.755555
  
            }}>
            <Text style={{color: 'red', fontWeight: 'bold'}}>react-native-paper</Text>
          </View>
          <View
            style={{
              margin: 5,
              padding: 10,
              paddingLeft: 15,
              borderRadius: 4,
              borderColor: '#ddd',
              borderWidth: 2,
              backgroundColor: '#000',
              opacity: 0.755555
  
            }}>
            <Text style={{color: 'red', fontWeight: 'bold'}}>react-native-paper</Text>
          </View>
          <View
            style={{
              margin: 5,
              padding: 10,
              paddingLeft: 15,
              borderRadius: 4,
              borderColor: '#ddd',
              borderWidth: 2,
              backgroundColor: '#000',
              opacity: 0.7555555
  
            }}>
            <Text style={{color: 'red', fontWeight: 'bold'}}>react-native-paper</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default User;
