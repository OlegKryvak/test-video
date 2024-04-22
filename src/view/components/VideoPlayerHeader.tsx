import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';

import Cross from '../../assets/icons/cross.svg';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from './ui';
import {useNavigation} from '@react-navigation/native';
import {saveCurrentTime, saveVideoIndex} from '../../store/slices/rootSlice';

const linearColors = {
  activeColorsTop: [
    'rgba(0, 0, 0, 1)',
    'rgba(0, 0, 0, 0.8)',
    'rgba(0, 0, 0, 0.5)',
    'rgba(0, 0, 0, 0.3)',
    'rgba(0, 0, 0, 0.1)',
    'rgba(0, 0, 0, 0)',
  ],
};

interface Props {
  currentTime: number;
  index: number;
}

const VideoPlayerHeader: React.FC<Props> = ({currentTime, index}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(saveCurrentTime(currentTime));
    dispatch(saveVideoIndex(index));
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.topShadow}>
        <LinearGradient
          style={{position: 'absolute', width: '100%', height: '100%'}}
          colors={linearColors.activeColorsTop}
        />
      </View>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={handleGoBack}
          style={{position: 'absolute', left: 16}}>
          <Cross color="#FFFFFF" />
        </TouchableOpacity>
        <Text fontWeight="700" color="#F5F5F5" fontSize={20}>
          Episode {index + 1}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topShadow: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    width: '100%',
    height: 80,
    zIndex: 1,
  },
  header: {
    position: 'absolute',
    zIndex: 5,
    top: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default VideoPlayerHeader;
