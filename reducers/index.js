import {FETCH_CARDS_INITIATED, FETCH_CARDS_SUCCESS, SELECT_CARD, UPDATE_CARDS, RESET} from '../actions';

// const initialState = {
//   cards: {
//     reactID: {
//       id: 'reactID',
//       title: 'React',
//       questions: [
//         {
//           question: 'What is React?',
//           answer: 'A library for managing user interfaces'
//         },
//         {
//           question: 'Where do you make Ajax requests in React?',
//           answer: 'The componentDidMount lifecycle event'
//         }
//       ]
//     },
//     javaScriptID: {
//       id: 'javaScriptID',
//       title: 'JavaScript',
//       questions: [
//         {
//           question: 'What is a closure?',
//           answer: 'The combination of a function and the lexical environment within which that function was declared.'
//         }
//       ]
//     }
//   }
// };

const cardReducer = (state={cards: {}}, action) => {
  const {type, payload} = action;
  let nextState;
  switch(type) {
    case RESET:
      nextState = {...state, cards: {}, selectedCard: {}};
    break;
    case FETCH_CARDS_INITIATED:
      nextState = {...state};
    break;
    case FETCH_CARDS_SUCCESS:
      nextState = {...state, cards: {...state.cards, ...payload.cards}};
    break;
    case SELECT_CARD:
      nextState = {...state, selectedCard: payload.selectedCard}
    break;
    case UPDATE_CARDS:
      nextState = {...state, cards: payload.cards, 
        selectedCard: {...payload.cards[state.selectedCard.id]}};
    break;
    default:
      nextState = {...state};
  }
  return nextState;
}

export default cardReducer;