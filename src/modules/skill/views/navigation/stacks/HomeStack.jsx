import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../components/screens/HomeScreen";

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName='homeScreenStack'
            screenOptions={{
                headerMode: 'screen',
                headerTitleAlign: 'center',
            }}>
            <Stack.Screen
                name='homeScreenStack'
                component={HomeScreen}
                options={{ title: 'MUSEEPA APP' }}
            />
        </Stack.Navigator>
    )
}