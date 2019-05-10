
export const getTranslation = (word_id, callback) => {
  fetch(`/api/v1/translations?word_id=${word_id}`)
    .then((response) => {return response.json()})
    .then((translations) => callback(translations[0] || defaultTranslation(word_id)));
};

export const getAllTranslations = (callback) => {
  fetch(`/api/v1/translations?user_id=1`)
    .then((response) => {return response.json()})
    .then((translations) => callback(translations));
};

const defaultTranslation = (word_id) => {
  return {
    word_id: word_id,
    user_id: 1,
    translation: '',
    example: '',
    seen: false,
    learnt: false,
    count: 0,
  };
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
