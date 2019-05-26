
export const getAllTranslations = (userId) => {
  const url = `/api/v1/translations?user_id=${userId}`;
  console.log(`GET ${url}`);

  return fetch(url)
    .then(response => response.json());
};

export const getTranslation = (userId, wordId) => {
  const url = `/api/v1/translations/edit?user_id=${userId}&word_id=${wordId}`;
  console.log(`GET ${url}`);

  return fetch(url)
    .then(response => response.json());
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

export const putTranslation = (translation) => {
  const body = JSON.stringify({ translation: translation });
  const url = `/api/v1/translations/${translation.id}`;
  console.log(`PUT ${url}`);

  return fetch(url, { method: 'put', headers: { "Content-Type": "application/json" }, body: body })
    .then(response => response.json());
};

export const postTranslation = (translation) => {
  const body = JSON.stringify({ translation: translation });
  const url = '/api/v1/translations';
  console.log(`POST ${url}`);

  return fetch(url, { method: 'post', headers: { "Content-Type": "application/json" }, body: body })
    .then(response => response.json());
};
