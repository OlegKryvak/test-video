
import {
  View,
} from 'react-native';
import Video, {OnLoadData, OnProgressData} from 'react-native-video';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils';
import {useSelector} from 'react-redux';
import {useEffect, useRef, useState} from 'react';
import {RootState} from '../../store';
import VideoPlayerHeader from './VideoPlayerHeader';
import VideoPlayerControls from './VideoPlayerControls';

interface Props {
  video: string;
  index: number;
  isActive: boolean;
}

interface IVideoRef {
  seek: (el: number)=>void;
}

const VideoPlayer: React.FC<Props> = ({video, index, isActive}) => {
  const videoRef = useRef<IVideoRef>(null);
  const currentTimeStore = useSelector(
    (state: RootState) => state.rootSlice.currentTime,
  );
  const activeVideoIndex = useSelector(
    (state: RootState) => state.rootSlice.videoCurrentIndex,
  );

  const [paused, setPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const handleLoad = (data: OnLoadData) => {
    setDuration(data.duration);
  };

  const handleProgress = (data: OnProgressData) => {
    setCurrentTime(data.currentTime);
    setProgress(data.currentTime / duration);
  };

  const handleEnd = () => {
    setPaused(true);
  };

  const handleMainBtnTouch = () => {
    if (progress >= 1) {
      videoRef?.current?.seek(0);
    }
    setPaused(!paused);
  };

  useEffect(() => {
    if (
      currentTimeStore !== null &&
      currentTimeStore >= 0 &&
      activeVideoIndex === index
    ) {
      videoRef?.current?.seek(currentTimeStore);
    }
  }, [video]);

  const handleProgressPress = (e: { nativeEvent: { locationX: any; }; }) => {
    const position = e.nativeEvent.locationX;
    const progress = (position / 260) * duration;
    videoRef?.current?.seek(progress);
  };

 

  return (
    <View
      style={{
        height: WINDOW_HEIGHT,
        width: WINDOW_WIDTH,
        backgroundColor: 'black',
      }}>
      <VideoPlayerHeader index={index} currentTime={currentTime} />

      <Video
        style={{
          flex: 1,
        }}
        paused={!isActive || paused}
        resizeMode="cover"
        source={{uri: video}}
        ref={videoRef}
        onLoad={handleLoad}
        onProgress={handleProgress}
        onEnd={handleEnd}
        onSeek={data => {
          
        }}
      />
      <VideoPlayerControls
        paused={paused}
        handleMainBtnTouch={handleMainBtnTouch}
        handleProgressPress={handleProgressPress}
        progress={progress}
        duration={duration}
      />
    </View>
  );
};

export default VideoPlayer;
