import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {scaleHeight, scaleWidth} from '../../constants/metrics';

import RightArrow from '../../assets/icons/rightArrow.svg';
import {Text} from './ui';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

const ContinueWatching = () => {

  const navigation: NavigationProp<ParamListBase> = useNavigation()

  return (
    <View style={{marginTop: scaleHeight(44)}}>
      <Text color="#FFFFFF" fontSize={20} fontWeight="700">
        Continue Watching
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Episodes')} activeOpacity={0.6}>
        <View style={styles.container}>
          <View style={styles.leftContent}>
            <Image source={require('../../assets/img/smallBookCover.png')} />
            <View>
              <Text color="#EBEDF0" fontWeight="700" fontSize={16}>
                Boss With Benefits
              </Text>
              <Text color="#E1E3E6">Kelly Nite</Text>
            </View>
          </View>

          <RightArrow
            color="#F5F5F5"
            style={{position: 'absolute', right: scaleWidth(24)}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scaleHeight(68),
    backgroundColor: '#3598D0',
    marginTop: scaleHeight(16),
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scaleWidth(6),
    columnGap: scaleWidth(12),
  },
});

export default ContinueWatching;
