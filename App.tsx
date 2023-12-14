import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from 'app/navigators/StackNavigator';

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <HomeStackNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
