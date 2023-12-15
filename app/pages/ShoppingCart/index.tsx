import React from 'react';
import { FlatList, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'app/navigators/StackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

import * as Colors from 'app/styles/colors';
import * as Typography from 'app/styles/typography';
import Header from './components/Header';
import CartItem from './components/CartItem';
import Button from 'app/components/Button';
import useQueryCacheData from 'app/hooks/useQueryCacheData';
import { Cart } from 'app/types/data';

type HomeTabNavigationProp = StackNavigationProp<RootStackParamList, 'HomeTab'>;

export default function ShoppingCart() {
    const navigation = useNavigation<HomeTabNavigationProp>();
    const cart = useQueryCacheData<Cart>(['cart']) || {};

    const subtotal = Object.values(cart || {}).reduce(
        (acc, item) =>
            acc + (item.product.price - item.product.price * (item.product.discountPercentage / 100)) * item.quantity,
        0,
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.neutral.white} />
            <Header count={Object.values(cart || {}).reduce((acc, item) => acc + item.quantity, 0)} />

            {Object.keys(cart).length === 0 ? (
                <Text style={styles.cartEmptyText}> Your cart is empty </Text>
            ) : (
                <>
                    <FlatList
                        data={Object.values(cart || {})}
                        renderItem={({ item }) => (
                            <CartItem
                                key={item.id}
                                id={item.id}
                                image={item.product.thumbnail}
                                title={item.product.title}
                                price={(
                                    item.product.price -
                                    item.product.price * (item.product.discountPercentage / 100)
                                ).toFixed(2)}
                                quantity={item.quantity}
                            />
                        )}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent={
                            <Pressable style={styles.editBtn} onPress={() => navigation.navigate('HomeTab')}>
                                <Text style={styles.editBtnText}>Edit</Text>
                            </Pressable>
                        }
                    />
                    <View style={styles.checkoutContainer}>
                        <View style={styles.checkout}>
                            <Text style={styles.category}>Subtotal</Text>
                            <Text style={styles.amount}>${subtotal.toFixed(2)}</Text>
                        </View>
                        <View style={styles.checkout}>
                            <Text style={styles.category}>Delivery</Text>
                            <Text style={styles.amount}>$2.00</Text>
                        </View>
                        <View style={styles.checkout}>
                            <Text style={styles.category}>Total</Text>
                            <Text style={styles.amount}>${(subtotal + 2).toFixed(2)}</Text>
                        </View>
                        <Button
                            style={styles.checkoutBtn}
                            title="Proceed To checkout"
                            onPress={() => console.log('pressed')}
                            type="primary"
                        />
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.neutral.white,
        height: '100%',
    },
    loader: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    editBtn: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'flex-end',
        marginTop: 20,
        marginBottom: 40,
    },
    editBtnText: {
        ...Typography.label.label_medium_12,
        color: Colors.primary.b1,
        fontSize: 16,
        fontWeight: '600',
    },
    checkoutContainer: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 20,
        paddingBottom: 40,
        paddingHorizontal: 20,
        backgroundColor: '#F8F9FB',
        marginHorizontal: 10,
    },
    checkout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    category: {
        ...Typography.body.body2_regular_14,
        color: '#616A7D',
    },
    amount: {
        ...Typography.body.body2_medium_14,
        color: '#1E222B',
    },
    checkoutBtn: {
        marginTop: 20,
        alignItems: 'center',
        paddingVertical: 15,
    },
    cartEmptyText: {
        ...Typography.body.body2_regular_14,
        color: '#616A7D',
        textAlign: 'center',
        marginTop: 20,
    },
});
