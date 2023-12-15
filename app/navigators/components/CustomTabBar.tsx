import { StyleSheet, View } from 'react-native';
import React from 'react';
import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs';

const CustomTabBar = (props: BottomTabBarProps) => {
    return (
        <View>
            <View style={styles.tabBar} />
            <BottomTabBar {...props} />
        </View>
    );
};

export default CustomTabBar;

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        right: 10,
        left: 10,
        bottom: 0,
        height: 80,
        backgroundColor: 'white',
        borderRadius: 30,
    },
});
