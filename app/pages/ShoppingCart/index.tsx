import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import * as Colors from 'app/styles/colors';
import * as Typography from 'app/styles/typography';
import Header from './components/Header';
import CartItem from './components/CartItem';
import Button from 'app/components/Button';

export default function ShoppingCart() {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <Pressable style={styles.editBtn} onPress={() => console.log('pressed')}>
                    <Text style={styles.editBtnText}>Edit</Text>
                </Pressable>
                <View style={styles.checkoutContainer}>
                    <View style={styles.checkout}>
                        <Text style={styles.category}>Subtotal</Text>
                        <Text style={styles.amount}>$35.96</Text>
                    </View>
                    <View style={styles.checkout}>
                        <Text style={styles.category}>Delivery</Text>
                        <Text style={styles.amount}>$2.00</Text>
                    </View>
                    <View style={styles.checkout}>
                        <Text style={styles.category}>Total</Text>
                        <Text style={styles.amount}>$37.96</Text>
                    </View>
                    <Button
                        style={styles.checkoutBtn}
                        title="Proceed To checkout"
                        onPress={() => console.log('pressed')}
                        type="primary"
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.neutral.white,
        height: '100%',
    },
    editBtn: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        // marginRight: 20,
        borderRadius: 10,
        alignItems: 'flex-end',
        marginTop: 20,
    },
    editBtnText: {
        ...Typography.label.label_medium_12,
        color: Colors.primary.b1,
        fontSize: 16,
        fontWeight: '600',
    },
    checkoutContainer: {
        marginTop: 40,
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
});
