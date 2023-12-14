import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import * as Colors from 'app/styles/colors';
import * as Typography from 'app/styles/typography';
import { moderateScale } from 'app/utils/scale';
import StarRating from './components/StarRating';
import ImageCarousel from './components/ImageCarousel';
import Button from 'app/components/Button';

export default function Product() {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <View style={styles.topContainer}>
                    <View style={styles.heading}>
                        <Text style={styles.brand}>Thin Choice</Text>
                        <Text style={styles.name}>Top Orange</Text>
                    </View>
                    <StarRating rating={4} reviews={110} />
                </View>
                <ImageCarousel />
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>$199.99</Text>
                    <Text style={styles.discount}>$22.04 OFF</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="Add to cart" onPress={() => {}} type="secondary" />
                    <Button style={styles.button} title="Buy now" onPress={() => {}} type="primary" />
                </View>
                <View style={styles.descContainer}>
                    <Text style={styles.descHeading}>Details</Text>
                    <Text style={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id semper urna. Nulla facilisi.
                        Nulla facilisi. Donec euismod, nisl vitae tincidunt ultricies, velit tellus maximus justo, ut
                        ullamcorper justo odio ut magna. Donec auctor, nisl et consectetur aliquam, erat nisi tincidunt
                        justo, nec malesuada quam tellus quis nisl. Donec vel lectus sed risus luctus ultricies. Donec
                        ullamcorper, nunc ut interdum efficitur, nisl elit aliquam mauris, sit amet consequat quam elit
                        nec risus. Nullam nec metus id nulla hendrerit tempus. Donec auctor, nisl et consectetur
                        aliquam, erat nisi tincidunt justo, nec malesuada quam tellus quis nisl. Donec vel lectus sed
                        risus luctus ultricies. Donec ullamcorper, nunc ut interdum efficitur, nisl elit aliquam mauris,
                        sit amet consequat quam elit nec risus. Nullam nec metus id nulla hendrerit tempus.
                    </Text>
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
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    price: {
        ...Typography.body.body1_regular_16,
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
