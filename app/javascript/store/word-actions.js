import { getAllWords } from '../api/word-api';
import { startLoading, finishedLoading } from './loading-reducer';
import { storeWords } from './words-reducer';
import store from './store';

export const fetchWords = () => dispatch => {
  if (store.getState().words.length > 0) return;

  startLoading('words');

  getAllWords().then((words) => {
    dispatch(storeWords(words));
    finishedLoading('words');
  });
};
