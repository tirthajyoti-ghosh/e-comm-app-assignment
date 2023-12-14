import React from 'react';
import { Pressable, ViewStyle, StyleSheet, Text } from 'react-native';

import * as Colors from 'app/styles/colors';
import * as Typography from 'app/styles/typography';

type ButtonProps = {
    title: string;
    onPress: () => void;
    type: 'primary' | 'secondary';
    style?: ViewStyle;
};

export default function Button({ title, onPress, type, style }: ButtonProps) {
    return (
        <Pressable onPress={onPress} style={{ ...style, ...styles[type] }}>
            <Text style={styles[`${type}Text`]}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    secondary: {
        backgroundColor: Colors.neutral.white,
        borderColor: Colors.primary.b1,
        borderWidth: 1,
        borderRadius: 20,
    },
    primary: {
        backgroundColor: Colors.primary.b1,
        borderColor: Colors.primary.b1,
        borderWidth: 1,
        borderRadius: 20,
    },
    primaryText: {
        ...Typography.button.button1_14,
        color: Colors.neutral.white,
    },
    secondaryText: {
        ...Typography.button.button1_14,
        color: Colors.primary.b1,
    },
});
