import { createSelector } from "redux-starter-kit";

export const wordForEditTranslation = createSelector(
  ['words', 'editTranslation.wordId'],
  (words, wordId) => {
    return words.find(word => word.id == wordId);
  }
);
