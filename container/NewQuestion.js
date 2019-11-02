import * as React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { purple, white, black } from '../utils/colors';
import BoxButton, { buttonType } from '../components/BoxButton';
import { addQuestion } from '../actions';

export class NewQuestion extends React.Component {
  constructor() {
    super();
    this.state = {
      question: '',
      answer: '',
    };
  }

  handleAddQuestion() {
    const { dispatch, cards, selectedCard } = this.props;
    const { question = '', answer = '' } = this.state;
    if (question.trim() === '') {
      alert('Please enter question');
    } else if (answer.trim() === '') {
      alert('Please enter answer');
    } else {
      dispatch(addQuestion(cards, selectedCard.id, { question, answer }));
      this.props.navigation.goBack();
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TextInput
          placeholder="Question"
          style={styles.textInput}
          value={this.state.question}
          onChangeText={text => this.setState({ question: text })}
        />
        <TextInput
          placeholder="Answer"
          style={styles.textInput}
          value={this.state.answer}
          onChangeText={text => this.setState({ answer: text })}
        />
        <BoxButton
          label={'Submit'}
          type={buttonType.INFO}
          onPress={() => this.handleAddQuestion()}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default connect(state => {
  return {
    selectedCard: state.selectedCard,
    cards: state.cards,
  };
})(NewQuestion);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  textInput: {
    height: 40,
    width: 300,
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 25,
  },
});
