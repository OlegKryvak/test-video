import {useCallback, useEffect, useRef, useState} from 'react';

import {FlatList} from 'react-native';
import {RootState} from '../../store';
import VideoPlayer from '../components/VideoPlayer';
import {WINDOW_HEIGHT} from '../../utils';
import remoteConfig from '@react-native-firebase/remote-config';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';

interface IScrollToIndexParams {
  animated: boolean;
  index: number | null;
}

interface IFlatlistRef {
  scrollToIndex: (data: IScrollToIndexParams) => void;
}

const EpisodesScreen = () => {
  const [videoData, setVideoData] = useState([]);
  const flatlistRef = useRef<IFlatlistRef>(null);
  const currentVideoIndex = useSelector(
    (state: RootState) => state.rootSlice.videoCurrentIndex,
  );
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const scrollToIndex = () => {
    flatlistRef?.current?.scrollToIndex({
      animated: false,
      index: currentVideoIndex,
    });
  };

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

  useFocusEffect(
    useCallback(() => {
      if (currentVideoIndex) {
        setTimeout(() => scrollToIndex(), 100);
      }
    }, []),
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={videoData}
      pagingEnabled
      ref={flatlistRef}
      renderItem={({item, index}) => (
        <VideoPlayer
          video={item}
          index={index}
          isActive={activeVideoIndex === index}
        />
      )}
      onScroll={e => {
        const index = Math.round(e.nativeEvent.contentOffset.y / WINDOW_HEIGHT);
        setActiveVideoIndex(index);
      }}
    />
  );
};

export default EpisodesScreen;
