import {FlatList} from 'react-native';

import VideoItem from './VideoItem';
import { Text } from './ui';
import { FC } from 'react';

interface IProps {
  title: string;
}

const VideoCarousel:FC<IProps> = ({title}) => {
  const books = [
    {
      name: 'Wolfstate chronicles: Alaska, Texas',
      isComing: false,
    },
    {
      name: 'Beautiful Revenge',
      isComing: true,
    },
    {
      name: 'Sin De Rella',
      isComing: true,
    },
    {
      name: 'Wolfstate chronicles: Alaska, Texas',
      isComing: true,
    },
    {
      name: 'Beautiful Revenge',
      isComing: true,
    },
    {
      name: 'Sin De Rella',
      isComing: true,
    },
  ];

  return (
    <>
      <Text color="#FFFFFF" fontSize={20} fontWeight="700">
        {title}
      </Text>
      <FlatList
        data={books}
        horizontal={true}
        renderItem={({video}) => <VideoItem book={video} />}
        keyExtractor={book => Math.random()}
      />
    </>
  );
};

export default VideoCarousel;
