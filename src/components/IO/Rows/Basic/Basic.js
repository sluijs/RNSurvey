//
//  Basic.js [Rows]
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

// React
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Third-party
import PropTypes from 'prop-types';

// Layout
import styles from './styles';

/**
 * A row from a BasicList. Only includes a title.
 * @param {Object} item         Has attributes selected and text.
 * @param {Object} toggleAnswer Callback for onPress.
 */
const BasicRow = ({ item, toggleAnswer }) => (
  <TouchableOpacity
    onPress={() => toggleAnswer()}
    activeOpacity={0.9}
    style={[styles.container, item.selected ? styles.active : null]}
  >
    <Text style={styles.text} numberOfLines={1}>
      {item.text}
    </Text>
  </TouchableOpacity>
);

// Props
BasicRow.propTypes = {
  item: PropTypes.shape({
    key: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  }).isRequired,
  toggleAnswer: PropTypes.func.isRequired,
};

export default BasicRow;
