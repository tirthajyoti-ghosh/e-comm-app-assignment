import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import SVGChevronDown from 'app/assets/icons/chevron-down.svg';
import Header from './components/Header';
import Search from './components/Search';
import OfferCard from './components/OfferCard';
import ProductCard from './components/ProductCard';

const offers = [
    {
        heading: 'Flat 50% Off',
        offer: 'On first order',
        subHeading: 'T&C Apply',
        image: 'https://picsum.photos/200/300',
    },
    {
        heading: 'Flat 50% Off',
        offer: 'On first order',
        subHeading: 'T&C Apply',
        image: 'https://picsum.photos/200/300',
    },
    {
        heading: 'Flat 50% Off',
        offer: 'On first order',
        subHeading: 'T&C Apply',
        image: 'https://picsum.photos/200/300',
    },
    {
        heading: 'Flat 50% Off',
        offer: 'On first order',
        subHeading: 'T&C Apply',
        image: 'https://picsum.photos/200/300',
    },
    {
        heading: 'Flat 50% Off',
        offer: 'On first order',
        subHeading: 'T&C Apply',
        image: 'https://picsum.photos/200/300',
    },
];

export default function Home() {
    return (
        <View>
            <Header />
            <Search />
            <View>
                <View>
                    <Text>DELIVERY TO</Text>
                    <Text>
                        Green Way 3000, Sylhet <SVGChevronDown />
                    </Text>
                </View>
                <View>
                    <Text>WITHIN</Text>
                    <Text>
                        1 Hour <SVGChevronDown />
                    </Text>
                </View>
            </View>
            <ScrollView>
                {offers.map(offer => (
                    <OfferCard {...offer} />
                ))}
            </ScrollView>
            <Text>Recommended</Text>
            <ProductCard name="Apple" price={200} image="https://picsum.photos/200/300" />
            <ProductCard name="Apple" price={200} image="https://picsum.photos/200/300" />
            <ProductCard name="Apple" price={200} image="https://picsum.photos/200/300" />
            <ProductCard name="Apple" price={200} image="https://picsum.photos/200/300" />
        </View>
    );
}
