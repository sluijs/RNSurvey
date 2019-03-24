import React from 'react';
import PropTypes from 'prop-types';
//import Animation from 'lottie-react-native';
import styles from './styles';
import anim from './Checkbox.json';


const Checkbox = active => (
  <View style={styles.container}>
    <Animation
      style={styles.animation}
      loop={false}
      autoPlay={active}
      source={anim}
    />
  </View>
);

Checkbox.propTypes = {
  active: PropTypes.bool,
};

Checkbox.defaultProps = {
  active: false,
};

export default Checkbox;
