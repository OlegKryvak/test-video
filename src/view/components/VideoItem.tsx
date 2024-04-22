import {Image, StyleSheet, View} from 'react-native';
import {scaleHeight, scaleWidth} from '../../constants/metrics';

import {Text} from './ui';

interface Props {
  book: {
    name: string;
    isComing: boolean;
  };
}

const VideoItem: React.FC<Props> = ({book}) => {
  return (
    <View style={styles.container}>
      <Image
        width={scaleWidth(120)}
        height={scaleHeight(150)}
        style={{borderRadius: 8, marginBottom: scaleHeight(8)}}
        source={require('../../assets/img/bookCover.png')}
        blurRadius={book?.isComing ? 10 : 0}
      />
      {book?.isComing && (
        <Text fontSize={11} color='#00BFE5' fontWeight='800'>COMING JULY 2</Text>
      )}
      <Text
        lineHeight={17}
        fontWeight="600"
        width={scaleWidth(120)}
        color="#EBEDF0">
        {book?.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginRight: 10,
  }
})

export default VideoItem;
