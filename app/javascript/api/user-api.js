
export const postUser = (name) => {
  console.log('postUser', name);
  fetch(`/api/v1/users?name=${name}`, { method: 'post' })
    .then((response) => { console.log(response) })
};
