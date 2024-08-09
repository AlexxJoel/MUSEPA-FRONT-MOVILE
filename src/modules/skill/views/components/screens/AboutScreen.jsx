import React from 'react';
import { StyleSheet, Text, View, ScrollView, Linking, TouchableOpacity } from 'react-native';
import GlobalStyles from '../../../../../../assets/styles/GlobalStyles';

export default function AboutScreen() {
  const handleWebsitePress = () => {
    Linking.openURL('https://www.google.com');
  };

  return (
    <ScrollView style={styles.container}>
      <View >
        <Text style={styles.title}>Acerca de Musepa</Text>
        <Text style={styles.description}>
          Proporcionar información del museo de forma rápida y sencilla.
          Formando parte de un ecosistema completo de aplicación web, móvil y una
          skill de Alexa. Comprometidos con la cultura de Morelos en
          generaciones más tecnológicas.
        </Text>

        <Text style={styles.sectionTitle}>Desarrolladores</Text>
        <View style={styles.developersList}>
          <Text style={styles.developerName}>• Bustos Anna Christina</Text>
          <Text style={styles.developerName}>• Campos Román Cristian Alexis</Text>
          <Text style={styles.developerName}>• Flores Santana Pablo Samuel</Text>
          <Text style={styles.developerName}>• Herrera Hernadez Joel Alejandro</Text>
          <Text style={styles.developerName}>• Morellano Alvarez Alejandro</Text>
        </View>

        <TouchableOpacity style={styles.websiteButton} onPress={handleWebsitePress}>
          <Text style={styles.websiteButtonText}>¡Visita la versión web!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.container,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#dba669',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  developersList: {
    marginBottom: 20,
  },
  developerName: {
    fontSize: 16,
    marginLeft: 20,
  },
  websiteButton: {
    backgroundColor: '#dba669',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  websiteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});