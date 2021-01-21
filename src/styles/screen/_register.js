import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const RegisterStyles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: wp('7'),
    marginTop: hp('5'),
  },
  desc: {
    flexDirection: 'row',
    fontFamily: 'Poppins-Regular',
  },
  registerText: {
    fontFamily: 'Poppins-Regular',
  },
  register: {
    marginLeft: wp('2'),
  },
  registerText2: {
    fontFamily: 'Poppins-Regular',
    color: '#25509D',
    textDecorationLine: 'underline',
  },
  registerContent: {
    marginTop: hp('5%'),
  },
  inputBox: {
    flexDirection: 'column',
    marginBottom: hp('1.5%'),
  },
  inputText: {
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
  inputTextError: {
    fontFamily: 'Poppins-Regular',
    color: 'red',
    fontSize: wp('3'),
  },
  input: {
    width: wp('87%'),
    height: hp('7.9%'),
    padding: wp('4'),
    borderRadius: 6,
    fontFamily: 'Poppins-Regular',
    shadowColor: '#000',
    elevation: 0.25,
    fontSize: wp('3.5%'),
    backgroundColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 0,
    },
  },
  inputError: {
    width: wp('87%'),
    height: hp('7.9%'),
    borderColor: 'red',
    borderWidth: 1,
    padding: wp('4'),
    borderRadius: 6,
    fontFamily: 'Poppins-Regular',
    shadowColor: '#000',
    elevation: 0.25,
    fontSize: wp('3.5%'),
    backgroundColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 0,
    },
  },
  button: {
    marginTop: hp('.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25509D',
    width: wp('87%'),
    height: hp('7.9%'),
    padding: wp('4'),
    borderRadius: 6,
  },
  buttonText: {
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    fontSize: wp('4'),
  },
});

export default RegisterStyles;
