import { getAllTranslations, getTranslation } from '../api/translation-api';
import { startLoading, finishedLoading } from './loading-reducer';
import { storeTranslations } from './translations-reducer';
import { storeTranslation, storeDefaultTranslation } from './edit-translation-reducer';

export const fetchTranslations = () => dispatch => {
  startLoading('translations');
  const userId = 1;

  getAllTranslations(userId).then(translations => {
    dispatch(storeTranslations(translations));
    finishedLoading('translations');
  });
};

export const fetchTranslation = (wordId) => dispatch => {
  startLoading('translation');
  const userId = 1;

  getTranslation(userId, wordId).then(translation => {
    if (!!translation) {
      dispatch(storeTranslation(translation));
    } else {
      dispatch(storeDefaultTranslation({ userId: userId, wordId: wordId}));
    }
    finishedLoading('translation');
  });
};
