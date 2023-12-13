/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Home from 'app/pages/Home';

export default function App() {
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" />
            <Home />
        </SafeAreaView>
    );
}
