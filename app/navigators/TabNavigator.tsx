/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';

import Home from 'app/pages/Home';
import * as Colors from 'app/styles/colors';
import SVGHome from 'app/assets/icons/home.svg';
import SVGFavoriteMenu from 'app/assets/icons/favorite-menu.svg';
import SVGCategories from 'app/assets/icons/categories.svg';
import SVGMore from 'app/assets/icons/more.svg';
import SVGHomeYellow from 'app/assets/icons/home-yellow.svg';
import SVGFavoriteMenuYellow from 'app/assets/icons/favorite-menu-yellow.svg';
import SVGCategoriesYellow from 'app/assets/icons/categories-yellow.svg';
import SVGMoreYellow from 'app/assets/icons/more-yellow.svg';
import CustomTabBar from './components/CustomTabBar';
import CustomTabBarButton from './components/CustomTabBarButton';

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

const icon = {
    Home: SVGHome,
    Categories: SVGCategories,
    Favorite: SVGFavoriteMenu,
    More: SVGMore,
};

const iconActive = {
    Home: SVGHomeYellow,
    Categories: SVGCategoriesYellow,
    Favorite: SVGFavoriteMenuYellow,
    More: SVGMoreYellow,
};

export default function HomeTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBar={props => <CustomTabBar {...props} />}
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarInactiveTintColor: 'dark',
                tabBarStyle: styles.tabBarStyle,
                tabBarActiveTintColor: Colors.neutral.white,
                tabBarIcon: ({ focused }) => {
                    const Icon = icon[route.name];
                    const IconActive = iconActive[route.name];

                    return (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            {focused ? <IconActive /> : <Icon />}
                        </View>
                    );
                },
            })}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarButton: props => <CustomTabBarButton title="Home" route="home" {...props} />,
                }}
            />
            <Tab.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    tabBarButton: props => <CustomTabBarButton title="Categories" {...props} />,
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    tabBarButton: props => <CustomTabBarButton title="Favorite" {...props} />,
                }}
            />
            <Tab.Screen
                name="More"
                component={MoreScreen}
                options={{
                    tabBarLabel: 'More',
                    title: 'More',
                    headerShown: true,
                    tabBarButton: props => <CustomTabBarButton title="More" route="more" {...props} />,
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        bottom: 0,
        right: 10,
        left: 10,
        height: 60,
        borderRadius: 30,
    },
});
