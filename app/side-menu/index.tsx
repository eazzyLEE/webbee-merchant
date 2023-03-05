import React from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import { TypedUseSelectorHook, useSelector as selector } from 'react-redux';
import { RegularText } from '../../components';
import { RootState } from '../../store';

type TileViewProps = {
  onPress: () => void;
  title: string;
  style: ViewStyle
}
const TileView = ({ onPress, title, style }: TileViewProps) => (
    <TouchableOpacity onPress={onPress} style={[styles.tileView, style]}>
      {/* {icon} */}
      <RegularText title={title} style={styles.tileTitle} />
    </TouchableOpacity>
  );
  
  const SideMenuView = () => {
    const useSelector: TypedUseSelectorHook<RootState> = selector;
    const {categories} = useSelector((state) => state.category);

    return(
      <View style={styles.background}>
        {categories?.map((item) => (
          <>
            <TouchableOpacity style={{marginTop: 20, marginBottom: 10, marginLeft: 15}}>
              <RegularText title={item?.title} />
            </TouchableOpacity>
            <View style={styles.menuBorder} />
          </>
        ))}
        {/* <TileView
          title="Home"
          style={styles.homeTile}
          onPress={() => {}}
        /> */}
        <TouchableOpacity>
          <RegularText title="Category Settings" style={styles.menuSettings}/>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default SideMenuView;
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      paddingLeft: 25,
      paddingTop: 80,
    },
    profileRow: {
      width: 20,
    },
    profileName: {
      fontSize: 16,
    },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 40 / 2,
    },
    tileView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 40,
    },
    homeTile: {
      marginTop: 114,
    },
    tileTitle: {
      marginLeft: 15,
    },
    logoutTile: {
      marginTop: 112,
    },

    menuBorder: {
      height: 1,
      width: '65%',
      borderColor: 'rgba(0, 0, 0, 0.3)',
      borderWidth: 0.5,
      marginLeft: 10
    },
    menuSettings: {
      marginLeft: 15,
      marginTop: 50,
    },
  });