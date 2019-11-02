import * as React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { purple, white, black } from '../utils/colors';
import BoxButton, { buttonType } from '../components/BoxButton';

export class DeckDetails extends React.Component {
  renderQuizButton = (questions = []) => {
    if (questions.length === 0) {
      return null;
    }
    return (
      <BoxButton
        label={' Start Quiz'}
        type={buttonType.INFO}
        onPress={() => this.props.navigation.navigate('Quiz')}
      />
    );
  };

  render() {
    const { card = {} } = this.props;
    const { title, questions = [] } = card;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.count}>{`${questions.length} Cards`}</Text>
        <BoxButton
          label={' Add Card'}
          type={buttonType.ACTION}
          onPress={() => this.props.navigation.navigate('NewQuestion')}
        />
        {this.renderQuizButton(questions)}
      </View>
    );
  }
}

export default connect(state => {
  return {
    card: state.selectedCard,
  };
})(DeckDetails);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  count: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
});
