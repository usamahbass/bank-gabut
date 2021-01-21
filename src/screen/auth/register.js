import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {Contents, Container} from '../../components';
import {useFormik} from 'formik';
import {RegisterStyles} from '../../styles';
import * as Yup from 'yup';
import {register} from '../../services';

const Register = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      nama_lengkap: '',
      email: '',
      password: '',
      telepon: '',
      lokasi: '',
    },
    validationSchema: Yup.object().shape({
      nama_lengkap: Yup.string().required('Nama Lengkap diperlukan'),
      email: Yup.string()
        .email('Harus berupa email yang valid')
        .required('Email diperlukan'),
      password: Yup.string().required('Password diperlukan'),
      telepon: Yup.string().required('Nomor Telepon diperlukan'),
      lokasi: Yup.string().url().required('Lokasi diperlukan'),
    }),
    onSubmit: (values) => {
      setLoading(true);
      register(values)
        .then(() => {
          setLoading(false);
          ToastAndroid.show('Login Berhasil !', ToastAndroid.SHORT);
          navigation.push('/login');
        })
        .catch(() => setLoading(false));
    },
  });

  const registerType = [
    {
      label: 'Nama Lengkap',
      placeholder: 'Usamah Basalamah',
      type: 'nama_lengkap',
      error: formik.errors.nama_lengkap,
      value: formik.values.nama_lengkap,
    },
    {
      label: 'Email',
      placeholder: 'bass@gmail.com',
      type: 'email',
      error: formik.errors.email,
      value: formik.values.email,
    },
    {
      label: 'Password',
      placeholder: '',
      type: 'password',
      error: formik.errors.password,
      value: formik.values.password,
    },
    {
      label: 'Telepon',
      placeholder: '089788900',
      type: 'telepon',
      error: formik.errors.telepon,
      value: formik.values.telepon,
    },
    {
      label: 'Lokasi',
      placeholder: 'http://gmaps.com/askjdkajshd',
      type: 'lokasi',
      error: formik.errors.lokasi,
      value: formik.values.lokasi,
    },
  ];

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <Contents>
          <Container>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/images/arrow-left.png')} />
            </TouchableOpacity>

            <Text style={RegisterStyles.title}>Daftar</Text>
            <View style={RegisterStyles.desc}>
              <Text style={RegisterStyles.registerText}> Punya akun ?</Text>
              <TouchableOpacity
                onPress={() => navigation.push('login')}
                style={RegisterStyles.register}>
                <Text style={RegisterStyles.registerText2}>Login Yuk</Text>
              </TouchableOpacity>
            </View>

            <View style={RegisterStyles.registerContent}>
              {registerType.map((el, i) => (
                <View key={i} style={RegisterStyles.inputBox}>
                  <Text
                    style={
                      el.error
                        ? RegisterStyles.inputTextError
                        : RegisterStyles.inputText
                    }>
                    {el.label}
                  </Text>
                  <TextInput
                    placeholder={el.placeholder}
                    placeholderTextColor="#b0b0b0"
                    value={el.value}
                    keyboardType={el.type === 'telepon' ? 'phone-pad' : el.type === "password" ? "visible-password" : null}
                    onBlur={formik.handleBlur(`${el.type}`)}
                    onChangeText={formik.handleChange(`${el.type}`)}
                    style={
                      el.error
                        ? RegisterStyles.inputError
                        : RegisterStyles.input
                    }
                  />
                  <Text style={RegisterStyles.inputTextError}>{el.error}</Text>
                </View>
              ))}

              <TouchableOpacity
                onPress={formik.handleSubmit}
                style={RegisterStyles.button}>
                <Text style={RegisterStyles.buttonText}>
                  {loading ? 'loading...' : 'Masuk'}
                </Text>
              </TouchableOpacity>
            </View>
          </Container>
        </Contents>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Register;
