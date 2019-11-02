import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class DeckTitleView extends React.Component {
  render() {
    const {card={}} = this.props;
    const {questions=[]} = card;
    return (
      <View style={styles.container}>
        {
          this.props.children || 
          <TouchableOpacity onPress={() => {this.props.onPress()}}>
            <Text style={styles.title}>{card.title}</Text>
            <Text style={styles.count}>{`${questions.length} questions`}</Text>
          </TouchableOpacity> 
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  count: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
