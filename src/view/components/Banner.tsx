import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { saveCurrentTime, saveVideoIndex } from '../../store/slices/rootSlice';
import {scaleHeight, scaleWidth} from '../../constants/metrics';

import {Text} from './ui';
import { useDispatch } from 'react-redux';
import {useNavigation, ParamListBase,  NavigationProp} from '@react-navigation/native';

interface Props {
  video: string;
}

const Banner: React.FC<Props> = ({video}) => {
  const navigation: NavigationProp<ParamListBase>  = useNavigation();
  const dispatch = useDispatch()

  const handleBannerClick = () => {
    dispatch(saveVideoIndex(null))
    dispatch(saveCurrentTime(null))
    navigation.navigate('Episodes')
  }

  return (
    <TouchableOpacity
      onPress={handleBannerClick}
      style={styles.bgContainer}
      activeOpacity={0.8}>
      <ImageBackground
        style={styles.imageBg}
        imageStyle={{borderRadius: 12}}
        source={require('../../assets/img/banner.png')}>
        <View style={styles.container}>
          <Text color="#F5F5F5" fontSize={11}>
            ROMANCE
          </Text>
        </View>
        <View
          style={{
            marginBottom: scaleHeight(16),
            marginLeft: scaleWidth(16),
          }}>
          <Text color="#F2F3F5" fontSize={24} fontWeight="700">
            Lethal Limits
          </Text>
          <Text color="#C4C8CC" fontSize={13}>
            Dustin's Gamble
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bgContainer:{
    marginRight: 10,
  },
  imageBg: {
    width: scaleWidth(320),
    height: scaleHeight(216),
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: '#0F0F0F',
    marginTop: scaleHeight(8),
    marginLeft: scaleWidth(16),
    alignSelf: 'flex-start',
    paddingHorizontal: scaleWidth(6),
    paddingVertical: scaleHeight(1.5),
    borderRadius: 4,
  },
});

export default Banner;
