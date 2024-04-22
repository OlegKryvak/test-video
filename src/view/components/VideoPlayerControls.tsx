import * as Progress from 'react-native-progress';

import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {secondsToTime} from '../../utils';
import {scaleHeight, scaleWidth} from '../../constants/metrics';

import LinearGradient from 'react-native-linear-gradient';
import Play from '../../assets/icons/play.svg';
import Stop from '../../assets/icons/stop.svg';
import {Text} from './ui';

const linearColors = {
  activeColorsBottom: [
    'rgba(0, 0, 0, 0)',
    'rgba(0, 0, 0, 0.1)',
    'rgba(0, 0, 0, 0.3)',
    'rgba(0, 0, 0, 0.5)',
    'rgba(0, 0, 0, 0.8)',
    'rgba(0, 0, 0, 1)',
  ],
};

interface Props {
  paused: boolean;
  handleMainBtnTouch: () => void;
  handleProgressPress: (e: any) => void;
  progress: number;
  duration: number;
}

const VideoPlayerControls: React.FC<Props> = ({
  paused,
  handleMainBtnTouch,
  handleProgressPress,
  progress,
  duration,
}) => {
  return (
    <>
      <View style={styles.controls}>
        <View style={{width: scaleWidth(20)}}>
          {!paused && (
            <TouchableWithoutFeedback onPress={handleMainBtnTouch}>
              <Play color="#FFFFFF" />
            </TouchableWithoutFeedback>
          )}
          {paused && (
            <TouchableWithoutFeedback onPress={handleMainBtnTouch}>
              <Stop
                color="#FFFFFF"
                width={scaleWidth(18)}
                height={scaleHeight(18)}
              />
            </TouchableWithoutFeedback>
          )}
        </View>
        <TouchableWithoutFeedback onPress={handleProgressPress}>
          <View>
            <Progress.Bar
              progress={progress}
              color="#FFFFFF"
              unfilledColor="rgba(255,255,255,.3)"
              width={260}
              height={4}
              borderColor="transparent"
              borderWidth={0}
            />
          </View>
        </TouchableWithoutFeedback>
        <Text fontSize={11} color="#FFFFFF">
          {secondsToTime(Math.floor(progress * duration))}
        </Text>
      </View>

      <View style={styles.bottomShadow}>
        <LinearGradient
          style={{position: 'absolute', width: '100%', height: '100%'}}
          colors={linearColors.activeColorsBottom}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  controls: {
    position: 'absolute',
    zIndex: 1,
    bottom: 60,
    paddingHorizontal: 21,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  bottomShadow: {
    position: 'absolute',
    backgroundColor: 'transparent',
    bottom: 0,
    width: '100%',
    height: 70,
  },
});

export default VideoPlayerControls;
