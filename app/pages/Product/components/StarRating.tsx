import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import * as Typography from 'app/styles/typography';
import StarIcon from './StarIcon';

export default function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
    return (
        <View style={styles.ratingContainer}>
            <StarRatingDisplay
                rating={rating}
                starSize={20}
                starStyle={{ marginRight: -6 }}
                StarIconComponent={StarIcon}
            />
            <Text style={styles.reviews}>{reviews} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
