import {fetchCards as fetchCardsAPI, addCard as addCardAPI, addQuestion as addQuestionAPI, reset as resetAPI} from '../utils/api';

export const FETCH_CARDS_INITIATED = 'FETCH_CARDS_INITIATED';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const SELECT_CARD = 'SELECT_CARD';
export const UPDATE_CARDS = 'UPDATE_CARDS';
export const RESET = 'RESET';

export const reset = () => {
return dispatch => {
    resetAPI();
    dispatch({
      type: RESET
    });
  }
};

export const fetchCards = () => {
  return dispatch => {
    dispatch({type: FETCH_CARDS_INITIATED});
    fetchCardsAPI().then(data => {
      const cards = JSON.parse(data);
      if (cards) {
        dispatch({
          type: FETCH_CARDS_SUCCESS,
          payload: {cards}
        });
      }      
    });
  }  
};

export const selectCard = (card) => {
  return dispatch => {
    dispatch({
      type: SELECT_CARD,
      payload: {selectedCard: card}
    });
  }
};

export const addCard = (cards, newCard) => {
  return dispatch => {
    const updatedCards = addCardAPI(cards, newCard);
    dispatch({
      type: UPDATE_CARDS,
      payload: {cards: updatedCards}
    });
  }
};

export const addQuestion = (cards, cardID, newQuestion) => {
  return dispatch => {
    const updatedCards = addQuestionAPI(cards, cardID, newQuestion);
    dispatch({
      type: UPDATE_CARDS,
      payload: {cards: updatedCards}
    });
  }
};

