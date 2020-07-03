// HOW TO RUN SCRIPT TAG IN HTML HEADER

function init() {
    const p = document.querySelector('p')
    console.log(p)
}

document.addEventListener('DOMContentLoaded', init )


// SELECTING ELEMENTS

//first matching value
const p = document.querySelector('p')

//multiple values
const pAll = document.querySelectorAll('p')


// search within an element

pAll.querySelector('.last-p')



