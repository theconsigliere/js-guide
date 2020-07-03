/*
 'Pasta with tomato and Spinach'

 acc: 0 / accumulator + currentWord.length = 5 / newTitle = ['Pasta']
 acc: 5 / accumulator + currentWord.length = 9 / newTitle = ['Pasta', with]
 acc: 9 / accumulator + currentWord.length = 15 / newTitle = ['Pasta', with, 'tomato']
 acc: 15 / accumulator + currentWord.length = 18 / newTitle = ['Pasta', with, 'tomato']
 acc: 18 / accumulator + currentWord.length = 24 / newTitle = ['Pasta', with, 'tomato']
*/

const limitRecipeTitle = (title, limit = 17) => {
  const newTitle = [];
  // if title.length is longer than 17 we shorten it
  if (title.length > limit) {
    title.split(" ").reduce((accumculator, currentWord) => {
      if (accumculator + currentWord.length <= limit) {
        //pus current word into new title array
        newTitle.push(currentWord);
      }
      return accumculator + currentWord.length;
    }, 0);

    // return the result
    return `${newTitle.join(" ")} ...`;
  }
  // else we return the title
  return title;
};
