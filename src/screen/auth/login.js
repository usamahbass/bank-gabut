import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {login, setData} from '../../redux/actions';
import {LoginStyles} from '../../styles';
import {login as loginApi, setStorage} from '../../services';
import * as Yup from 'yup';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Harus berupa email yang valid')
        .required('Email diperlukan'),
      password: Yup.string().required('Password diperlukan'),
    }),
    onSubmit: (values) => {
      setLoading(true);
      loginApi(values)
        .then((res) => {
          const payload = {
            token: res.data.data.token,
            role: res.data.data.user.role,
          };

          // dispatch login state
          dispatch(login());
          // dispatch payload data
          dispatch(setData(payload));
          // set token
          setStorage(res.data.data.token);

          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT);
        });
    },
  });
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={LoginStyles.content}>
        <View style={LoginStyles.header}>
          <Image
            style={LoginStyles.logo}
            source={require('../../assets/images/boring.png')}
          />
          <Text style={LoginStyles.title}>Bank Gabut</Text>
        </View>

        <View style={LoginStyles.container}>
          <View style={LoginStyles.loginContent}>
            <View style={LoginStyles.inputBox}>
              <Text
                style={
                  formik.errors.email
                    ? LoginStyles.inputTextError
                    : LoginStyles.inputText
                }>
                Email
              </Text>
              <TextInput
                placeholder="banksampahgabut@gabut.com"
                placeholderTextColor="#b0b0b0"
                register
                value={formik.values.email}
                onBlur={formik.handleBlur('email')}
                onChangeText={formik.handleChange('email')}
                style={
                  formik.errors.email
                    ? LoginStyles.inputError
                    : LoginStyles.input
                }
              />
              <Text style={LoginStyles.inputTextError}>
                {formik.errors.email}
              </Text>
            </View>

            <View style={LoginStyles.inputBox}>
              <Text
                style={
                  formik.errors.password
                    ? LoginStyles.inputTextError
                    : LoginStyles.inputText
                }>
                Password
              </Text>
              <TextInput
                placeholder="Masukkan Password"
                placeholderTextColor="#b0b0b0"
                value={formik.values.password}
                onBlur={formik.handleBlur('password')}
                onChangeText={formik.handleChange('password')}
                style={
                  formik.errors.password
                    ? LoginStyles.inputError
                    : LoginStyles.input
                }
              />
              <Text style={LoginStyles.inputTextError}>
                {formik.errors.password}
              </Text>
            </View>

            <TouchableOpacity
              onPress={formik.handleSubmit}
              style={LoginStyles.button}>
              <Text style={LoginStyles.buttonText}>
                {loading ? 'loading...' : 'Masuk'}
              </Text>
            </TouchableOpacity>

            <Text style={LoginStyles.separator}>atau</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('register')}
              style={LoginStyles.buttonRegister}>
              <Text style={LoginStyles.buttonTextRegister}>Daftar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
