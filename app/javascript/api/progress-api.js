
export const getProgress = (word_id, callback) => {
  fetch(`/api/v1/progresses?word_id=${word_id}`)
    .then((response) => {return response.json()})
    .then((progress) => callback(progress[0] || {}));
};
