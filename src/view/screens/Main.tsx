import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {scaleHeight, scaleWidth} from '../../constants/metrics';

import BannerCarousel from '../components/BannerCarousel';
import VideoCarousel from '../components/VideoCarousel';
import ContinueWatching from '../components/ContinueWatching';
import {RootState} from '../../store';
import Search from '../../assets/icons/search.svg';
import {Text} from '../components/ui';
import {useSelector} from 'react-redux';

const MainScreen = () => {
  const currentVideoIndex = useSelector(
    (state: RootState) => state.rootSlice.videoCurrentIndex,
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text lineHeight={24} fontWeight="700" fontSize={20} color="#F5F5F5">
            Home
          </Text>
          <TouchableOpacity>
            <Search
              width={scaleHeight(24)}
              height={scaleHeight(24)}
              color={'#F5F5F5'}
            />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BannerCarousel />
          {currentVideoIndex !== null && currentVideoIndex >= 0 ? <ContinueWatching /> : null}

          <View
            style={{
              marginTop: scaleHeight(40),
              marginBottom: scaleHeight(36),
              rowGap: scaleHeight(16),
            }}>
            
            <VideoCarousel title='Trending now'/>
          </View>
          <View style={{rowGap: scaleHeight(16)}}>
            <VideoCarousel title='Top Romance'/>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  content: {
    flex: 1,
    paddingHorizontal: scaleWidth(16),
    backgroundColor: '#0F0F0F',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scaleHeight(24),
  },
});

export default MainScreen;
