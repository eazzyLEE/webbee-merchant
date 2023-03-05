import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { TypedUseSelectorHook, useSelector as selector } from 'react-redux';
import Feather from '@expo/vector-icons/Feather';
import { Button, RegularText } from '../../components';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootState } from '../../store';
import { Fab } from 'native-base';

export default function TabOneScreen() {
  const router = useRouter();
  const useSelector: TypedUseSelectorHook<RootState> = selector;
  const {categories, machines} = useSelector((state) => state.category);

  // const machineCountText = machines.length === 0 ? 'No machines yet' : `${machines.length} machines`;
  const singleMachine = categories.length === 1;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome User!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      {categories.length > 0 ? (
        <View>
          <RegularText title={`${categories.length} machine ${singleMachine ? 'Category' : 'Categories'}`} style={styles.mainText} />
          <RegularText title="Modify your machine category configurations" style={styles.subText} />

          <View style={styles.miniSeparator} />

          {categories.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => router.push({pathname: '/categories/CategoryDetail', params: {data: JSON.stringify(item)}})} style={{height: 45, width: '65%', marginVertical: 10, borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)', justifyContent: 'space-between', paddingLeft: 10, borderRadius: 5, flexDirection: 'row', alignItems: 'center'}}>
              <RegularText title={item?.title} />
              <Feather
                    name="chevron-right"
                    size={20}
                    color={'#070707'}
                    style={{ marginRight: 15 }}
                    />
            </TouchableOpacity>
          ))}

          <Fab
            placement="bottom-right"
            colorScheme="blue"
            size="lg"
            style={{bottom: 85}}
            onPress={() => router.push('/categories/CategoryDetail')}
            icon={<Feather
              name="plus"
              size={30}
              color={'#fff'}
              style={{ marginRight: 15 }}
              />}
          />
        </View>
      ) : (
      <View style={styles.noDataView}>
        <Text style={styles.noDataText}>You do not have categories set up for your machines. Tap the button below to set up your first category</Text>
       <Button title='Set Up' onPress={() => router.push('categories')} style={styles.button} />
      </View>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 25,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  noDataView: {
    width: '90%',
    alignItems: 'center'
  },
  noDataText: {
    textAlign: 'center',
    width: '90%',
    lineHeight: 19,
  },
  button: {
    marginTop: 15,
  },

  mainText: {
    fontSize: 16,
    fontWeight: '500'
  },
  subText: {
    fontSize: 12,
    fontStyle: 'italic',
    color: 'rgba(0, 0, 0, 0.7)',
    marginTop: 5,
  },

  miniSeparator: {
    marginVertical: 10,
    height: 1,
    borderWidth: 1,
    // borderColor: 
    width: '40%',
    borderColor: '#f2f2f2', // 'rgba(255,255,255,0.1)',
  }
});
