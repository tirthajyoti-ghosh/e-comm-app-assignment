import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import * as Colors from 'app/styles/colors';
import Position from 'app/styles/position';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'app/navigators/StackNavigator';
import useQueryCache from 'app/hooks/useQueryCacheData';
import { Cart as CartType } from 'app/types/data';

type ShoppingCartNavigationProp = StackNavigationProp<RootStackParamList, 'ShoppingCart'>;

export default function Cart({ icon }: { icon: React.ReactNode }) {
    const navigation = useNavigation<ShoppingCartNavigationProp>();
    const cart = useQueryCache<CartType>(['cart']);

    const count = Object.values(cart || {}).reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate('ShoppingCart')}>
            {count > 0 && (
                <View style={styles.count}>
                    <Text style={styles.countText}>{count}</Text>
                </View>
            )}
            {icon}
        </Pressable>
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
