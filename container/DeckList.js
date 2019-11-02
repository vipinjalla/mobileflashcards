import * as React from 'react';
import { connect } from 'react-redux';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { blue } from '../utils/colors';
import DeckTitleView from '../components/DeckTitleView';
import BoxButton, { buttonType } from '../components/BoxButton';
import { fetchCards, selectCard, reset } from '../actions';

export class DeckList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCards());
  }

  handleCardSelect(card) {
    this.props.dispatch(selectCard(card));
    this.props.navigation.navigate('DeckDetails');
  }

  renderAddCardAction() {
    return (
      <DeckTitleView>
        <BoxButton
          label={'Add Deck'}
          type={buttonType.INFO}
          onPress={() => this.props.navigation.navigate('NewDeck')}
        />
      </DeckTitleView>
    );
  }

  renderResetAction() {
    return (
      <DeckTitleView>
        <BoxButton
          label={'Reset'}
          type={buttonType.INFO}
          onPress={() => this.props.dispatch(reset())}
        />
      </DeckTitleView>
    );
  }

  renderEmptyState() {
    return <Text style={styles.emptyText}> No Cards available.</Text>;
  }

  renderCardsList = (cards = {}) => {
    return Object.keys(cards).map(card => {
      return (
        <DeckTitleView
          card={cards[card]}
          onPress={() => this.handleCardSelect(cards[card])}
        />
      );
    });
  };

  render() {
    const { cards = {} } = this.props;
    const cardsCount = Object.values(cards).length;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Flash Cards</Text>
        <Text style={styles.count}>
          {cardsCount === 1 ? '1 Deck' : `${cardsCount} Decs`}
        </Text>
        {this.renderAddCardAction()}
        {cardsCount === 0
          ? this.renderEmptyState()
          : this.renderCardsList(cards)}
        {cardsCount !== 0 && this.renderResetAction()}
      </ScrollView>
    );
  }
}

export default connect(state => {
  return {
    cards: state.cards,
  };
})(DeckList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    color: blue,
    fontWeight: 'bold',
    textAlign: 'center',
    borderTopWidth: 5,
    paddingTop: 10,
  },
  count: {
    fontSize: 16,
    color: blue,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth: 5,
    marginBottom: 15,
    paddingBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    paddingTop: 10,
  },
});
