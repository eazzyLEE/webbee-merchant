import SideMenu from '@chakrahq/react-native-side-menu';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import SideMenuView from '../side-menu';
import { useState } from 'react';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [sideMenuState, setSideMenu] = useState(false);

  return (
    <SideMenu menu={<SideMenuView />} isOpen={sideMenuState}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Category Settings',
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            headerLeft: () => (
              <Pressable onPress={() => setSideMenu(!sideMenuState)}>
                <Feather
                    name="menu"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginLeft: 15 }}
                    />
              </Pressable>
            ),
          }}
        />
        <Tabs.Screen
          name="Rented"
          options={{
            title: 'Rented',
            tabBarIcon: ({ color }) => <TabBarIcon name="file-text-o" color={color} />,
          }}
        />
      </Tabs>
    </SideMenu>
  );
}
