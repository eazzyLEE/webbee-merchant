import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import { TypedUseSelectorHook, useDispatch, useSelector as selector } from 'react-redux';
import Dropdown from 'react-native-dropdown-picker';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useNavigation} from 'expo-router'
import { BoldText, Button, RegularText } from '../../components';
import { fieldTypes } from './utils';
import { RootState, store } from '../../store';
import { SET_CATEGORY } from '../../store/actions/types';
import { useRouter } from 'expo-router';
import { useRoute } from '@react-navigation/native';
import {details as styles} from './styles';

type FieldType = {
    title: string;
    type: string;
    visible: boolean;
}

const CategoryDetail = () => {
    const route = useRoute();
    const params = route.params ? JSON.parse(route?.params?.data) : {};
    const [name, setName] = useState(params?.title || '');
    const [fields, setFields] = useState<FieldType[]>(params?.fields || []);
    const [openIndex, setIndex] = useState(-1);
    const [groupTitle, setGroupTitle] = useState(params?.groupTitle || '');
    const [groupFieldVisible, setGroupFieldVisibility] = useState(false);
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const router = useRouter();
    const useSelector: TypedUseSelectorHook<RootState> = selector;
    const {categories} = useSelector((state) => state.category);

    const inactiveButton = fields[fields.length - 1]?.title.length < 1 || false;
    const navigation = useNavigation();

    const groupFields = fields.length > 1 ? fields.map((data) => ({label: data?.title, value: data?.title})) : [];

    useEffect(() => {
        if (error.length) {
            setError('')
        }
    }, [name]);

    const addField = () => setFields((prev) => {
        const oldArray = [...prev];
        oldArray.push({title: '', type: 'text', visible: false})
        return oldArray;
    });

    const deleteField = (position: number) => {
        const fieldSet = [...fields];
        fieldSet.splice(position, 1);
        setFields(fieldSet);
    }

    const modifyField = (prop: string, value: any, position: number) => {
        const fieldSet = [...fields];
        const obj = fieldSet[position];
        if (prop === 'input') {
            obj.title = value;
        } else if (prop === 'dropdown') {
            obj.type = value?.value;
        } else {
            obj.visible = !obj.visible;
        }
        
        fieldSet.splice(position, 1, obj);
        setFields(fieldSet);
    }

    const save = () => {
        const categoryExists = categories.find((category) => category.title === name);
        if (categoryExists) {
            setError('A category with this name already exists');
        } else {
            dispatch({type: SET_CATEGORY, payload: {title: name, fields, groupTitle}});
            navigation.goBack();
        }
    };

    return (
        <View style={styles.background}>
            <View style={styles.mainView}>
                <RegularText title="Category Name" />
                <TextInput value={name} onChangeText={(value) => setName(value)} style={[styles.input, {borderColor: error.length ? 'red' : 'grey'}]} />
                <RegularText title={error} style={{color: 'red', fontSize: 10, marginTop: 4}} />

                {fields.map((field, index) => {
                    return (
                        <View style={styles.fieldGrid}>
                            <RegularText title="Field" />
                            <View style={styles.fieldRow}>
                                <TextInput value={field?.title} onChangeText={(value) => modifyField('input', value, index)} style={styles.input} />
                                <View style={{zIndex: openIndex === index ? 5300 : -2, width: '30%'}}>
                                    <Dropdown open={field?.visible} value={field?.type} items={fieldTypes} setValue={() => {}} onSelectItem={(value) => modifyField('dropdown', value, index)} setOpen={() => modifyField('dropdown-visible', null, index)} style={styles.dropdown} containerStyle={styles.dropdownContainer} onOpen={() => setIndex(index)} closeAfterSelecting={true} />
                                </View>

                                <TouchableOpacity onPress={() => deleteField(index)}>
                                    <FontAwesome
                                        name="remove"
                                        size={25}
                                        color={'red'}
                                        style={{ marginRight: 15}}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                })}

                {fields.length > 0  ? (
                    <View style={styles.groupContainer}>
                        <RegularText title="Title Field" style={styles.titleLabel} />
                        <Dropdown
                            open={groupFieldVisible}
                            value={groupTitle} 
                            items={groupFields} 
                            setValue={() => {}} 
                            onSelectItem={(value) => setGroupTitle(value.value!)}
                            setOpen={() => setGroupFieldVisibility(!groupFieldVisible)}
                            style={styles.groupDropdown}
                            containerStyle={styles.dropdownContainer}
                            closeAfterSelecting={true}
                        />
                    </View>
                ) : <View />}

                <Button title="Add new field" onPress={addField} style={{height: 35, marginTop: 10, zIndex: -2, width: '90%'}} disabled={inactiveButton} />
            </View>
            <View style={{position: 'absolute', bottom: 45, width: '85%'}}>
                <Button title="Save" onPress={save} style={{height: 45, width: '100%'}} disabled={!name.length} />
                <TouchableOpacity style={{alignSelf: 'center', marginTop: 10}}>
                    <BoldText title="Delete Category" style={{color: 'red'}} />
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default CategoryDetail;
