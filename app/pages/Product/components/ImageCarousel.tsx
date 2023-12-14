import React, { useState } from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import * as Colors from 'app/styles/colors';
import Position from 'app/styles/position';
import { moderateScale } from 'app/utils/scale';
import SVGFavorite from 'app/assets/icons/favorite.svg';

const screenWidth = Dimensions.get('window').width;

export default function ImageCarousel() {
    const [activeSlide, setActiveSlide] = useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.favouriteIcon}>
                <SVGFavorite />
            </View>
            <Carousel
                data={[
                    'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
                    'https://i.dummyjson.com/data/products/8/1.jpg',
                    'https://i.dummyjson.com/data/products/8/2.jpg',
                    'https://i.dummyjson.com/data/products/8/3.jpg',
                    'https://i.dummyjson.com/data/products/8/4.jpg',
                ]}
                renderItem={({ item }) => (
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: item }} style={styles.image} />
                    </View>
                )}
                sliderWidth={screenWidth}
                itemWidth={screenWidth - 40}
                loop
                autoplay={false}
                onSnapToItem={index => setActiveSlide(index)}
            />
            <Pagination
                dotsLength={5}
                activeDotIndex={activeSlide}
                dotStyle={styles.dotStyle}
                containerStyle={{ marginRight: 220, paddingVertical: 15 }}
                inactiveDotStyle={styles.inactiveDotStyle}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: moderateScale(250),
        backgroundColor: Colors.neutral.n7,
    },
    imageContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        aspectRatio: 1.2,
        objectFit: 'contain',
    },
    dotStyle: {
        width: 25,
        height: 3,
        borderRadius: 5,
        marginHorizontal: -7,
        backgroundColor: Colors.secondary.y1,
    },
    inactiveDotStyle: {
        width: 25,
        height: 3,
        borderRadius: 5,
        backgroundColor: '#E4E4E4',
    },
    favouriteIcon: {
        position: 'absolute',
        zIndex: Position.zIndex.overlayLevel99,
        top: 20,
        right: 20,
        width: 58,
        height: 58,
        borderRadius: 20,
        backgroundColor: Colors.neutral.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
