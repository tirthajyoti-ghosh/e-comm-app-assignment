import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

import Home from 'app/pages/Home';

type RootTabParamList = {
    Home: undefined;
    Categories: undefined;
    Favorite: undefined;
    More: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

function CategoriesScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Categories!</Text>
        </View>
    );
}

function FavoriteScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Favorite!</Text>
        </View>
    );
}
function MoreScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>More!</Text>
        </View>
    );
}
export default function HomeTabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Categories" component={CategoriesScreen} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
            <Tab.Screen name="More" component={MoreScreen} />
        </Tab.Navigator>
    );
}
