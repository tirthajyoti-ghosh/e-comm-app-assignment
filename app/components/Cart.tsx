import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SVGBag from 'app/assets/icons/bag.svg';
import * as Colors from 'app/styles/colors';
import Position from 'app/styles/position';

export default function Cart() {
    const count = 3;
    return (
        <View>
            {count > 0 && (
                <View style={styles.count}>
                    <Text style={styles.countText}>{count}</Text>
                </View>
            )}
            <SVGBag />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    count: {
        position: 'absolute',
        zIndex: Position.zIndex.overlayLevel99,
        top: -8,
        right: -8,
        width: 20,
        height: 20,
        borderRadius: 15,
        backgroundColor: Colors.secondary.y1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    countText: {
        color: '#fff',
        fontSize: 10,
    },
});
