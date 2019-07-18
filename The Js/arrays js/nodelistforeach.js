// NODE LIST FOR EACH FUNCTION

var nodeListForEach = function(list, callback) {
  for (var i = 0; i < list.length; i++) {
    //callback recieves two values
    callback(list[i], i);
  }
};

// first argument called fields = list, both the current & index arguments = callback
nodeListForEach(fields, function(current, index) {
  if (percentages[index] > 0) {
    current.textContent = percentages[index] + "%";
  } else {
    current.textContent = "---";
  }
});
