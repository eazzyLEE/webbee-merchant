import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { NativeBaseProvider } from 'native-base';
import { useEffect } from 'react';
import { TouchableOpacity, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BoldText, RegularText } from '../components';
import { persistor, store } from '../store';
import Categories from './categories';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NativeBaseProvider>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
                <Stack.Screen name="categories/index" options={{ headerTitle: 'Categories' }} />
                <Stack.Screen name="categories/CategoryDetail" options={{ presentation: 'modal', headerTitle: 'Category Detail', }} />
              </Stack>
            </ThemeProvider>
          </NativeBaseProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
