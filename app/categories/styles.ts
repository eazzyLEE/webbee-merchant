import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
    },
    noCategories: {
        textAlign: 'center'
    }
})

export const details = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
    },
    mainView: {
        backgroundColor: '#fff',
        borderRadius: 5,
        width: '90%',
        maxHeight: '75%',
        marginTop: 10,
        paddingVertical: 20,
        paddingLeft: 10
    },
    fieldGrid: {
        marginTop: 10,
    },
    fieldRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        width: '55%',
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 5,
        marginTop: 5,
        paddingLeft: 10,
    },
    dropdown: {
        width: '100%',
        padding: 0,
        minHeight: 40,
        fontSize: 13,
    },
    groupContainer: {
        width: '85%',
    },
    groupDropdown: {
        width: '100%',
        padding: 0,
        minHeight: 40,
        marginVertiical: 10,
        zIndex: 10
    },
    dropdownContainer: {
        height: 40,
        padding: 0,
    },
    titleLabel: {
        marginTop: 10,
    }
});
