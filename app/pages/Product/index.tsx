import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import * as Colors from 'app/styles/colors';
import * as Typography from 'app/styles/typography';
import { moderateScale } from 'app/utils/scale';
import StarRating from './components/StarRating';

export default function Product() {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Header />
                <View style={styles.heading}>
                    <Text style={styles.brand}>Thin Choice</Text>
                    <Text style={styles.name}>Top Orange</Text>
                </View>
                <StarRating rating={4} reviews={110} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Colors.neutral.white,
    },
    topContainer: {
        paddingHorizontal: 20,
    },
    heading: {
        marginVertical: 20,
    },
    brand: {
        ...Typography.heading.h1_regular_30,
        fontSize: moderateScale(45),
        fontWeight: '300',
        lineHeight: moderateScale(50),
        color: '#1E222B',
    },
    name: {
        ...Typography.heading.h1_regular_30,
        fontSize: moderateScale(45),
        fontWeight: '800',
        lineHeight: moderateScale(50),
        color: '#1E222B',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    reviews: {
        ...Typography.body.body2_regular_14,
        color: '#A1A1AB',
        marginLeft: 10,
    },
});
