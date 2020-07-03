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
