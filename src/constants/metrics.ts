import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scaleWidth = (size: number) => (width / guidelineBaseWidth) * size;
const scaleHeight = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) => size + (scaleWidth(size) - size) * factor;

export { scaleWidth, scaleHeight, moderateScale };