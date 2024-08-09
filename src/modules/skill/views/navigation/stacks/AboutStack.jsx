import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AboutScreen from "../../components/screens/AboutScreen";

import logoImage from '../../../../../../assets/images/logo.png';
import { Image, StyleSheet, Text, View } from "react-native";

const Stack = createStackNavigator();

export default function AboutStack() {
    return (
        <Stack.Navigator
            initialRouteName='aboutScreen'
            screenOptions={{
                headerMode: "screen",
                headerTitle: () => (
                    <View style={styles.headerContainer}>
                        <Image
                            source={logoImage}
                            style={styles.logo}
                        />
                        <Text style={styles.title}>Acerca de Museepa</Text>
                    </View>
                ),
            }}
        >
            <Stack.Screen
                name='aboutScreen'
                component={AboutScreen}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: 90,
        height: 45,
        resizeMode: 'contain',
        marginLeft: -30,
    },
    title: {
        marginLeft: -20,
        fontSize: 25,
        fontWeight: 'bold',
    },
});
