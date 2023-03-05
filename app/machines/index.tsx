import { useRouter } from 'expo-router';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import { TypedUseSelectorHook, useSelector as selector } from 'react-redux';
import { RootState } from '../../store';
import { RegularText } from '../../components';
import {styles} from './styles';

const Machines = () => {
    const router = useRouter();
    const useSelector: TypedUseSelectorHook<RootState> = selector;

    const {machines} = useSelector((state) => state.category);

    useEffect(() => {
        router.push('/categories/CategoryDetail')
    }, [])

    return (
        <View style={styles.background}>
            {machines.length ? machines.map((machine) => (
                <View>
                    <RegularText title={machine?.title || 'Main'} />
                </View>
            )) : (
            <View style={{marginTop: 35, width: '85%'}}>
                <RegularText title="No machines exist at the moment. Your machines will appear here when you create them" style={styles.noMachines} />
            </View>
            )}
        </View>
    )
}

export default Machines;
