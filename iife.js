// IIFE
//--------------------------------------------------------------------------------

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}

game();

// in brackets cant a statement, treat this as an expression

//self invoked
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= goodLuck);
  //pass argument into function in callback brackets
})(5);

//true
