import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

export const BoldText = ({ title, style }: {title: string, style?: TextStyle}) => (
    <Text style={[styles.boldText, style]}>{title}</Text>
)

export const RegularText = ({ title, style }: {title: string, style?: TextStyle}) => (
    <Text style={[styles.regularText, style]}>{title}</Text>
)

const styles = StyleSheet.create({
    boldText: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    regularText: {
        // fontWeight: 'bold',
        fontSize: 14,
    }
})