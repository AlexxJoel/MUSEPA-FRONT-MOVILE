import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { MaterialIcons } from '@expo/vector-icons';
import Loading from '../../shared/Loading';
import { getWorksList } from '../../../../controllers/SkillController';
import GlobalStyles from '../../../../../../../assets/styles/GlobalStyles';

export default function WorksListScreen({ navigation }) {
  const [works, setWorks] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [hasError, setHasError] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [textLoading, setTextLoading] = useState('');
  const [noWorksFound, setNoWorksFound] = useState(false);

  const fetchWorks = async () => {
    setShowLoading(true);
    setTextLoading('Cargando obras...');
    setNoWorksFound(false);
    try {
      const response = await getWorksList(page - 1, pageSize);
      if (response.status === 204) {
        setWorks([]);
        setNoWorksFound(true);
      } else {
        const data = response.data.data;
        setWorks(data);
        setTotalPages(response.data.totalPages);
        setNoWorksFound(false);
      }
      setHasError(false);
    } catch (error) {
      console.error(error);
      setTotalPages(1)
      setWorks([]);
      setNoWorksFound(false);
      setHasError(true);
    } finally {
      setShowLoading(false);
      setTextLoading('');
    }
  };

  useEffect(() => {
    fetchWorks();
  }, [page, pageSize]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setPage(1); // Reset to first page when page size changes
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={GlobalStyles.card} onPress={() => { navigation.navigate("workDetailsScreen", {work: item}) }}>
      <View style={GlobalStyles.cardContent}>
        <View style={GlobalStyles.cardTextContainer}>
          <Text style={GlobalStyles.cardTitle}>{item.title}</Text>
          <Text style={GlobalStyles.cardDescription}>{item.description}</Text>
          <Text style={GlobalStyles.cardExtraDescription}>
            {moment(item.creation_date).format('DD/MM/YYYY')}
          </Text>
          <Text style={GlobalStyles.cardExtraDescription}>Técnica: {item.technique}</Text>
          <Text style={GlobalStyles.cardExtraDescription}>Artistas: {item.artists.join(', ')}</Text>
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
          <Text style={GlobalStyles.errorText}>No se pudo recuperar la información de las obras. Por favor, intente de nuevo más tarde.</Text>
          <TouchableOpacity style={GlobalStyles.reloadButton} onPress={fetchWorks}>
            <Text style={GlobalStyles.reloadButtonText}>Reintentar</Text>
          </TouchableOpacity>
        </View>
      )}

      {noWorksFound && (
        <View style={GlobalStyles.noItemsContainer}>
          <MaterialIcons name="cancel" size={50} color="#6c757d" />
          <Text style={GlobalStyles.noItemsTitle}>Sin obras</Text>
          <Text style={GlobalStyles.noItemsText}>No se encontraron obras en esta consulta.</Text>
        </View>
      )}

      {works && (
        <FlatList
          data={works}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}

      <View style={styles.paginationContainer}>
        <View style={styles.pageSizeContainer}>
          <Text style={styles.pageSizeLabel}>Mostrar:</Text>
          <TextInput
            style={styles.pageSizeInput}
            keyboardType="numeric"
            value={pageSize.toString()}
            onChangeText={(text) => handlePageSizeChange(Number(text))}
            placeholder="10"
          />
          <Text style={styles.pageSizeLabel}>por página</Text>
        </View>

        <View style={styles.pageNavigation}>
          <TouchableOpacity
            style={styles.pageButton}
            onPress={() => handlePageChange(page - 1)}
            disabled={page <= 1}
          >
            <MaterialIcons name="chevron-left" size={24} color={page <= 1 ? '#ccc' : '#fff'} />
          </TouchableOpacity>

          <Text style={styles.pageInfo}>
            Página {page} de {totalPages}
          </Text>

          <TouchableOpacity
            style={styles.pageButton}
            onPress={() => handlePageChange(page + 1)}
            disabled={page >= totalPages}
          >
            <MaterialIcons name="chevron-right" size={24} color={page >= totalPages ? '#ccc' : '#fff'} />
          </TouchableOpacity>
        </View>
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
  paginationContainer: {
    ...GlobalStyles.inputContainer,
    justifyContent: 'space-between',
  },
  pageSizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pageSizeLabel: {
    marginRight: 5,
    color: "#fff"
  },
  pageSizeInput: {
    textAlign: 'center',
    borderColor: '#ccc',
    color: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    width: 50,
    marginRight: 5,
  },
  pageNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pageInfo: {
    marginHorizontal: 10,
    color: "#fff"
  },
  pageButton: {
    padding: 5,
  },
});
