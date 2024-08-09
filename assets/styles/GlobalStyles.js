import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
    // Containers
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    // InputContainer
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dba669',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
    },

    // Stacks
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerLogo: {
        width: 90,
        height: 45,
        resizeMode: 'contain',
        marginLeft: -20,
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: -20,
    },

    // Errors
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

    // NotFound
    noItemsContainer: {
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
    noItemsTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6c757d',
        marginTop: 10,
    },
    noItemsText: {
        fontSize: 16,
        color: '#495057',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
    },

    // CardsList
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
        alignItems: 'center',
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
    },
    cardExtraDescription: {
        marginTop: 5,
        fontSize: 12,
        color: '#888',
    },
    cardImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },

    // Details
    detailsContainer: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f4f4f4',
    },
    detailsHeaderContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    detailsTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    detailsSubtitle: {
        fontSize: 18,
        color: '#555',
        marginTop: 5,
        textAlign: 'center',
    },
    detailsInfoContainer: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
    },
    detailsLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#7197b7',
        marginBottom: 5,
    },
    detailsDescription: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    detailsInfo: {
        fontSize: 16,
        color: '#555',
        marginBottom: 10,
    },
    detailsImagesContainer: {
        marginBottom: 20,
    },
    detailsImage: {
        width: 300,
        height: 300,
        marginRight: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    detailsNoImagesText: {
        fontSize: 16,
        color: '#999',
        textAlign: 'center',
    },
});

export default GlobalStyles;
