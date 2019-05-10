export const postReview = (translationId, review) => {
  const body = JSON.stringify({ review: review });

  console.log('postReview');
  console.log(body);

  fetch(`/api/v1/translations/${translationId}/reviews`, { method: 'post', headers: { "Content-Type": "application/json" }, body: body })
    .then((response) => { console.log(response) })
};
