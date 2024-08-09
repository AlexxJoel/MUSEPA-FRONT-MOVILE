import React from 'react';
import { StyleSheet, Text, View, ScrollView, Linking, TouchableOpacity } from 'react-native';

export default function AboutScreen() {
  const handleWebsitePress = () => {
    Linking.openURL('https://www.google.com'); // Reemplaza con tu URL
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Acerca de Musepa</Text>
        <Text style={styles.description}>
          Proporcionar información del museo de forma rápida y sencilla.
          Formando parte de un ecosistema completo de aplicación web, móvil y una
          skill de Alexa. Comprometidos con la cultura de Morelos en
          generaciones más tecnológicas.
        </Text>

        <Text style={styles.sectionTitle}>Desarrolladores</Text>
        <View style={styles.developersList}>
          <Text style={styles.developerName}>• Juan Pérez</Text>
          <Text style={styles.developerName}>• María González</Text>
          <Text style={styles.developerName}>• Carlos Rodríguez</Text>
          <Text style={styles.developerName}>• Sofía López</Text>
          <Text style={styles.developerName}>• Luis Martínez</Text>
        </View>

        <TouchableOpacity style={styles.websiteButton} onPress={handleWebsitePress}>
          <Text style={styles.websiteButtonText}>Visita nuestro sitio web</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#d8a35f',
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
    backgroundColor: '#d8a35f',
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