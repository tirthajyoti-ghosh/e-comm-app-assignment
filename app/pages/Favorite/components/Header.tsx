import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

import Cart from 'app/components/Cart';
import * as Colors from 'app/styles/colors';
import * as Typography from 'app/styles/typography';
import SVGChevronLeft from 'app/assets/icons/chevron-left.svg';
import SVGBagBlack from 'app/assets/icons/bag-black.svg';
import { useNavigation } from '@react-navigation/native';
import useQueryCacheData from 'app/hooks/useQueryCacheData';

export default function Header() {
    const navigation = useNavigation();
    const favorite = useQueryCacheData(['favorite']) || {};

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <SVGChevronLeft />
                </Pressable>

                <Text style={styles.text}>Favorite ({Object.keys(favorite).length})</Text>
            </View>
            <Cart icon={<SVGBagBlack />} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.neutral.white,
        paddingHorizontal: 20,
    },
    text: {
        ...Typography.body.body1_regular_16,
        color: Colors.text.dark,
        marginLeft: 20,
    },
    backBtn: {
        backgroundColor: Colors.neutral.n7,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
});
