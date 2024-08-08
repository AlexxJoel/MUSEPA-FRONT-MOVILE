import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AboutScreen from "../../components/screens/AboutScreen";

const Stack = createStackNavigator();

export default function AboutStack() {
    return (
        <Stack.Navigator
            initialRouteName='aboutScreenStack'
            screenOptions={{
                headerMode: 'screen',
                headerTitleAlign: 'center',
            }}>
            <Stack.Screen
                name='aboutScreenStack'
                component={AboutScreen}
                options={{ title: 'Acerca de' }}
            />
        </Stack.Navigator>
    )
}