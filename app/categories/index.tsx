import { useRouter } from 'expo-router';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import { TypedUseSelectorHook, useSelector as selector } from 'react-redux';
import { RootState } from '../../store';
import { RegularText } from '../../components';
import {styles} from './styles';

const Categories = () => {
    const router = useRouter();
    const useSelector: TypedUseSelectorHook<RootState> = selector;

    const {categories} = useSelector((state) => state.category);

    useEffect(() => {
        router.push('/categories/CategoryDetail')
    }, [])

    return (
        <View style={styles.background}>
            {categories.length ? categories.map((category) => (
                <View>
                    <RegularText title={category?.title || 'Main'} />
                </View>
            )) : (
            <View style={{marginTop: 35, width: '85%'}}>
                <RegularText title="No categories exist at the moment. Your categories will appear here when you create them" style={styles.noCategories} />
            </View>
            )}
        </View>
    )
}

export default Categories;
