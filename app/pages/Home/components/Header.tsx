import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Cart from 'app/components/Cart';
import * as Colors from 'app/styles/colors';
import * as Typography from 'app/styles/typography';
import SVGBag from 'app/assets/icons/bag.svg';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hey, Rahul</Text>
            <Cart icon={<SVGBag />} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.primary.b1,
    },
    text: {
        color: Colors.neutral.n7,
        ...Typography.heading.h3_regular_20,
    },
});
