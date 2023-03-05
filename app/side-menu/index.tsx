import React from 'react';
import {TouchableOpacity, View, ViewStyle} from 'react-native';
import { TypedUseSelectorHook, useSelector as selector } from 'react-redux';
import { RegularText } from '../../components';
import { RootState } from '../../store';
import {styles} from './styles';

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
  
  const SideMenuView = ({close}: {close: () => void}) => {
    const useSelector: TypedUseSelectorHook<RootState> = selector;
    const {categories} = useSelector((state) => state.category);

    return(
      <View style={styles.background}>
        {categories?.map((item) => (
          <>
            <TouchableOpacity style={styles.categoryButton}>
              <RegularText title={item?.title} />
            </TouchableOpacity>
            <View style={styles.menuBorder} />
          </>
        ))}
        <TouchableOpacity onPress={close}>
          <RegularText title="Category Settings" style={styles.menuSettings}/>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default SideMenuView;
  