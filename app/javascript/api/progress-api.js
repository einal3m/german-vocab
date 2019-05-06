
export const getProgress = (word_id, callback) => {
  fetch(`/api/v1/progresses?word_id=${word_id}`)
    .then((response) => {return response.json()})
    .then((progress) => callback(progress[0] || defaultProgress(word_id)));
};

export const getAllProgresses = (callback) => {
  fetch(`/api/v1/progresses?user_id=1`)
    .then((response) => {return response.json()})
    .then((progresses) => callback(progresses));
};

const defaultProgress = (word_id) => {
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

export const saveProgress = (progress) => {
  if (progress.id) {
    putProgress(progress);
  } else {
    postProgress(progress);
  }
}

const putProgress = (progress) => {
  const body = JSON.stringify({ progress: progress });

  console.log('putProgress');
  console.log(body);

  fetch(`/api/v1/progresses/${progress.id}`, { method: 'put', headers: { "Content-Type": "application/json" }, body: body })
    .then((response) => { console.log(response) })
};

const postProgress = (progress) => {
  const body = JSON.stringify({ progress: progress });

  console.log('postProgress');
  console.log(body);

  fetch('/api/v1/progresses', { method: 'post', headers: { "Content-Type": "application/json" }, body: body })
    .then((response) => { console.log(response) })
};
