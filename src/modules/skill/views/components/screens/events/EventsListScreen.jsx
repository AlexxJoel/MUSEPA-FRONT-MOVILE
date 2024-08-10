import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Platform } from 'react-native';
import moment from 'moment';
import { MaterialIcons } from '@expo/vector-icons';
import GlobalStyles from '../../../../../../../assets/styles/GlobalStyles';
import Loading from '../../shared/Loading';
import { getEventsByDate } from '../../../../controllers/SkillController';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const getCurrentDate = () => {
  return moment().format('YYYY-MM-DD');
};

export default function EventsListScreen({ navigation }) {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const [hasError, setHasError] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [textLoading, setTextLoading] = useState('');
  const [noEventsFound, setNoEventsFound] = useState(false);

  const fetchEvents = async () => {
    setShowLoading(true);
    setTextLoading('Cargando eventos...');
    setNoEventsFound(false);
    try {
      const response = await getEventsByDate(selectedDate);
      if (response.status === 204) {
        setEvents([]);
        setNoEventsFound(true);
      } else {
        const data = response.data.data;
        setEvents(data);
        setNoEventsFound(false);
      }
      setHasError(false);
    } catch (error) {
      console.error(error);
      setEvents([]);
      setNoEventsFound(false);
      setHasError(true);
    } finally {
      setShowLoading(false);
      setTextLoading('');
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [selectedDate]);

  const handleSelectedDate = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(moment(date).format('YYYY-MM-DD'));
    }
  };

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: new Date(selectedDate),
      mode: 'date',
      onChange: handleSelectedDate,
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={GlobalStyles.card} onPress={() => { navigation.navigate("eventDetailsScreen", { event: item }) }}>
      <View style={GlobalStyles.cardContent}>
        <View style={GlobalStyles.cardTextContainer}>
          <Text style={GlobalStyles.cardTitle}>{item.name}</Text>
          <Text style={GlobalStyles.cardDescription}>{item.description}</Text>
          <Text style={GlobalStyles.cardExtraDescription}>
            {moment(item.start_date).format('DD/MM/YYYY')} - {moment(item.end_date).format('DD/MM/YYYY')}
          </Text>
        </View>
        {item.pictures && (
          <Image source={{ uri: item.pictures[0] }} style={GlobalStyles.cardImage} />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {hasError && (
        <View style={GlobalStyles.errorContainer}>
          <MaterialIcons name="error-outline" size={50} color="#d9534f" />
          <Text style={GlobalStyles.errorTitle}>Error</Text>
          <Text style={GlobalStyles.errorText}>No se pudo recuperar la información de los eventos. Por favor, intente de nuevo más tarde.</Text>
          <TouchableOpacity style={GlobalStyles.reloadButton} onPress={fetchEvents}>
            <Text style={GlobalStyles.reloadButtonText}>Reintentar</Text>
          </TouchableOpacity>
        </View>
      )}

      {noEventsFound && (
        <View style={GlobalStyles.noItemsContainer}>
          <MaterialIcons name="event-busy" size={50} color="#6c757d" />
          <Text style={GlobalStyles.noItemsTitle}>Sin eventos</Text>
          <Text style={GlobalStyles.noItemsText}>No se encontraron eventos para esta fecha.</Text>
        </View>
      )}

      {events && (
        <FlatList
          data={events}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}

      <View style={styles.dateSelectorContainer}>
        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setSelectedDate(moment(selectedDate).subtract(1, 'day').format('YYYY-MM-DD'))}
        >
          <MaterialIcons name="chevron-left" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={showDatePicker}>
          <Text style={styles.dateText}>
            {moment(selectedDate).format('DD/MM/YYYY')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setSelectedDate(moment(selectedDate).add(1, 'day').format('YYYY-MM-DD'))}
        >
          <MaterialIcons name="chevron-right" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <Loading show={showLoading} text={textLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.container,
    padding: 20,
  },

  // Consult
  dateSelectorContainer: {
    ...GlobalStyles.inputContainer,
    justifyContent: 'center',
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
