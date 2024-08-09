import { StyleSheet } from 'react-native';
import AtomicStyles, { Colors, Typography, Spacing, Borders, Shadows } from './AtomicStyles';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    ...Spacing.large,
  },
  header: {
    ...AtomicStyles.headerStyle,
  },
  title: {
    ...Typography.title,
  },
  subtitle: {
    ...Typography.subtitle,
  },
  card: {
    ...AtomicStyles.roundedContainer,
    marginBottom: Spacing.small.margin,
  },
  cardContent: {
    flexDirection: 'row',
    ...Spacing.medium,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    ...Typography.cardTitle,
  },
  cardDescription: {
    ...Typography.cardDescription,
  },
  cardDate: {
    ...Typography.smallText,
  },
  cardImage: {
    width: 80,
    height: 80,
    ...Borders.rounded,
  },
  errorContainer: {
    ...AtomicStyles.errorContainer,
  },
  errorTitle: {
    ...Typography.title,
    color: Colors.errorBorder,
    marginTop: Spacing.small.margin,
  },
  errorText: {
    ...Typography.subtitle,
    color: Colors.errorText,
    marginTop: Spacing.small.margin,
    marginBottom: Spacing.large.margin,
  },
  reloadButton: {
    ...AtomicStyles.primaryBackground,
    ...Borders.rounded,
    paddingVertical: Spacing.small.padding,
    paddingHorizontal: Spacing.medium.padding,
    alignItems: 'center',
  },
  reloadButtonText: {
    ...Typography.subtitle,
    color: Colors.white,
    fontWeight: 'bold',
  },
  noEventsContainer: {
    backgroundColor: Colors.errorBackground,
    ...Borders.rounded,
    ...Spacing.large,
    alignItems: 'center',
    ...Borders.bordered,
    ...Shadows.shadowMedium,
  },
  noEventsTitle: {
    ...Typography.title,
    color: Colors.errorText,
    marginTop: Spacing.small.margin,
  },
  noEventsText: {
    ...Typography.subtitle,
    color: '#495057',
  },
  dateSelectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...AtomicStyles.primaryBackground,
    ...Borders.rounded,
    ...Spacing.medium,
    marginTop: Spacing.large.margin,
  },
  dateButton: {
    ...Spacing.small,
  },
  dateText: {
    fontSize: 18,
    color: Colors.white,
    marginHorizontal: Spacing.medium.margin,
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...AtomicStyles.primaryBackground,
    ...Borders.rounded,
    ...Spacing.medium,
    marginTop: Spacing.large.margin,
  },
  pageSizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pageSizeLabel: {
    marginRight: Spacing.small.margin,
    color: Colors.white,
  },
  pageSizeInput: {
    textAlign: 'center',
    borderColor: Colors.lightGray,
    color: Colors.white,
    ...Borders.bordered,
    padding: Spacing.small.padding,
    width: 50,
    marginRight: Spacing.small.margin,
  },
  pageNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pageInfo: {
    marginHorizontal: Spacing.medium.margin,
    color: Colors.white,
  },
  pageButton: {
    ...Spacing.small,
  },
  section: {
    ...AtomicStyles.roundedContainer,
    marginBottom: Spacing.large.margin,
    ...Shadows.shadowMedium,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: Spacing.small.margin,
  },
  websiteButton: {
    ...AtomicStyles.primaryBackground,
    padding: Spacing.medium.padding,
    ...Borders.rounded,
    alignItems: 'center',
  },
  websiteButtonText: {
    ...Typography.subtitle,
    fontWeight: 'bold',
  },
  developersList: {
    marginBottom: Spacing.large.margin,
  },
  developerName: {
    fontSize: 16,
    marginLeft: Spacing.medium.margin,
  },
  headerBackground: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.small.margin,
  },
  loadingOverlay: {
    height: 160,
    width: 250,
    ...AtomicStyles.roundedContainer,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#007bff',
    textTransform: 'uppercase',
    marginTop: Spacing.small.margin,
    textAlign: 'center',
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.small.margin,
  },
  day: {
    ...Typography.boldText,
    fontSize: 16,
  },
  time: {
    fontSize: 16,
  },
  tariffItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.small.margin,
  },
  tariffType: {
    ...Typography.boldText,
    fontSize: 16,
  },
  tariffPrice: {
    fontSize: 16,
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.small.margin,
  },
  contactLabel: {
    ...Typography.boldText,
    fontSize: 16,
  },
  contactInfo: {
    fontSize: 16,
  },
  logo: {
    width: 90,
    height: 45,
    resizeMode: 'contain',
    marginLeft: -30,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  museumName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
  },
  location: {
    fontSize: 16,
    color: Colors.white,
    marginTop: Spacing.small.margin,
  },
});
