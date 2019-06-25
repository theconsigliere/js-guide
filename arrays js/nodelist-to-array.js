//ES6

const boxes = document.querySelectorAll(".box");

// how to return array from nodeList
//------------------------------------------------------------------------

//
// * The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

const boxesArr6 = Array.from(boxes);

//  * loop over element

boxesArr6.forEach(cur => (cur.style.backgroundColor = "green"));

// ES6 WAY
//------------------------------------------------------------------------
//spread every single item into array

const boxesArr6 = [...boxes];

// * EXAMPLE QUESTION. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const gategory = document.querySelector(".mw-category");
const links = Array.from(gategory.querySelectorAll("a"));

const de = links
  .map(link => link.textContent)
  .filter(streetName => streetName.includes("de"));

//returns

//(12) ["Boulevard de l'Amiral-Bruix", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard de Rochechouart", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard de la Zone"]`Ω
