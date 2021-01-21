import * as React from 'react';
import {View, Text, Button} from 'react-native';
import { useDispatch } from 'react-redux';
import { removeStorage } from '../../services';
import { logout } from '../../redux/actions';

const HomeNasabah = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Halo Nasabah</Text>

      <Button title="Logout" onPress={() => {
        dispatch(logout());
        removeStorage();
      }} />
    </View>
  );
};

export default HomeNasabah;
