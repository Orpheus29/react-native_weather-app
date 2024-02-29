import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import WeatherDisplay from './src/components/WeatherDisplay';
import { fetchWeatherInfo } from './src/helpers/fetchWeatherInfo';
import { buildDate } from './src/helpers/buildDate';

import styles from './styles';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState('C');

  const handleFetch = async () => {
    await fetchWeatherInfo(city, setWeatherInfo);
  };

  const clearInput = () => {
    setCity('');
    setWeatherInfo(null);
  };

  const toggleTemperatureUnit = () => {
    setTemperatureUnit(temperatureUnit === 'C' ? 'F' : 'C');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Simple{'\n'}Weather App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter city name"
          placeholderTextColor="grey"
          value={city}
          onChangeText={setCity}
        />
        {city !== '' && (
          <MaterialIcons
            name="cancel"
            size={24}
            color="grey"
            style={styles.clearIcon}
            onPress={clearInput}
          />
        )}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleFetch}
      >
        <Text style={styles.buttontext}>Get Weather</Text>
      </TouchableOpacity>
      {weatherInfo && (
        <>
          <Text style={styles.location}>{weatherInfo.name}, {weatherInfo.sys.country}</Text>
          <Text style={styles.date}>{buildDate()}</Text>
          <Button title={`Switch to °${temperatureUnit === 'C' ? 'F' : 'C'}`} onPress={toggleTemperatureUnit} />
          <WeatherDisplay weatherInfo={weatherInfo} temperatureUnit={temperatureUnit} />
        </>
      )}
    </View>
  );
};

export default WeatherApp;
