import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { Text, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Constants from 'expo-constants';
import cardReducer from './reducers';
import DeckList from './container/DeckList';
import DeckDetails from './container/DeckDetails';
import Quiz from './container/Quiz';
import NewQuestion from './container/NewQuestion';
import NewDeck from './container/NewDeck';

const MainNavigator = StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      title: "Home"
    }
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: {
      title: "Deck cards"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Quiz"
    }
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      title: "New Question"
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      title: "New Deck"
    }
  }
});

export default class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(cardReducer, applyMiddleware(thunkMiddleware))}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
