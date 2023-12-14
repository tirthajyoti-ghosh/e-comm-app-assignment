/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
// import Home from 'app/pages/Home';
import Product from 'app/pages/Product';

export default function App() {
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" />
            {/* <Home /> */}
            <Product />
        </SafeAreaView>
    );
}
