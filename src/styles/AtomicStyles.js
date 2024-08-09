import { StyleSheet } from 'react-native';

export const Colors = {
    primary: '#dba669',
    secondary: '#7197b7',
    white: '#fff',
    lightGray: '#ccc',
    darkGray: '#888',
    errorBackground: '#f8d7da',
    errorText: '#721c24',
    errorBorder: '#d9534f',
    shadow: '#000',
};

export const Typography = {
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.white,
    },
    subtitle: {
        fontSize: 16,
        color: Colors.white,
        textAlign: 'center',
        marginBottom: 20,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 14,
        marginBottom: 5,
    },
    smallText: {
        fontSize: 12,
        color: Colors.darkGray,
    },
    boldText: {
        fontWeight: '600',
    },
};

export const Spacing = {
    small: {
        padding: 5,
        margin: 5,
    },
    medium: {
        padding: 10,
        margin: 10,
    },
    large: {
        padding: 20,
        margin: 20,
    },
};

export const Borders = {
    rounded: {
        borderRadius: 10,
    },
    fullRounded: {
        borderRadius: 50,
    },
    bordered: {
        borderWidth: 1,
        borderColor: Colors.lightGray,
    },
    errorBordered: {
        borderWidth: 1,
        borderColor: Colors.errorBorder,
    },
};

export const Shadows = {
    shadowLight: {
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    shadowMedium: {
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
};

const AtomicStyles = StyleSheet.create({
    // Example atomic style
    roundedContainer: {
        ...Borders.rounded,
        ...Spacing.large,
        ...Shadows.shadowLight,
        backgroundColor: Colors.white,
    },
    primaryBackground: {
        backgroundColor: Colors.primary,
    },
    errorContainer: {
        backgroundColor: Colors.errorBackground,
        ...Borders.rounded,
        ...Spacing.large,
        ...Borders.errorBordered,
        ...Shadows.shadowMedium,
        alignItems: 'center',
    },
    headerStyle: {
        ...AtomicStyles.primaryBackground,
        ...Borders.rounded,
        ...Spacing.large,
        alignItems: 'center',
        marginBottom: Spacing.large.margin,
    },
});

export default AtomicStyles;
