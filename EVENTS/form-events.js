// FORM EVENTS

// STOP DEFAULT ACTION

// Select link
const link = document.querySelector('.link');

link.addEventListener('click', function(event) {

// pulls up a agree or cancel prompt
  const shouldChangePage = confirm(
    'This website might be malicious!, do you wish to proceed?'
  );

// if prompt is cancelled, we do not run the link, if accepted link is run
  if (!shouldChangePage) {

    // prevents default form happening in this case the link from taking us to a different page
    event.preventDefault();
  }
});

//-------------------------------------------------------

// CHANGE FORM SUBMISSION DEPENDING ON VALUES PROVIDED

const signupForm = document.querySelector('[name="signup"]');


// when form is submited

function validate (event) {

    //grab elements inside a form
    const name = event.currentTarget.name.value;
    const email = event.currentTarget.email.value;
    const agree = event.currentTarget.agree.value;


//not case sensitive
    if (name.includes('chad')) {
      alert('Sorry bro');
      event.preventDefault();
    }
}

signupForm.addEventListener('submit', validate);

//DIFFERENT EVENTS FOR FORMS
//-------------------------------------------------------

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);


//-------------------------------------------------------

// LISTEN TO CLICK AND ENTER

const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('You clicked the photo');
  }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
