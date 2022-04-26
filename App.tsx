import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  NativeModules,
} from 'react-native';
import React, {useEffect} from 'react';
// import admob, {MaxAdContentRating} from '@react-native-firebase/admob';
// import {BannerAd, TestIds, BannerAdSize} from '@react-native-firebase/admob';
import {
  // RewardedAd,
  BannerAd,
  TestIds,
  BannerAdSize,
} from '@react-native-firebase/admob';
import RNFetchBlob from 'rn-fetch-blob';
// InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);
// RewardedAd.createForAdRequest(TestIds.REWARDED);
const {APDocModule} = NativeModules;
// console.log(RNFetchBlob);

const TRACK_FOLDER = RNFetchBlob.fs.dirs.CacheDir;

export default function App() {
  useEffect(() => {
    // admob()
    //   .setRequestConfiguration({
    //     // Update all future requests suitable for parental guidance
    //     maxAdContentRating: MaxAdContentRating.PG,
    //     // Indicates that you want your content treated as child-directed for purposes of COPPA.
    //     tagForChildDirectedTreatment: true,
    //     // Indicates that you want the ad request to be handled in a
    //     // manner suitable for users under the age of consent.
    //     tagForUnderAgeOfConsent: true,
    //   })
    //   .then(() => {
    //     // Request config successfully set!
    //   });
  }, []);
  const readFolder = async () => {
    // APDocModule.show(`${TRACK_FOLDER}/file-sample_100kB.doc`);
    APDocModule.show(`${TRACK_FOLDER}/file-sample_100kB.doc`);

    // RNFetchBlob.android.getContentIntent(`${TRACK_FOLDER}/file-sample_100kB.doc`);
    try {
      let files = await RNFetchBlob.fs.ls(TRACK_FOLDER);
      console.log('files', files);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, styles.cenItem]}>
        {/* <RewardedAd unitId={TestIds.REWARDED} /> */}
        <TouchableOpacity onPress={() => readFolder()} style={{padding: 20}}>
          <Text>App</Text>
        </TouchableOpacity>
        {/* <BannerAd
          unitId={TestIds.BANNER}
          size={BannerAdSize.SMART_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
          onAdLoaded={() => {
            console.log('Advert loaded');
          }}
          onAdFailedToLoad={error => {
            console.error('Advert failed to load: ', error);
          }}
        /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cenItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
