import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LoginStyles = StyleSheet.create({
  content: {
    backgroundColor: '#F6F8FB',
    height: hp('100%'),
  },
  container: {
    marginLeft: wp('6%'),
    marginRight: wp('6%'),
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('3%'),
  },
  title: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  logo: {
    width: wp('15%'),
    height: hp('15%'),
  },
  loginContent: {
    marginTop: hp('5%'),
  },
  inputBox: {
    flexDirection: 'column',
    marginBottom: hp('1.5%'),
  },
  inputText: {
    fontFamily: 'Poppins-Regular',
    color: '#333'
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
  forgotPassword: {
    marginBottom: hp('3%'),
  },
  forgotPasswordText: {
    color: '#25509D',
    textAlign: 'right',
    textDecorationLine: 'underline',
    textDecorationColor: '#25509D',
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
  separator: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    marginTop: hp('3%'),
    color: '#25509D',
  },
  buttonRegister: {
    marginTop: hp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#25509D',
    borderWidth: 1,
    width: wp('87%'),
    height: hp('7.9%'),
    padding: wp('4'),
    borderRadius: 6,
  },
  buttonTextRegister: {
    fontFamily: 'Poppins-Regular',
    color: '#25509D',
    fontSize: wp('4'),
  },
});

export default LoginStyles;
