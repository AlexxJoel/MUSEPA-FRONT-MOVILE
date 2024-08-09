import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

// Importa las imágenes locales
import homeImage from '../../../../../../assets/images/home.jpg';
import museumImage from '../../../../../../assets/images/museum.jpg';
import worksImage from '../../../../../../assets/images/works.jpg';
import eventsImage from '../../../../../../assets/images/events.jpg';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={homeImage} style={styles.headerBackground} imageStyle={{ opacity: 0.7 }}>
        <Text style={styles.title}>Bienvenido a Museepa</Text>
        <Text style={styles.subtitle}>“La puerta de entrada al mundo del arte y la cultura”</Text>
      </ImageBackground>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('museumStack')}
      >
        <ImageBackground
          source={museumImage}
          style={styles.cardImage}
          imageStyle={{ borderRadius: 10 }}
        >
          <Text style={styles.cardText}>Información del Museo</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('workStack')}
      >
        <ImageBackground
          source={worksImage}
          style={styles.cardImage}
          imageStyle={{ borderRadius: 10 }}
        >
          <Text style={styles.cardText}>Información de Obras</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('eventStack')}
      >
        <ImageBackground
          source={eventsImage}
          style={styles.cardImage}
          imageStyle={{ borderRadius: 10 }}
        >
          <Text style={styles.cardText}>Información de Eventos</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBackground: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: "#fff"
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    width: "80%",
    marginBottom: 20,
    color: "#fff",
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  cardImage: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});