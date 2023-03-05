import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    categoryButton: {
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 15
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