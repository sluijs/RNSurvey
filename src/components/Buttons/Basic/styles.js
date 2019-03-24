import { StyleSheet } from 'react-native';
import { thm } from '../../../styles/common';

const styles = StyleSheet.create({
  button: {
    width: thm.bscbtn.WIDTH,
    height: thm.bscbtn.HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: thm.c.PRIMARY,
    borderRadius: 999,
  },
});

export default styles;
