//---------------------------------------------------------------------------------
// Promises

// The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([523, 883, 432, 974]);
  }, 1500);
});

const getRecipe = recipeId => {
  return new Promise((resolve, reject) => {
    setTimeout(
      ID => {
        const recipe = { title: "fresh tomato pasta", publisher: "max" };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      // by declaring recipeID at end of setTimeout we are inputing the value of 'recipeId' into the set timeout function as 'ID'
      recipeId
    );
  });
};

const GetRelated = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(
      pub => {
        const recipe = { title: "Italian pizza", publisher: "Max" };
        resolve(`${recipe.publisher}: ${recipe.title}`);
      },
      1500,
      publisher
    );
  });
};

//THEN. handles resolve of the promise
//IDs result of promise resolve
getIDs
  .then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[2]);
  })
  .then(recipe => {
    console.log(recipe);
    return GetRelated();
  })
  .then(recipe => {
    console.log(recipe);
  })
  // handles the reject of the promise
  .catch(error => {
    console.log(error);
  });
