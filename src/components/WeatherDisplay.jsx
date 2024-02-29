import React from 'react';
import { View, Text } from 'react-native';

import weatherDisplayStyles from './WeatherDisplay.styles';

const WeatherDisplay = ({ weatherInfo, temperatureUnit }) => {
  return (
    <View style={weatherDisplayStyles.weatherContainer}>
      <Text style={weatherDisplayStyles.weatherText}>
        Temperature:{' '}
        {temperatureUnit === 'C'
          ? Math.round(weatherInfo.main.temp)
          : Math.round((weatherInfo.main.temp * 9) / 5 + 32)}
        °{temperatureUnit}
      </Text>
      <Text style={weatherDisplayStyles.weatherText}>
        Weather: {weatherInfo.weather[0].main}
      </Text>
      <Text style={weatherDisplayStyles.weatherText}>
        Pressure: {Math.round(weatherInfo.main.pressure)} hPa
      </Text>
      <Text style={weatherDisplayStyles.weatherText}>
        Humidity: {weatherInfo.main.humidity}%
      </Text>
      <Text style={weatherDisplayStyles.weatherText}>
        Wind speed: {Math.round(weatherInfo.wind.speed)} m/s
      </Text>
    </View>
  );
};

export default WeatherDisplay;
