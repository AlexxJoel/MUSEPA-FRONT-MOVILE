import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Loading from '../../shared/Loading';
import { getEventsByDate } from '../../../../controllers/SkillController';

const getCurrentDate = () => {
  return moment().format('YYYY-MM-DD');
};

export default function EventsListScreen() {
  const [events, setEvents] = useState(null);
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [textLoading, setTextLoading] = useState('');
  const [noEventsFound, setNoEventsFound] = useState(false); // Nuevo estado

  const fetchEvents = async () => {
    setShowLoading(true);
    setTextLoading('Cargando eventos...');
    setNoEventsFound(false); // Reiniciar estado al cargar nuevos eventos
    try {
      const response = await getEventsByDate(selectedDate);
      if (response.status === 204) {
        setNoEventsFound(true); // Mostrar mensaje si no hay eventos
      } else {
        const data = response.data.data;
        setEvents(data);
        setNoEventsFound(false); // Ocultar mensaje si hay eventos
      }
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
    fetchEvents();
  }, [selectedDate]);

  const handleSelectedDate = (date) => {
    setSelectedDate(moment(date).format('YYYY-MM-DD'));
    setShowDatePicker(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => {/* Navegación a detalles del evento */ }}>
      <View style={styles.cardContent}>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
          <Text style={styles.cardDate}>
            {moment(item.start_date).format('DD/MM/YYYY')} - {moment(item.end_date).format('DD/MM/YYYY')}
          </Text>
        </View>
        {item.pictures && (
          <Image source={{ uri: item.pictures }} style={styles.cardImage} />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {hasError && (
        <View style={styles.errorContainer}>
          <MaterialIcons name="error-outline" size={50} color="#d9534f" />
          <Text style={styles.errorTitle}>Error</Text>
          <Text style={styles.errorText}>No se pudo recuperar la información de los eventos. Por favor, intente de nuevo más tarde.</Text>
          <TouchableOpacity style={styles.reloadButton} onPress={fetchEvents}>
            <Text style={styles.reloadButtonText}>Reintentar</Text>
          </TouchableOpacity>
        </View>
      )}

      {events && (
        <>
          <FlatList
            data={events}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </>
      )}

      {noEventsFound && ( // Mostrar mensaje si no se encontraron eventos
        <View style={styles.noEventsContainer}>
          <MaterialIcons name="event-busy" size={50} color="#6c757d" />
          <Text style={styles.noEventsTitle}>Sin eventos</Text>
          <Text style={styles.noEventsText}>No se encontraron eventos para esta fecha.</Text>
        </View>
      )}

      <View style={styles.dateSelectorContainer}>
        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => handleSelectedDate(moment(selectedDate).subtract(1, 'day'))}
        >
          <MaterialIcons name="chevron-left" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Text style={styles.dateText}>
            {moment(selectedDate).format('DD/MM/YYYY')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => handleSelectedDate(moment(selectedDate).add(1, 'day'))}
        >
          <MaterialIcons name="chevron-right" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <DateTimePickerModal
        isVisible={showDatePicker}
        mode="date"
        onConfirm={handleSelectedDate}
        onCancel={() => setShowDatePicker(false)}
      />

      <Loading show={showLoading} text={textLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    backgroundColor: '#d8a35f',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    margin: 5,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 10,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    marginBottom: 5,
  },
  cardDate: {
    fontSize: 12,
    color: '#888',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
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
  noEventsContainer: {
    backgroundColor: '#e9ecef',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ced4da',
    shadowColor: '#6c757d',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  noEventsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6c757d',
    marginTop: 10,
  },
  noEventsText: {
    fontSize: 16,
    color: '#495057',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  dateSelectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d8a35f',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  dateButton: {
    padding: 5,
  },
  dateText: {
    fontSize: 18,
    color: '#fff',
    marginHorizontal: 10,
  },
});
