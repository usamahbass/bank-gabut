import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../api';

export async function setStorage(token) {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (e) {
    console.log('error-post');
  }
}

export const getStorage = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      console.log("tokenya", token);
    }
  } catch (e) {
    console.log('error-get');
  }
};

export const removeStorage = async () => {
  try {
    await AsyncStorage.removeItem('token');
    getStorage();
  } catch (e) {
    console.log('error-remove');
  }
};

export function login(values) {
  return axios({
    method: 'post',
    url: `${api}/login`,
    data: values,
  });
}
