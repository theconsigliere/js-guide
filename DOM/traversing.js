//TRAVERSING
//Select element depending on its position

//ELEMENTS
//-------------------------------------


const name = document.querySelector('.title')

//all of the child elements in an array
console.log(name.children)

// returns the object's first child Element, or null if there are no child elements.
console.log(name.firstElementChild);

// returns the object's last child Element
console.log(name.lastElementChild);

// eturns the Element immediately prior to the specified one in its parent's children list,
console.log(name.previousElementSibling);

// eturns the element immediately following the specified one in its parent's children list
console.log(name.nextElementSibling);


// gets parent element of selected item
console.log(name.parentElement);


// NODES
//-------------------------------------
// gets text nodes not just element selectors

name.childNodes
name.firstChild
name.lastChild
name.previousSibling
name.nextSibling
name.parentNode


//REMOVING ELEMENTS
//-------------------------------------

// removes element
name.remove()

//create an element add to the DOM then remove

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();
// removes from DOM but remains in js memory if you need to add back in

console.log(p);

document.body.appendChild(p);

