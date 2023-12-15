import React, { useMemo } from 'react';
import { Image, View, Text, StyleSheet, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';

import SVGHeart from 'app/assets/icons/heart.svg';
import SVGHeartFilled from 'app/assets/icons/heart-filled.svg';
import SVGPlus from 'app/assets/icons/plus.svg';
import * as Colors from 'app/styles/colors';
import * as Typography from 'app/styles/typography';
import Position from 'app/styles/position';
import useAddToCart from 'app/hooks/useAddToCart';
import { RootStackParamList } from 'app/navigators/StackNavigator';
import { Favorite, Product } from 'app/types/data';

type ProductCardProps = {
    id: number;
    name: string;
    price: number;
    image: string;
    favorite?: boolean;
};

type ProductNavigationProp = StackNavigationProp<RootStackParamList, 'Product'>;

export default function ProductCard({ id, name, price, image, favorite }: ProductCardProps) {
    // const [isFavorite, setIsFavorite] = useState(favorite);
    const navigation = useNavigation<ProductNavigationProp>();
    const addToCart = useAddToCart();

    // console.log({ favorite, isFavorite });

    const queryClient = useQueryClient();
    const data = useMemo(() => queryClient.getQueryData<{ products: Product[] }>(['products']), [queryClient]);

    const addToFavorite = () => {
        queryClient.setQueryData(['favorite'], (existingData: Favorite) => {
            return {
                ...existingData,
                [id]: { ...data?.products.find(product => product.id === id) },
            };
        });
    };

    const removeFromFavorite = () => {
        queryClient.setQueryData(['favorite'], (existingData: Favorite) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { [id]: _, ...rest } = existingData;
            return rest;
        });
    };

    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate('Product', { id })}>
            <Pressable style={styles.heart} onPress={() => (favorite ? removeFromFavorite() : addToFavorite())}>
                {favorite ? <SVGHeartFilled /> : <SVGHeart />}
            </Pressable>
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
        height: 240,
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
        padding: 15,
        zIndex: Position.zIndex.overlayLevel1,
    },
});
