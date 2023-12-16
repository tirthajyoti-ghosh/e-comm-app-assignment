import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

import * as Colors from 'app/styles/colors';
import * as Typography from 'app/styles/typography';
import Header from './components/Header';
import ProductList from 'app/components/ProductList';
import useQueryCacheData from 'app/hooks/useQueryCacheData';
import { Favorite as FavoriteType } from 'app/types/data';

export default function Favorite() {
    const favorite = useQueryCacheData<FavoriteType>(['favorite']) || {};

    return (
        <View style={styles.container}>
            <Header />
            {Object.keys(favorite).length === 0 ? (
                <Text style={styles.cartEmptyText}> There are no favorites yet :( </Text>
            ) : (
                <View style={{ marginTop: 20, marginBottom: 100 }}>
                    <ProductList data={Object.values(favorite)} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginBottom: 100,
        backgroundColor: Colors.neutral.white,
    },
    cartEmptyText: {
        ...Typography.body.body2_regular_14,
        color: Colors.text.grey,
        textAlign: 'center',
        marginTop: 20,
    },
});
