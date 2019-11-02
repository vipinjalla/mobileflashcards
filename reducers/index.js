import {
  FETCH_CARDS_INITIATED,
  FETCH_CARDS_SUCCESS,
  SELECT_CARD,
  UPDATE_CARDS,
  RESET,
} from '../actions';

const cardReducer = (state = { cards: {}, selectedCard: {} }, action) => {
  const { type, payload } = action;
  let nextState;
  switch (type) {
    case RESET:
    case FETCH_CARDS_INITIATED:
      nextState = { ...state, cards: {}, selectedCard: {} };
      break;
    case FETCH_CARDS_SUCCESS:
      nextState = { ...state, cards: { ...state.cards, ...payload.cards } };
      break;
    case SELECT_CARD:
      nextState = { ...state, selectedCard: payload.selectedCard };
      break;
    case UPDATE_CARDS:
      nextState = {
        ...state,
        cards: payload.cards,
        selectedCard: { ...payload.cards[state.selectedCard.id] },
      };
      break;
    default:
      nextState = { ...state };
  }
  return nextState;
};

export default cardReducer;
