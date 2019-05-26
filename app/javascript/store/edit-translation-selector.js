import { createSelector } from "redux-starter-kit";

export const wordForEditTranslation = createSelector(
  ['words', 'editTranslation.wordId'],
  (words, wordId) => {
    return words.find(word => word.id == wordId);
  }
);

export const hasEdits = createSelector(
  ['editTranslation.original', 'editTranslation.translation'],
  (original, translation) => {
    return original.translation == translation.translation && original.example == translation.example && original.known == translation.known;
  }
);
