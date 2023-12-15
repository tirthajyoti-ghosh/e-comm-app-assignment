import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SVGSearch from 'app/assets/icons/search.svg';
import * as Colors from 'app/styles/colors';

export default function Search({ onChangeText }: { onChangeText: (text: string) => void }) {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <View style={styles.container}>
            <SVGSearch />
            <TextInput
                style={styles.input}
                placeholder="Search Products or store"
                placeholderTextColor="#8891A5"
                value={searchTerm}
                onChangeText={text => {
                    setSearchTerm(text);
                    setTimeout(() => {
                        onChangeText(text);
                    }, 500);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 5,
        backgroundColor: Colors.primary.b2,
        borderRadius: 28,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        color: Colors.neutral.n7,
    },
});
