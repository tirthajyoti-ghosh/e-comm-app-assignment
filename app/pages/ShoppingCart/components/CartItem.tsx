import React from 'react';
import { View, Image, Text, Pressable, StyleSheet } from 'react-native';

import SVGPlusBlack from 'app/assets/icons/plus-black.svg';
import SVGMinus from 'app/assets/icons/minus.svg';
import * as Typography from 'app/styles/typography';

export default function CartItem() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: 'https://picsum.photos/200/300' }} />
            <View style={styles.productContainer}>
                <Text style={styles.text}>Name</Text>
                <Text style={styles.text}>$7.49</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button}>
                    <SVGMinus />
                </Pressable>
                <Text style={styles.counterText}>1</Text>
                <Pressable style={styles.button}>
                    <SVGPlusBlack />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#EBEBFB',
        borderBottomWidth: 1,
        marginHorizontal: 20,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    productContainer: {
        flex: 1,
        marginLeft: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#F5F5F5',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    counterText: {
        marginHorizontal: 10,
    },
    counterBtnText: {
        ...Typography.body.body1_semibold_16,
        fontWeight: '600',
        fontSize: 20,
    },
    text: {
        ...Typography.body.body2_medium_14,
    },
});
