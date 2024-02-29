import { StyleSheet } from 'react-native';
import { COLORS, FONTSIZES } from '../helpers/consts';

const weatherDisplayStyles = StyleSheet.create({
weatherContainer: {
  borderWidth: 1,
    borderColor: COLORS.thirdary,
      borderRadius: 5,
        padding: '3%',
          marginVertical: '3%',
  },

weatherText: {
  fontSize: FONTSIZES.primary,
    lineHeight: 25,
  color: COLORS.secondary,
  },
});

export default weatherDisplayStyles;
