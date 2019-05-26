
export const fullWord = (word) => {
  if (word.article) {
    return word.article + ' ' + word.german;
  } else {
    return word.german;
  }
}

export const displayDate = (date) => {
  if (!!date) {
    return new Date(date).toLocaleDateString("en-EN", {month: "short", day: "2-digit", year: "numeric"});
  } else {
    return '';
  }
};
