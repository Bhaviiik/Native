import { Dimensions, PixelRatio } from 'react-native';

export const byHeight = (value) => {
   const windowHeight = Dimensions.get('window').height;
   return value * (windowHeight / 100);
};

export const byWidth = (value) => {
   const windowWidth = Dimensions.get('window').width;
   return value * (windowWidth / 100);
};

export const byFont = (value) => {
   return PixelRatio.getPixelSizeForLayoutSize(value);
};
