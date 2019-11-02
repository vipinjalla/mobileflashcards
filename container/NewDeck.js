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
import { addCard } from '../actions';

export class NewDeck extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  handleAddCard() {
    const { dispatch, cards = {} } = this.props;
    const { title = '' } = this.state;
    if (title.trim() === '') {
      alert('Please enter deck title');
    } else {
      dispatch(addCard(cards, { title }));
      this.props.navigation.goBack();
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>Title of deck</Text>
        <TextInput
          placeholder="Deck title"
          style={styles.textInput}
          value={this.state.title}
          onChangeText={text => this.setState({ title: text })}
        />
        <BoxButton
          label={'Submit'}
          type={buttonType.INFO}
          onPress={() => {
            this.handleAddCard();
          }}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default connect(state => {
  return {
    cards: state.cards,
  };
})(NewDeck);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
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
