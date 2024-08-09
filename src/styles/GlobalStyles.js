import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    backgroundColor: '#dba669', // Color primario
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Fuente blanca sobre color
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff', // Fuente blanca sobre color
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
    backgroundColor: '#dba669', // Color primario
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
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#dba669', // Color primario
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
    color: '#fff',
  },
  pageSizeInput: {
    textAlign: 'center',
    borderColor: '#ccc',
    color: '#fff',
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
    color: '#fff',
  },
  pageButton: {
    padding: 5,
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
  websiteButton: {
    backgroundColor: '#dba669', // Color primario
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  websiteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  developersList: {
    marginBottom: 20,
  },
  developerName: {
    fontSize: 16,
    marginLeft: 20,
  },
  headerBackground: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  loadingOverlay: {
    height: 160,
    width: 250,
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    color: '#007bff',
    textTransform: 'uppercase',
    marginTop: 10,
    textAlign: 'center'
  },
  // Estilos que no se pudieron unificar
  scheduleItem: { //MuseumDetails
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  day: { //MuseumDetails
    fontSize: 16,
    fontWeight: '600',
  },
  time: { //MuseumDetails
    fontSize: 16,
  },
  tariffItem: { //MuseumDetails
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  tariffType: { //MuseumDetails
    fontSize: 16,
    fontWeight: '600',
  },
  tariffPrice: { //MuseumDetails
    fontSize: 16,
  },
  contactItem: { //MuseumDetails
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  contactLabel: { //MuseumDetails
    fontSize: 16,
    fontWeight: '600',
  },
  contactInfo: { //MuseumDetails
    fontSize: 16,
  },
  logo: { //HomeStack & AboutStack
    width: 90,
    height: 45,
    resizeMode: 'contain',
    marginLeft: -30,
  },
  headerContainer: { //HomeStack & AboutStack
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  museumName: { //MuseumDetails
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  location: { //MuseumDetails
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
});