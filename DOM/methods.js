const heading = document.querySelector('h2');

// gets all info between h2 tags, so could include span tags and etc
console.log(heading.textContent);

//only gets human readable content between h2 tags
console.log(heading.innerText);


//Gets all HTML between h2 tags
console.log(heading.innerHTML);


//Gets all HTML including h2 tags
console.log(heading.outerHTML);


//ADD TEXT TO END OF ELEMENT
//--------------------------------------------------------
// a faster way for applications
//https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement

//before
heading.insertAdjacentText('afterbegin', '🍕');


//after
heading.insertAdjacentText('beforeend', '🍕');

