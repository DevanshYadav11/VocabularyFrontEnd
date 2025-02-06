import React, { useState, useEffect } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Animated
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  const username = "John Doe";
  const [searchQuery, setSearchQuery] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const flashcards = [
    "Word 1", "Word 2", "Word 3", "Word 4", "Word 5", 
    "Word 6", "Word 7", "Word 8", "Word 9", "Word 10"
  ];

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: -flashcards.length * 100,
          duration: flashcards.length * 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        })
      ])
    ).start();
  }, []);

  return (
    <LinearGradient colors={["#1A1A2E", "#16213E", "#0F3460"]} style={styles.container}> 
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.userLogo} />
        </TouchableOpacity>
        <Text style={styles.welcomeText}>Welcome, {username}</Text>
      </View>
      
      {showMenu && (
        <View style={styles.menuBox}>
          <TouchableOpacity style={styles.menuItem}><Text style={styles.menuText}>View Profile</Text></TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}><Text style={styles.menuText}>Forgot Password</Text></TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}><Text style={styles.menuText}>Settings</Text></TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
        </View>
      )}
      
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#E94560" style={styles.searchIcon} />
        <TextInput 
          style={styles.searchInput}
          placeholder="Search words..."
          placeholderTextColor="#EEEEEE"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      
      <Text style={styles.sectionTitle}>Flashcards</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.flashcardsContainer}>
        <Animated.View style={{ flexDirection: 'row', transform: [{ translateX: animation }] }}>
          {flashcards.concat(flashcards).map((item, index) => (
            <View key={index} style={styles.flashcard}>
              <Text style={styles.flashcardText}>{item}</Text>
            </View>
          ))}
        </Animated.View>
      </ScrollView>
      
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Suggested Words</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Take a Quiz</Text>
      </TouchableOpacity>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Powered by AI Vocabulary</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuBox: {
    backgroundColor: '#222',
    padding: 10,
    borderRadius: 8,
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 10,
  },
  menuItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  menuText: {
    color: '#FFF',
  },
  sectionTitle: {
    marginTop: 20,
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  flashcardsContainer: {
    marginBottom: 20,
  },
  flashcard: {
    flex: 1,
    width: 150,
    height: 150,
    backgroundColor: '#E94560',
    padding: 30,
    borderRadius: 15,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  flashcardText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#f8460f',
    padding: 15,
    height: 200,
    width: '100%',
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#FFFFFF',
    
    
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#EEEEEE',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#16213E',
    padding: 12,
    borderRadius: 20,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
  },
});

export default HomeScreen;
