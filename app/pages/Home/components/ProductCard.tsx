import React from 'react';
import { Image, View, Text } from 'react-native';

import SVGHeart from 'app/assets/icons/heart.svg';
import SVGPlus from 'app/assets/icons/plus.svg';

type ProductCardProps = {
    name: string;
    price: number;
    image: string;
};

export default function ProductCard({ name, price, image }: ProductCardProps) {
    return (
        <View>
            <SVGHeart />
            <Image source={{ uri: image }} />
            <View>
                <View>
                    <Text>${price}</Text>
                    <Text>{name}</Text>
                </View>
                <View>
                    <SVGPlus />
                </View>
            </View>
        </View>
    );
}
