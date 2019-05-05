
export const postUser = (name) => {
  fetch(`/api/v1/users?name=${name}`, { method: 'post' })
    .then((response) => { console.log(response) })
};
