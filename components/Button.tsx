import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';

type ButtonProps = {
    disabled?: boolean;
    onPress: () => void;
    style?: ViewStyle;
    title: string;
    titleStyle?: TextStyle;
};

const Button = ({disabled, onPress, style, title, titleStyle}: ButtonProps) => (
    <TouchableOpacity onPress={onPress} style={[styles.button, disabled && {backgroundColor: 'grey'}, style]} disabled={disabled}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#087EC1',
        width: '85%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    title: {
        color: '#fff'
    }
})

export {Button};