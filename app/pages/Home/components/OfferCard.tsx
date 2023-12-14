import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import * as Typography from 'app/styles/typography';
import * as Colors from 'app/styles/colors';

type OfferCardProps = {
    heading: string;
    offer: string;
    subHeading: string;
    image: string;
};

export default function OfferCard({ heading, offer, subHeading, image }: OfferCardProps) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: image,
                }}
            />
            <View>
                <Text style={styles.heading}>{heading}</Text>
                <Text style={styles.offer}>{offer}</Text>
                <Text style={styles.subHeading}>{subHeading}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 18,
        paddingHorizontal: 30,
        borderRadius: 16,
        alignItems: 'center',
        marginVertical: 20,
        flexDirection: 'row',
        backgroundColor: Colors.secondary.y2,
    },
    image: {
        width: 68,
        height: 68,
        marginRight: 50,
        borderRadius: 10,
    },
    heading: {
        ...Typography.heading.h4_regular_18,
        fontWeight: '300',
        color: Colors.neutral.white,
    },
    subHeading: {
        ...Typography.label.label_regular_12,
        fontWeight: '300',
        color: Colors.neutral.white,
    },
    offer: {
        ...Typography.heading.h3_bold_20,
        fontWeight: '800',
        color: Colors.neutral.white,
    },
});
