// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = () => {
      setData([
        { id: 1, title: 'Card 1', description: 'This is the first card' },
        { id: 2, title: 'Card 2', description: 'This is the second card' },
        { id: 3, title: 'Card 3', description: 'This is the third card' },
      ]);
    };

    fetchData();
  }, []); // ComponentDidMount behavior

  return (
    <ScrollView style={styles.container}>
      <Header />
      {data.map(item => (
        <Card key={item.id} title={item.title} description={item.description} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
});

export default HomeScreen;
