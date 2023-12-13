import React from 'react';
import { View, Text } from 'react-native';
import Cart from 'app/components/Cart';

export default function Header() {
    return (
        <View>
            <Text>Hey, Rahul</Text>
            <Cart />
        </View>
    );
}
