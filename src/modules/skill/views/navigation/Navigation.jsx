import React from 'react'
import { Icon } from '@rneui/base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './stacks/HomeStack';
import AboutStack from './stacks/AboutStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='home'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false
                })}
            >
                <Tab.Screen
                    name='home'
                    component={HomeStack}
                    options={{ title: 'Inicio' }}
                />
                <Tab.Screen
                    name='about'
                    component={AboutStack}
                    options={{ title: 'Acerca de' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
        case 'home':
            iconName = 'bank'
            break;
        case 'about':
            iconName = 'information'
            break
        default:
            break;
    }
    return (<Icon type='material-community'
        name={iconName}
        size={25}
        color={color}></Icon>)
}