import React from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import ProductCard from './ProductCard';
import { Favorite, Product } from 'app/types/data';
import useQueryCacheData from 'app/hooks/useQueryCacheData';

const width = Dimensions.get('window').width;

export default function ProductList({ data }: { data: Product[] }) {
    const favorite = useQueryCacheData<Favorite>(['favorite']) || {};

    return (
        <FlatList
            data={data}
            renderItem={({ item, index }) => (
                <View
                    style={{
                        ...styles.productContainer,
                        ...(index % 2 === 0
                            ? { marginRight: 10, marginLeft: 20 }
                            : { marginLeft: 10, marginRight: 20 }),
                    }}>
                    <ProductCard
                        id={item.id}
                        name={item.title}
                        price={item.price}
                        image={item.thumbnail}
                        favorite={favorite[item.id] !== undefined}
                    />
                </View>
            )}
            keyExtractor={item => String(item.id)}
            numColumns={2}
            extraData={favorite}
            ListFooterComponent={<View style={{ marginBottom: 80 }} />}
        />
    );
}

const styles = StyleSheet.create({
    productContainer: {
        marginBottom: 20,
        width: width / 2 - 30,
    },
});
