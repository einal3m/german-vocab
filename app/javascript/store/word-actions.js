import { getAllWords } from '../api/word-api';
import { startLoading, finishedLoading } from './loading-reducer';
import { storeWords } from './words-reducer';

export const fetchWords = () => dispatch => {
  startLoading('words');

  getAllWords().then((words) => {
    dispatch(storeWords(words));
    finishedLoading('words');
  });
};
