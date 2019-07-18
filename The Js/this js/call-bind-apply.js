// Bind, call & apply
//--------------------------------------------------------------------------------

var max = {
  name: "Max",
  age: 26,
  job: "designer",
  presentation: function(style, timeofDay) {
    if (style === "formal") {
      console.log(
        timeofDay +
          " I'm " +
          this.name +
          " I am a " +
          this.job +
          " I'm also " +
          this.age
      );
    } else if (style === "friendly") {
      console.log(
        "whats upp " +
          timeofDay +
          " I'm " +
          this.name +
          " I am a " +
          this.job +
          " I'm also " +
          this.age
      );
    }
  }
};

var emily = {
  name: "Emily",
  age: 35,
  job: "designer"
};

max.presentation("formal", "Morning");
// Morning I'm Max I am a designer I'm also 26

//--------------------------------------------------------------------------------
//CALL METHOD

//method borrowing

// call method lets us set the 'this' variable
// so we can use johns method on emily
max.presentation.call(emily, "friendly", "afternoon");
// whats upp afternoon I'm Emily I am a designer I'm also 35

//--------------------------------------------------------------------------------
//APPLY METHOD

// same as call method, sets 'this' variable but accepts other arguments as array only
//max.presentation.apply(emily, ['formal', afternoon]);

//--------------------------------------------------------------------------------
//BIND METHOD

// similar as other methods, sets 'this' variable excplictly
// generates copy of function
// always returns function

//first argument sets 'this' variable
var maxFriendly = max.presentation.bind(max, "friendly");

//sets second argument
maxFriendly("morning");

//whats upp morning I'm Max I am a designer I'm also 26

var emilyFormal = max.presentation.bind(emily, "formal");

emilyFormal("afternoon");
