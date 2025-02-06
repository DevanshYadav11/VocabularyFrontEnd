import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function App() {
  const [username, setUsername] = useState('User'); // Placeholder for username
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <Text style={styles.welcomeText}>Welcome, {username}</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Menu</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Buttons Section */}
      <View style={styles.buttonsContainerVertical}>
        <TouchableOpacity style={styles.buttonLarge}>
          <Text style={styles.buttonText}>QUIZ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLarge}>
          <Text style={styles.buttonText}>Related Words</Text>
        </TouchableOpacity>
      </View>

      {/* Flash Cards */}
      <ScrollView horizontal style={styles.flashCardsContainer}>
        {[...Array(5)].map((_, index) => (
          <View key={index} style={styles.flashCard}>
            <Text style={styles.flashCardText}>Card {index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6', // Light blue background
    padding: wp('5%'),
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('3%'),
    padding: wp('3%'),
    borderRadius: wp('2%'),
    backgroundColor: '#007BFF',
  },
  welcomeText: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#fff',
  },
  menuButton: {
    backgroundColor: '#0056b3',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('5%'),
    borderRadius: wp('2%'),
  },
  menuButtonText: {
    color: '#fff',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  searchBar: {
    height: hp('6%'),
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: wp('2%'),
    paddingHorizontal: wp('3%'),
    marginBottom: hp('3%'),
    backgroundColor: '#fff',
    fontSize: wp('4%'),
  },
  flashCardsContainer: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    paddingVertical: hp('2%'),
  },
  flashCard: {
    width: wp('30%'),
    height: hp('20%'),
    backgroundColor: '#fff',
    borderRadius: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('2%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  flashCardText: {
    fontSize: wp('4.5%'),
    color: '#333',
    fontWeight: 'bold',
  },
  buttonsContainerVertical: {
    marginVertical: hp('3%'),
    alignItems: 'center',
  },
  buttonLarge: {
    backgroundColor: '#FF5722',
    padding: hp('2.5%'),
    borderRadius: wp('3%'),
    alignItems: 'center',
    width: wp('90%'),
    marginBottom: hp('2%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: wp('5.5%'),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
