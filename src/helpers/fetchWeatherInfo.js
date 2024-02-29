import { Alert, Keyboard } from 'react-native';
import { API_ID, BASE_URL } from './consts';

export const fetchWeatherInfo = async (city, setWeatherInfo) => {
  try {
    const response = await fetch(
      `${BASE_URL}weather/?q=${city}&appid=${API_ID}&units=metric`
    );
    const data = await response.json();
    if (data.cod === 200) {
      setWeatherInfo(data);
    } else {
      Alert.alert('Error', 'City not found!');
    }
  } catch (error) {
    console.error('Error fetching weather info:', error);
    Alert.alert('Error', 'Something went wrong!');
  } finally {
    Keyboard.dismiss();
  }
};
