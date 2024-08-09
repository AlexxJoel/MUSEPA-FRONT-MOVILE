import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { getMuseumDetails } from '../../../../controllers/SkillController';
import Loading from '../../shared/Loading';
import { MaterialIcons } from '@expo/vector-icons';

export default function MuseumDetailsScreen() {
  const [museumDetails, setMuseumDetails] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const [textLoading, setTextLoading] = useState('');
  const [hasError, setHasError] = useState(false);

  const fetchMuseumDetails = async () => {
    setShowLoading(true);
    setTextLoading('Cargando información del museo...');
    try {
      const response = await getMuseumDetails();
      const data = response.data.data;
      setMuseumDetails({
        id: data.id,
        name: data.name,
        location: data.location,
        tariffs: JSON.parse(data.tariffs),
        schedules: JSON.parse(data.schedules),
        contact_number: data.contact_number,
        contact_email: data.contact_email,
        pictures: data.pictures,
      });
      setHasError(false);
    } catch (error) {
      console.error(error);
      setHasError(true);
    } finally {
      setShowLoading(false);
      setTextLoading('');
    }
  };

  useEffect(() => {
    fetchMuseumDetails();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {hasError && (
        <View style={styles.errorContainer}>
          <MaterialIcons name="error-outline" size={50} color="#d9534f" />
          <Text style={styles.errorTitle}>Error</Text>
          <Text style={styles.errorText}>No se pudo recuperar la información del museo. Por favor, intente de nuevo más tarde.</Text>
          <TouchableOpacity style={styles.reloadButton} onPress={fetchMuseumDetails}>
            <Text style={styles.reloadButtonText}>Reintentar</Text>
          </TouchableOpacity>
        </View>
      )}

      {museumDetails && (
        <>
          <View style={styles.header}>
            <Text style={styles.museumName}>{museumDetails.name}</Text>
            <Text style={styles.location}>{museumDetails.location}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Horarios</Text>
            {Object.entries(museumDetails.schedules).map(([day, time]) => (
              <View key={day} style={styles.scheduleItem}>
                <Text style={styles.day}>{day}:</Text>
                <Text style={styles.time}>{time}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tarifas</Text>
            {Object.entries(museumDetails.tariffs).map(([type, price]) => (
              <View key={type} style={styles.tariffItem}>
                <Text style={styles.tariffType}>{type}:</Text>
                <Text style={styles.tariffPrice}>${price} MXN</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contacto</Text>
            <View style={styles.contactItem}>
              <Text style={styles.contactLabel}>Teléfono:</Text>
              <Text style={styles.contactInfo}>{museumDetails.contact_number}</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactLabel}>Email:</Text>
              <Text style={styles.contactInfo}>{museumDetails.contact_email}</Text>
            </View>
          </View>
        </>
      )}

      <Loading show={showLoading} text={textLoading} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  header: {
    backgroundColor: '#d8a35f',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  museumName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  location: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  day: {
    fontSize: 16,
    fontWeight: '600',
  },
  time: {
    fontSize: 16,
  },
  tariffItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  tariffType: {
    fontSize: 16,
    fontWeight: '600',
  },
  tariffPrice: {
    fontSize: 16,
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  contactInfo: {
    fontSize: 16,
  },
  errorContainer: {
    backgroundColor: '#f8d7da',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d9534f',
    shadowColor: '#d9534f',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d9534f',
    marginTop: 10,
  },
  errorText: {
    fontSize: 16,
    color: '#721c24',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  reloadButton: {
    backgroundColor: '#d9534f',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  reloadButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
