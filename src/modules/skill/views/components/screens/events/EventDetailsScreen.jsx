import React from 'react';
import { View, Text, Image, ScrollView, } from 'react-native';
import moment from 'moment';

import GlobalStyles from '../../../../../../../assets/styles/GlobalStyles';

export default function EventDetailsScreen({ route }) {
  const { event } = route.params

  return (
    <ScrollView style={GlobalStyles.detailsContainer}>
      <View style={GlobalStyles.detailsHeaderContainer}>
        <Text style={GlobalStyles.detailsTitle}>{event.name}</Text>
        <Text style={GlobalStyles.detailsSubtitle}>{event.category}</Text>
      </View>

      <View style={GlobalStyles.detailsInfoContainer}>
        <Text style={GlobalStyles.detailsLabel}>Descripción:</Text>
        <Text style={GlobalStyles.detailsDescription}>{event.description}</Text>
        <Text style={GlobalStyles.detailsLabel}>Fecha de inicio:</Text>
        <Text style={GlobalStyles.detailsInfo}>{moment(event.start_date).format('DD/MM/YYYY')}</Text>
        <Text style={GlobalStyles.detailsLabel}>Fecha de fin:</Text>
        <Text style={GlobalStyles.detailsInfo}>{moment(event.end_date).format('DD/MM/YYYY')}</Text>
      </View>

      <View style={GlobalStyles.detailsImagesContainer}>
        <Text style={GlobalStyles.detailsLabel}>Galería de Imágenes:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {event.pictures && event.pictures.length > 0 ? (
            event.pictures.map((picture, index) => (
              <Image
                key={index}
                source={{ uri: picture }}
                style={GlobalStyles.detailsImage}
              />
            ))
          ) : (
            <Text style={GlobalStyles.detailsNoImagesText}>No hay imágenes disponibles.</Text>
          )}
        </ScrollView>
      </View>

    </ScrollView>
  );
}
