import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

import * as Colors from 'app/styles/colors';
import * as Typography from 'app/styles/typography';
import SVGChevronLeft from 'app/assets/icons/chevron-left.svg';
import { useNavigation } from '@react-navigation/native';

export default function Header({ count }: { count: number }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
                <SVGChevronLeft />
            </Pressable>
            <Text style={styles.text}>Shopping Cart ({count})</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.neutral.white,
        paddingHorizontal: 20,
    },
    text: {
        ...Typography.body.body1_regular_16,
        color: Colors.text.dark,
        marginLeft: 20,
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
