import React, {useState} from 'react';
import {
    Button
  } from 'react-native';

const Home = ({navigation}) => {

    return (
        <Button
        onPress={() =>
            navigation.navigate('Produtos')
          }
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      );
}

export default Home;