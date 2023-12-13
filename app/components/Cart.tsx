import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SVGBag from 'app/assets/icons/bag.svg';
import * as Colors from 'app/styles/colors';

export default function Cart() {
    const count = 3;
    return (
        <View>
            {count > 0 && (
                <View style={styles.count}>
                    <Text style={{ color: '#fff', fontSize: 10 }}>{count}</Text>
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
        top: -5,
        right: -5,
        width: 15,
        height: 15,
        borderRadius: 15,
        backgroundColor: Colors.secondary.y1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
