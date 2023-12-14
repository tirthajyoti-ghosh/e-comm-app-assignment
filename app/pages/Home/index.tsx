import React from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native';

import SVGChevronDown from 'app/assets/icons/chevron-down.svg';
import Header from './components/Header';
import Search from './components/Search';
import OfferCard from './components/OfferCard';
import ProductCard from './components/ProductCard';
import * as Colors from 'app/styles/colors';
import * as Typography from 'app/styles/typography';

const offers = [
    {
        heading: 'Get',
        offer: '50% OFF',
        subHeading: 'On first 03 orders',
        image: 'https://picsum.photos/200/300',
    },
    {
        heading: 'Get',
        offer: '50% OFF',
        subHeading: 'On first 03 orders',
        image: 'https://picsum.photos/200/300',
    },
    {
        heading: 'Get',
        offer: '50% OFF',
        subHeading: 'On first 03 orders',
        image: 'https://picsum.photos/200/300',
    },
    {
        heading: 'Get',
        offer: '50% OFF',
        subHeading: 'On first 03 orders',
        image: 'https://picsum.photos/200/300',
    },
    {
        heading: 'Get',
        offer: '50% OFF',
        subHeading: 'On first 03 orders',
        image: 'https://picsum.photos/200/300',
    },
];

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary.b1} />
            <ScrollView>
                <View style={styles.topContainer}>
                    <Header />
                    <Search />
                    <View style={styles.deliveryContainer}>
                        <View>
                            <Text style={styles.label}>DELIVERY TO</Text>
                            <Text style={styles.deliveryText}>
                                Green Way 3000, Sylhet <SVGChevronDown />
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.label}>WITHIN</Text>
                            <Text style={styles.deliveryText}>
                                1 Hour <SVGChevronDown />
                            </Text>
                        </View>
                    </View>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {offers.map((offer, index) => (
                        <View
                            style={{
                                marginLeft: index === 0 ? 20 : 10,
                                marginRight: index === offers.length - 1 ? 20 : 10,
                            }}
                            key={index} // putting index as key won't have effect in this case as the list is static
                        >
                            <OfferCard {...offer} />
                        </View>
                    ))}
                </ScrollView>

                <Text style={styles.title}>Recommended</Text>

                <View style={styles.productContainer}>
                    <ProductCard
                        name="Apple"
                        price={200}
                        image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                    />
                    <ProductCard
                        name="Apple"
                        price={200}
                        image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                    />
                    <ProductCard
                        name="Apple"
                        price={200}
                        image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                    />
                    <ProductCard
                        name="Apple"
                        price={200}
                        image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                    />
                    <ProductCard
                        name="Apple"
                        price={200}
                        image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                    />
                    <ProductCard
                        name="Apple"
                        price={200}
                        image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                    />
                    <ProductCard
                        name="Apple"
                        price={200}
                        image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                    />
                    <ProductCard
                        name="Apple"
                        price={200}
                        image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                    />
                    <ProductCard
                        name="Apple"
                        price={200}
                        image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Colors.neutral.white,
    },
    topContainer: {
        backgroundColor: Colors.primary.b1,
        paddingHorizontal: 15,
    },
    deliveryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 10,
    },
    label: {
        ...Typography.label.label_regular_12,
        fontWeight: '800',
        opacity: 0.5,
        color: Colors.neutral.n7,
    },
    deliveryText: {
        ...Typography.body.body2_medium_14,
        color: Colors.neutral.n7,
    },
    title: {
        ...Typography.heading.h1_regular_30,
        color: Colors.neutral.n1,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 20,
    },
    productContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
});
