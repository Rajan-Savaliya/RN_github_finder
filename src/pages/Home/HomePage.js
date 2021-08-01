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

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title, navigation}) => (
  <View
    style={{
      // margin: 10,
      borderRadius: 2,
      borderWidth: 0.1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%',
      alignSelf: 'baseline',
      marginHorizontal: '5%',
      marginVertical: 8,
      paddingVertical: 10,
      // paddingTop: 15,
      elevation: 0.5,
      borderColor: '#ddd',
      backgroundColor: '#131313',
      opacity: 0.8
    }}>
    <View>
      <Image
        style={{width: 50, height: 50, borderRadius: 50}}
        source={{
          uri: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png',
        }}
      />
    </View>
    <View>
      <Text style={{ color: '#fff'}}>UserName</Text>
    </View>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('User');
      }}
      style={{
        backgroundColor: '#FFF',
        marginVertical: 5,
        padding: 3,
        paddingHorizontal: 8,
      }}>
      <Text style={{color: '#000'}}>More</Text>
    </TouchableOpacity>
  </View>
);

const Home = ({navigation}) => {
  const [searchHeader, setSearchHeader] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [isFocused, setIsFocued] = useState(true);
  const [searchProductLoading, setSearchProductLoading] = useState(false);
  const [showSeachProduct, setShowSeachProducts] = useState(false);

  useEffect(() => {
    navi.addListener('focus', setFocus);
    navi.addListener('blur', setBlur);
    return () => {
      navi.removeListener('focus', setFocus);
      navi.removeListener('blur', setBlur);
    };
  }, []);

  const setFocus = React.useCallback(() => {
    setIsFocued(true);
  }, []);

  const setBlur = React.useCallback(() => {
    setIsFocued(false);
  }, []);
  const navi = useNavigation();

  const onChangeSearch = query => {
    setSearchQuery(query);
  };

  const onKeybordSubmit = () => {
    // setSearchProductLoading(true);
    // setTimeout(() => {
    //   dbd.transaction((txn) => {
    //     txn.executeSql(
    //       `SELECT pi.fixed_price,p.id,p.name,p.type,p.barcode,p.default_code,p.lst_price,p.lst_price_usd,p.image_url,p.image_secondary_url FROM pricelistitem pi inner join Product p on pi.product_id=p.id WHERE pi.pricelist_id = ${setCustomerPriceListId} and p.name LIKE '%${searchQuery}%';`,
    //       [],
    //       (tx, res) => {
    //         if (res.rows._array.length > 0) {
    //           console.log(res.rows._array);
    //           setShowSeachProducts(true);
    //           setSearchProductLoading(false);
    //           setDataProvider(
    //             new DataProvider((r1, r2) => {
    //               return r1.id !== r2.id;
    //             }),
    //           );
    //           setDataProvider((prevState) =>
    //             prevState.cloneWithRows([...res.rows._array]),
    //           );
    //         } else {
    //           setSearchProductLoading(false);
    //           ToastAndroid.show(
    //             `Not found any customers related : ${searchQuery}`,
    //             ToastAndroid.SHORT,
    //           );
    //         }
    //       },
    //     );
    //   });
    // }, 1000);
  };

  const renderItem = ({item}) => (
    <Item navigation={navigation} title={item.title} />
  );

  return (
    <>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
          <StatusBar backgroundColor="#04009A" barStyle="white-content" />
          {!searchHeader ? (
            <Appbar.Header style={{backgroundColor: '#04009A'}}>
              <Appbar.Action color="#fff" icon="github" />

              <Appbar.Content title="GitHub Finders" color="#fff" />
              <Appbar.Action
                color="#fff"
                icon="magnify"
                onPress={() => setSearchHeader(true)}
              />
            </Appbar.Header>
          ) : (
            <Appbar.Header
              style={{
                backgroundColor: '#04009A',
                fontWeight: 'bold',
                elevation: 0,
              }}>
              <Appbar.Action
                color="#fff"
                onPress={() => {
                  setSearchHeader(false);
                  //   setShowSearch(false);
                  //   setShowSeachProducts(false);
                  //   searchGoBack();
                }}
                icon="chevron-left"
                size={35}
              />
              <Searchbar
                placeholder="Search"
                returnKeyType="next"
                iconColor="#fff"
                placeholderTextColor="#fff"
                selectionColor="#fff"
                inputStyle={{color: '#fff'}}
                autoFocus
                onChangeText={onChangeSearch}
                value={searchQuery}
                onSubmitEditing={onKeybordSubmit}
                style={{
                  fontSize: 12,
                  elevation: 0,
                  textAlign: 'center',
                  width: Dimensions.get('window').width / 1.3,
                  borderRadius: 50,
                  backgroundColor: '#04009A',
                  color: '#fff',
                }}
              />
            </Appbar.Header>
          )}
        <ImageBackground
          style={{width: '100%', height: '100%', flex: 1,}}
          blurRadius={5}
          resizeMode="cover"
          source={require('../../bg.jpg')}>

          <View style={{flex: 1}}>
            <View
              style={{
                flex: 0.99,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
              />
            </View>
            <View style={{flex: 0.001}} />
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default Home;
