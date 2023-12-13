import React from 'react';
import { View, TextInput } from 'react-native';
import SVGSearch from 'app/assets/icons/search.svg';

export default function Search() {
    return (
        <View>
            <SVGSearch />
            <TextInput placeholder="Search Products or store" />
        </View>
    );
}
