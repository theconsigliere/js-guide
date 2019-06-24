//---------------------------------------------------------------------------------
// Async Await

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

//---------------------------------------------------------------------------------
// Async Await

// AWAIT only can be used in a async function
// async runs in background

//async function 'runs in background'
async function getRecipesAW() {
  //consume first promise, IDs becomes value of resolve promise
  const IDs = await getIDs;
  console.log(IDs);
  // returns array [523, 883, 432, 974]

  const recipe = await getRecipe(IDs[2]);
  console.log(recipe);
  //432: fresh tomato pasta

  const publisher = await GetRelated(recipe);
  console.log(publisher);
  // Max: Italian pizza

  //HOW TO RETURN A VALUE FROM A ASYNC FUNCTION
  // return variable
  return recipe;
}
// pass the recipe var into the result argument using hte 'THEN' method
getRecipesAW().then(result => console.log(`the result is ${result}`));
