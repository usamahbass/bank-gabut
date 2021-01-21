import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Contents = ({children}) => {
  return <View style={styles.content}>{children}</View>;
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#F6F8FB',
    height: 'auto',
    marginBottom: hp('3%')
  },
});

export default Contents;
