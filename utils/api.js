import { AsyncStorage } from 'react-native';
import { generateCardID } from './helper';

const CARDS_STORAGE_ID = 'CARDS_STORAGE_ID';

export const reset = () => {
  return AsyncStorage.removeItem(CARDS_STORAGE_ID);
};

export const fetchCards = () => {
  return AsyncStorage.getItem(CARDS_STORAGE_ID);
};

export const saveData = cards => {
  return AsyncStorage.setItem(CARDS_STORAGE_ID, JSON.stringify(cards));
};

export const addQuestion = (cards, cardID, newQuestion) => {
  const updatedCards = {
    ...cards,
    [cardID]: {
      ...cards[cardID],
      questions: [...cards[cardID].questions, newQuestion],
    },
  };
  saveData(updatedCards);
  return updatedCards;
};

export const addCard = (cards = {}, newCard) => {
  const newCardID = generateCardID();
  const updatedCards = {
    ...cards,
    [newCardID]: { id: newCardID, title: newCard.title, questions: [] },
  };
  saveData(updatedCards);
  return updatedCards;
};
