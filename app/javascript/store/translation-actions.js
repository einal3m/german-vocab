import { getAllTranslations } from '../api/translation-api';
import { startLoading, finishedLoading } from './loading-reducer';
import { storeTranslations } from './translations-reducer';

export const fetchTranslations = () => dispatch => {
  startLoading('translations');

  getAllTranslations(1).then((translations) => {
    dispatch(storeTranslations(translations));
    finishedLoading('translations');
  });
};
