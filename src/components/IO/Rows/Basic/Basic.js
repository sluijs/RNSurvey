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

// Components
import Checkbox from '../../../Misc/Checkbox/Checkbox';

// Layout
import styles from './styles';

/**
 * A row from a BasicList. Only includes a title.
 * @param {Object} item         Has attributes selected and text.
 * @param {Object} toggleAnswer Callback for onPress.
 * @param {Object} radio        Is this a radio button
 */
const BasicRow = ({ item, toggleAnswer, radio }) => (
  <TouchableOpacity
    onPress={() => toggleAnswer()}
    activeOpacity={0.9}
    style={[styles.container, item.selected ? styles.active : null]}
  >
    <Checkbox size={13} checked={item.selected} radio={radio} />
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
  radio: PropTypes.bool.isRequired,
};

export default BasicRow;
