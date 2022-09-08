import React from 'react';
import {
  Button,
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {ButtonComponents} from '../Components/ButtonComponent';
import LiveStreamingFlatList from './LiveStreamingFlatList';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export const Upload = () => {
  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    },
  };
  const openGallery = async () => {
    try {
      const result = await launchImageLibrary(options);
      console.log('results:::::', result);
      const formdata = new Formdata();
      formdata.append('file', {
        // here you have to list the list that you have to sent the image
        uri: result?.assets[0]?.uri,
      });
      let res = await fetch('http://localhost//webservice/user/uploadImage', {
        method: 'post',
        body: formdata,
        headers: {
          'Content-Type': 'multipart/form-data; ',
        },
      });
      // here you will get all the the response data
      let responseJson = await res.json();
      console.log('RESPONSEEEEEEE:::::::', responseJson);
    } catch (e) {
      console.log('error:::', e);
    }
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(9000).then(() => setRefreshing(false));
  }, []);

  return (
    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <ButtonComponents
    //     title={'Upload'}
    //     onPressButton={openGallery}
    //     buttonBg={'primaryCardBackground'}
    //     buttonStyle={{margin: 40}}
    //     textStyle={{margin: 20, color: 'white', textAlign: 'center'}}
    //   />
    // </View>

    <SafeAreaView style={styles.container}>
      {/* <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
      <FlatList
        data={[{}, {}, {}, {}, {}, {}]}
        renderItem={() => {
          return (
            <View
              style={{backgroundColor: 'red', height: 200, marginBottom: 10}}
            />
          );
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      /> */}
      <LiveStreamingFlatList
        data={[{}, {}, {}, {}, {}, {}]}
        isRefreshing={refreshing}
        onRefreshCall={onRefresh}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
