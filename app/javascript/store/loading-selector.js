import { createSelector } from "redux-starter-kit";

export const loading = createSelector(
  ['loading.words', 'loading.translations'],
  (loadingWords, loadingTranslations) => {
    return loadingWords || loadingTranslations;
  }
);
