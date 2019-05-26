import store from './store';
import { getAllTranslations, getTranslation, putTranslation, postTranslation } from '../api/translation-api';
import { startLoading, finishedLoading } from './loading-reducer';
import { storeTranslations } from './translations-reducer';
import { storeTranslation } from './edit-translation-reducer';

export const fetchTranslations = () => dispatch => {
  dispatch(startLoading('translations'));
  const userId = 1;

  getAllTranslations(userId).then(translations => {
    dispatch(storeTranslations(translations));
    dispatch(finishedLoading('translations'));
  });
};

export const fetchTranslation = (wordId) => dispatch => {
  dispatch(startLoading('translation'));
  const userId = 1;

  getTranslation(userId, wordId).then(translation => {
    dispatch(storeTranslation(translation));
    dispatch(finishedLoading('translation'));
  });
};

export const saveTranslation = () => dispatch => {
  const translation = store.getState().editTranslation.translation;
  const action = translation.id ? putTranslation : postTranslation;

  action(translation).then(translation => {
    dispatch(storeTranslation(translation));
  });
};
