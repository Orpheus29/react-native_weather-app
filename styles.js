import { StyleSheet } from 'react-native';

import { COLORS, FONTSIZES } from './src/helpers/consts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '20%',
    backgroundColor: COLORS.background,
    paddingHorizontal: '5%',
  },

  header: {
    textAlign: 'center',
    fontSize: FONTSIZES.mainTitle,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginVertical: '6%',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.secondary,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: '7%',
  },

  input: {
    flex: 1,
    padding: '3%',
    color: COLORS.inputText,
  },

  clearIcon: {
    padding: '2%',
  },

  button: {
    borderWidth: .5,
    borderColor: COLORS.buttonPrimary,
    borderRadius: 5,
    padding: '4%',
    backgroundColor: COLORS.buttonSecondary,
    marginBottom: '4%',
  },

  buttontext: {
    color: COLORS.buttonPrimary,
    fontSize: FONTSIZES.primary,
    fontWeight: 'bold',
  },

  location: {
    fontSize: FONTSIZES.secondary,
    fontWeight: 'bold',
    color: COLORS.thirdary,
    marginVertical: '6%',
  },

  date: {
    fontSize: FONTSIZES.primary,
    fontStyle: 'italic',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: '3%',
  },
});

export default styles;
