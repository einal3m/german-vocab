
export const getAllTranslations = (userId) => {
  return fetch(`/api/v1/translations?user_id=${userId}`)
    .then((response) => response.json());
};

export const getTranslation = (userId, wordId) => {
  return fetch(`/api/v1/translations/edit?user_id=${userId}&word_id=${wordId}`)
    .then((response) => response.json());
};

export const getProgress = (callback) => {
  fetch(`/api/v1/translations/progress?user_id=1`)
    .then((response) => {return response.json()})
    .then((translations) => callback(translations));
};

export const getTranslationsForReview = (callback) => {
  fetch(`/api/v1/translations/review?user_id=1`)
    .then((response) => {return response.json()})
    .then((translations) => callback(translations));
};

export const saveTranslation = (translation) => {
  if (translation.id) {
    putTranslation(translation);
  } else {
    postTranslation(translation);
  }
}

const putTranslation = (translation) => {
  const body = JSON.stringify({ translation: translation });

  console.log('putTranslation');
  console.log(body);

  fetch(`/api/v1/translations/${translation.id}`, { method: 'put', headers: { "Content-Type": "application/json" }, body: body })
    .then((response) => { console.log(response) })
};

const postTranslation = (translation) => {
  const body = JSON.stringify({ translation: translation });

  console.log('postTranslation');
  console.log(body);

  fetch('/api/v1/translations', { method: 'post', headers: { "Content-Type": "application/json" }, body: body })
    .then((response) => { console.log(response) })
};
