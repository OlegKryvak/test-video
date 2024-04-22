import {Dimensions} from 'react-native';

export const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} =
  Dimensions.get('window');

export const secondsToTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let timeString = '';

  if (hours > 0) {
    timeString += hours + ':';
  }

  if (minutes < 10) {
    timeString += '0' + minutes;
  } else {
    timeString += minutes;
  }

  timeString +=
    ':' + (remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds);

  return timeString;
};
