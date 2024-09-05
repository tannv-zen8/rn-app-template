import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../pages/home/home.page';
import { HOME_ROUTE, LOGIN_ROUTE } from './route';
import LoginPage from '../pages/login/login.page';
const Stack = createNativeStackNavigator();


export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={LOGIN_ROUTE}>
                <Stack.Screen name={HOME_ROUTE} component={HomePage} />
                <Stack.Screen name={LOGIN_ROUTE} component={LoginPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}