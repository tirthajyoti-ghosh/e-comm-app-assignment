import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import HomeTabNavigator from './TabNavigator';
import Product from 'app/pages/Product';
import ShoppingCart from 'app/pages/ShoppingCart';

export type RootStackParamList = {
    HomeTab: undefined;
    Product: undefined;
    ShoppingCart: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function HomeStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
            initialRouteName="HomeTab">
            <Stack.Screen name="HomeTab" component={HomeTabNavigator} />
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        </Stack.Navigator>
    );
}
