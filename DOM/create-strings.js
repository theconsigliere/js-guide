// CREATING HTML BY DUMPING STRINGS IN BACKTICKS

const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup <img onload="alert('HACKED')" src="https://picsum.photos/50"/>`;


const myHTML = `
  <div class="innerItem">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;


item.innerHTML = myHTML

// to add classes to this or event listeners we would have to grab element from DOM

const innerItem = document.querySelector('.innerItem')



// TURN A STRING INTO A DOM ELEMENT
//---------------------------------------
// that we can add classes or event listeners etc in our js application with out grabbing from page

// Grabs STRING turns it into a Document Fragment
const myFragment = document.createRange().createContextualFragment(myHTML);

// Outputs fragment to page
document.body.appendChild(myFragment);