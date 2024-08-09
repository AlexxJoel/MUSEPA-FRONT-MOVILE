import { Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

import GlobalStyles from '../../../../../../../assets/styles/GlobalStyles';

export default function WorkDetailsScreen({ route }) {
  const { work } = route.params;

  return (
    <ScrollView contentContainerStyle={GlobalStyles.detailsContainer}>
      <View style={GlobalStyles.detailsHeaderContainer}>
        <Text style={GlobalStyles.detailsTitle}>{work.title}</Text>
        <Text style={GlobalStyles.detailsSubtitle}>{work.artists.join(', ')}</Text>
      </View>

      <View style={GlobalStyles.detailsInfoContainer}>
        <Text style={GlobalStyles.detailsLabel}>Descripción:</Text>
        <Text style={GlobalStyles.detailsDescription}>{work.description}</Text>
        <Text style={GlobalStyles.detailsLabel}>Fecha de Publicación:</Text>
        <Text style={GlobalStyles.detailsInfo}>{work.creation_date}</Text>
        <Text style={GlobalStyles.detailsLabel}>Técnica:</Text>
        <Text style={GlobalStyles.detailsInfo}>{work.technique}</Text>
      </View>

      <View style={GlobalStyles.detailsImagesContainer}>
        <Text style={GlobalStyles.detailsLabel}>Galería de Imágenes:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {work.pictures && work.pictures.length > 0 ? (
            work.pictures.map((picture, index) => (
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