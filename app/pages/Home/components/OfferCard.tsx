import React from 'react';
import { View, Text, Image } from 'react-native';

type OfferCardProps = {
    heading: string;
    offer: string;
    subHeading: string;
    image: string;
};

export default function OfferCard({ heading, offer, subHeading, image }: OfferCardProps) {
    return (
        <View>
            <Image
                source={{
                    uri: image,
                }}
            />
            <View>
                <Text>{heading}</Text>
                <Text>{offer}</Text>
                <Text>{subHeading}</Text>
            </View>
        </View>
    );
}
