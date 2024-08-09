import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { MaterialIcons } from '@expo/vector-icons';
import Loading from '../../shared/Loading';
import { getWorksList } from '../../../../controllers/SkillController';

export default function WorksListScreen() {
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
        setNoWorksFound(true);
        setWorks(null);
      } else {
        const data = response.data.data;
        setWorks(data);
        setTotalPages(response.data.totalPages);
        setNoWorksFound(false);
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
    <TouchableOpacity style={styles.card} onPress={() => {/* Navegación a detalles de la obra */ }}>
      <View style={styles.cardContent}>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
          <Text style={styles.cardDate}>
            {moment(item.creation_date).format('DD/MM/YYYY')}
          </Text>
          <Text style={styles.cardTechnique}>Técnica: {item.technique}</Text>
          <Text style={styles.cardArtists}>Artistas: {item.artists.join(', ')}</Text>
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
          <Text style={styles.errorText}>No se pudo recuperar la información de las obras. Por favor, intente de nuevo más tarde.</Text>
          <TouchableOpacity style={styles.reloadButton} onPress={fetchWorks}>
            <Text style={styles.reloadButtonText}>Reintentar</Text>
          </TouchableOpacity>
        </View>
      )}

      {works && (
        <FlatList
          data={works}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}

      {noWorksFound && (
        <View style={styles.noWorksContainer}>
          <MaterialIcons name="cancel" size={50} color="#6c757d" />
          <Text style={styles.noWorksTitle}>Sin obras</Text>
          <Text style={styles.noWorksText}>No se encontraron obras en esta consulta.</Text>
        </View>
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
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
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
  cardTechnique: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  cardArtists: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
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
  noWorksContainer: {
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
  noWorksTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6c757d',
    marginTop: 10,
  },
  noWorksText: {
    fontSize: 16,
    color: '#495057',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#d8a35f',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
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
