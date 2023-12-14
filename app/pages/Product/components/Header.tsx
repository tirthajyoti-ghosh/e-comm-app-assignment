import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

import Cart from 'app/components/Cart';
import * as Colors from 'app/styles/colors';
import * as Typography from 'app/styles/typography';
import SVGChevronLeft from 'app/assets/icons/chevron-left.svg';
import SVGBagBlack from 'app/assets/icons/bag-black.svg';

export default function Header() {
    return (
        <View style={styles.container}>
            <Pressable style={styles.backBtn} onPress={() => console.log('pressed')}>
                <SVGChevronLeft />
            </Pressable>
            <Cart icon={<SVGBagBlack />} />
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
        backgroundColor: Colors.neutral.white,
        paddingHorizontal: 20,
    },
    text: {
        color: Colors.neutral.n7,
        ...Typography.heading.h3_regular_20,
    },
    backBtn: {
        backgroundColor: Colors.neutral.n7,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
});
