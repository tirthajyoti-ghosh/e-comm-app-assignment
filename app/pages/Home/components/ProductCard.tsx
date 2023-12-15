import React from 'react';
import { Image, View, Text, StyleSheet, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import SVGHeart from 'app/assets/icons/heart.svg';
import SVGPlus from 'app/assets/icons/plus.svg';
import * as Colors from 'app/styles/colors';
import * as Typography from 'app/styles/typography';
import Position from 'app/styles/position';

import { RootStackParamList } from 'app/navigators/StackNavigator';
import { useQueryClient } from '@tanstack/react-query';
import { Cart } from 'app/types/data';

type ProductCardProps = {
    id: number;
    name: string;
    price: number;
    image: string;
};

type ProductNavigationProp = StackNavigationProp<RootStackParamList, 'Product'>;

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
    const navigation = useNavigation<ProductNavigationProp>();
    const queryClient = useQueryClient();

    const addToCart = (productId: string) => {
        const cart = queryClient.getQueryData<Cart>(['cart']) || {};

        const item = cart[Number(productId)];

        if (item) {
            queryClient.setQueryData<Cart>(['cart'], {
                ...cart,
                [productId]: {
                    ...item,
                    quantity: item.quantity + 1,
                },
            });
        } else {
            queryClient.setQueryData<Cart>(['cart'], {
                ...cart,
                [productId]: {
                    id: productId,
                    quantity: 1,
                },
            });
        }
    };

    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate('Product', { id })}>
            <View style={styles.heart}>
                <SVGHeart />
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
            <View>
                <View>
                    <Text style={styles.price}>${price}</Text>
                    <Text style={styles.name}>{name}</Text>
                </View>
                <Pressable style={styles.plus} onPress={() => addToCart(String(id))}>
                    <SVGPlus />
                </Pressable>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.neutral.n7,
        borderRadius: 12,
        padding: 15,
        marginBottom: 20,
        width: '48%',
    },
    imageContainer: {
        width: '100%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: '80%',
        aspectRatio: 1,
        objectFit: 'contain',
    },
    price: {
        ...Typography.body.body2_semibold_14,
        color: '#1E222B',
    },
    name: {
        ...Typography.label.label_regular_12,
        color: '#616A7D',
    },
    plus: {
        backgroundColor: Colors.primary.b1,
        borderRadius: 50,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
    },
    heart: {
        position: 'absolute',
        left: 5,
        top: 5,
        zIndex: Position.zIndex.overlayLevel1,
        padding: 10,
    },
});
