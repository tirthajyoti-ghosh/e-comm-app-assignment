import React from 'react';
import { ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';

import Header from './components/Header';
import * as Colors from 'app/styles/colors';
import * as Typography from 'app/styles/typography';
import { moderateScale } from 'app/utils/scale';
import StarRating from './components/StarRating';
import ImageCarousel from './components/ImageCarousel';
import Button from 'app/components/Button';
import { Product as ProductType } from 'app/types/data';

type ProductRouteProp = RouteProp<{ Product: { id: number } }, 'Product'>;

export default function Product() {
    const route = useRoute<ProductRouteProp>();
    const { id } = route.params;

    const queryClient = useQueryClient();

    const data = queryClient.getQueryData<{ products: ProductType[] }>(['products']);
    const product = data?.products.find(item => item.id === id);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.neutral.white} />
            <Header />
            <ScrollView>
                <View style={styles.topContainer}>
                    <View style={styles.heading}>
                        <Text style={styles.brand}>{product?.brand}</Text>
                        <Text style={styles.name}>{product?.title}</Text>
                    </View>
                    <StarRating rating={product?.rating || 0} reviews={Math.floor(Math.random() * 100) + 100} />
                </View>
                <ImageCarousel images={product?.images.reverse() || []} />
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>${product?.price}</Text>
                    <Text style={styles.discount}>${product?.discountPercentage} OFF</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="Add to cart" onPress={() => {}} type="secondary" />
                    <Button style={styles.button} title="Buy now" onPress={() => {}} type="primary" />
                </View>
                <View style={styles.descContainer}>
                    <Text style={styles.descHeading}>Details</Text>
                    <Text style={styles.desc}>{product?.description}</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginBottom: 100,
        backgroundColor: Colors.neutral.white,
    },
    topContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    heading: {
        marginVertical: 20,
    },
    brand: {
        ...Typography.heading.h1_regular_30,
        fontSize: moderateScale(40),
        fontWeight: '300',
        lineHeight: moderateScale(45),
        color: '#1E222B',
    },
    name: {
        ...Typography.heading.h1_regular_30,
        fontSize: moderateScale(40),
        fontWeight: '800',
        lineHeight: moderateScale(50),
        color: '#1E222B',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    price: {
        ...Typography.body.body1_semibold_16,
        fontWeight: '700',
        color: Colors.primary.b1,
    },
    discount: {
        ...Typography.label.label_regular_12,
        color: Colors.neutral.white,
        marginLeft: 10,
        backgroundColor: Colors.primary.b1,
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    button: {
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
    },
    descContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    descHeading: {
        ...Typography.body.body1_regular_16,
        color: '#1E222B',
        marginBottom: 10,
    },
    desc: {
        ...Typography.body.body1_regular_16,
        color: '#8891A5',
        lineHeight: 25,
    },
});
