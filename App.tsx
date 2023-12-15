import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from 'app/navigators/StackNavigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
    return (
        <SafeAreaProvider>
            <QueryClientProvider client={queryClient}>
                <NavigationContainer>
                    <HomeStackNavigator />
                </NavigationContainer>
            </QueryClientProvider>
        </SafeAreaProvider>
    );
}
