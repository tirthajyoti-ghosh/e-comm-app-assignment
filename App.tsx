import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from 'app/navigators/StackNavigator';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { Cart } from 'app/types/data';

const queryClient = new QueryClient();

function Root() {
    // setup cart global state
    const queryClientHook = useQueryClient();
    queryClientHook.setQueryData<Cart>(['cart'], {});

    return <HomeStackNavigator />;
}

export default function App() {
    return (
        <SafeAreaProvider>
            <QueryClientProvider client={queryClient}>
                <NavigationContainer>
                    <Root />
                </NavigationContainer>
            </QueryClientProvider>
        </SafeAreaProvider>
    );
}
