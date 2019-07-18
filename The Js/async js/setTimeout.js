//---------------------------------------------------------------------------------
// Basic Async

const second = () => {
  setTimeout(() => {
    console.log("Async");
    //means 2 seconds
  }, 2000);
};

const first = () => {
  console.log("Hey there");
  second();
  console.log("the end");
};

first();

//---------------------------------------------------------------------------------
// Basic setTimeouts

function getRecipe() {
  setTimeout(() => {
    const recipeId = [523, 883, 432, 974];
    console.log(recipeId);

    setTimeout(
      id => {
        const recipe = { title: "fresh tomato pasta", publisher: "max" };
        console.log(`${id}: ${recipe.title}`);

        setTimeout(
          publisher => {
            const recipe = { title: "Italian pizza", publisher: "max" };
            console.log(recipe);
          },
          1500,
          recipe.publisher
        );
      },
      1500,
      recipeId[2]
    );
  }, 1500);
}

getRecipe();
