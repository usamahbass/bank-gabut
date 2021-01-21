import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../redux/actions';
import {
  LoginScreen,
  RegisterScreen,
  ForgetPasswordScreen,
  HomeNasabahScreen,
  HomePengurus1Screen,
  HomePengurus2Screen,
  SplashScreen,
} from '../screen';
import 'react-native-gesture-handler';
import storage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const options = {
  headerShown: false,
};

const AuthStack = () => (
  <Stack.Navigator screenOptions={options}>
    <Stack.Screen name="login" component={LoginScreen} />
    <Stack.Screen name="register" component={RegisterScreen} />
  </Stack.Navigator>
);

const NasabahStack = () => (
  <Stack.Navigator screenOptions={options}>
    <Stack.Screen name="home-nasabah" component={HomeNasabahScreen} />
  </Stack.Navigator>
);

const Pengurus1Stack = () => (
  <Stack.Navigator screenOptions={options}>
    <Stack.Screen name="home-pengurus1" component={HomePengurus1Screen} />
  </Stack.Navigator>
);

const Pengurus2Stack = () => (
  <Stack.Navigator screenOptions={options}>
    <Stack.Screen name="home-pengurus2" component={HomePengurus2Screen} />
  </Stack.Navigator>
);

const Routes = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {auth, user} = useSelector((state) => state);

  useEffect(() => {
    // splash screen
    const splashScreen = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(splashScreen);
    };
  }, []);

  useEffect(() => {
    storage.getItem('token').then(() => dispatch(login()));
  }, []);

  return (
    <NavigationContainer>
      {loading ? (
        <SplashScreen />
      ) : !auth ? (
        <AuthStack />
      ) : user.role === 1 ? (
        <NasabahStack />
      ) : user.role === 2 ? (
        <Pengurus1Stack />
      ) : user.role === 3 ? (
        <Pengurus2Stack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Routes;
