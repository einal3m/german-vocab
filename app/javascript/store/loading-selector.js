import { createSelector } from "redux-starter-kit";

export const loading = createSelector(
  ['loading.words', 'loading.translations', 'loading.translation'],
  (loadingWords, loadingTranslations, loadingTranslation) => {
    return loadingWords || loadingTranslations || loadingTranslation;
  }
);
