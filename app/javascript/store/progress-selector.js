import { createSelector } from "redux-starter-kit";

export const allProgresses = createSelector(
  ['words', 'translations'],
  (words, translations) => {
    const translationsHash = translationsByWordId(translations);

    return words.map((word) => {
      return progress(word, translationsHash[word.id] || {});
    });
  }
);

export const filteredProgresses = createSelector(
  [allProgresses, 'search.filter', 'search.searchText'],
  (progresses, filter, searchText) => {
    if (filter == 'text') {
      return progresses.filter(progress => progress.german.toLowerCase().includes(searchText.toLowerCase()));
    } else if (filter == 'translated') {
      return progresses.filter(progress => !!progress.translation);
    } else {
      return [];
    }
  }
);

const translationsByWordId = (translations) => {
  return translations.reduce((map, translation) => (map[translation.word_id] = translation, map), {});
}

const progress = (word, translation) => {
  return {
    wordId: word.id,
    translationId: translation.id,
    german: word.german,
    article: word.article,
    translation: translation.translation,
    example: translation.example,
    learnt: translation.learnt,
    level: translation.level,
    reviewCount: translation.review_count,
    lastReview: translation.last_review,
  }
};
