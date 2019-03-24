//
//  Basic.js [Lists]
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

// React
import React, { Component } from 'react';
import { FlatList, View } from 'react-native';

// Third-party
import PropTypes from 'prop-types';

// Components
import BasicRow from '../../Rows/Basic/Basic';

// Layout
import styles from './styles';

class BasicList extends Component {
  /**
   * Initialize the state with the selected rows.
   * @param {Object} props Props.
   */
  constructor(props) {
    super(props);

    // Initialize the selected items
    const { selected } = this.props;
    this.state = {
      selected: new Map(selected.map(s => [s, true])),
    };
  }

  /**
   * Render a row
   * @param  {Object} item All necessary information for a row.
   */
  renderItem = ({ item }) => {
    const { questionId, toggleAnswer, single } = this.props;
    const value = Number.parseInt(item.key, 10);

    return (
      <BasicRow
        item={item}
        toggleAnswer={() => {
          // Update the Redux store
          toggleAnswer(questionId, value);

          // Update the local selections state
          this.setState((state) => {
            // copy the map rather than modifying state.
            const selected = single ? new Map() : new Map(state.selected);
            selected.set(value, !selected.get(value)); // toggle
            return { selected };
          });
        }}
      />
    );
  };

  /**
   * Render a seperator between the rows
   */
  renderListSeparator = () => (
    <View style={styles.separator} />
  );

  /**
   * Render a list with options to select.
   */
  render() {
    // Convert options to a format the list can use
    const { options } = this.props;
    const { selected } = this.state;

    const items = options.map(o => ({
      key: o.option_id.toString(),
      text: o.description,
      selected: !!selected.get(o.option_id),
    }));

    // const { options } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.box}
          alwaysBounceVertical={false}
          data={items}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderListSeparator}
        />
      </View>
    );
  }
}

// Props
BasicList.propTypes = {
  questionId: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    option_id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  toggleAnswer: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(
    PropTypes.number,
  ).isRequired,
  single: PropTypes.bool,
};

BasicList.defaultProps = {
  single: false,
};

export default BasicList;
