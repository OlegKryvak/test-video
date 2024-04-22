import {useEffect, useState} from 'react';

import Banner from './Banner';
import {FlatList, ScrollView} from 'react-native';
import remoteConfig from '@react-native-firebase/remote-config';
import {scaleWidth} from '../../constants/metrics';

const BannerCarousel = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    remoteConfig()
      .setDefaults({
        data: '',
      })
      .then(() => remoteConfig().fetchAndActivate())
      .then(fetchedRemotely => {
        if (fetchedRemotely) {
          const videoDataFB = remoteConfig().getValue('data');
          setVideoData(JSON.parse(videoDataFB.asString()));
        } else {
          console.log(
            'No configs were fetched from the backend, and the local configs were already activated',
          );
        }
      });
  }, []);

  return (
    <FlatList
      data={videoData}
      horizontal={true}
      renderItem={({video}) => <Banner video={video} />}
      keyExtractor={video => Math.random()}
    />
  );
};

export default BannerCarousel;
