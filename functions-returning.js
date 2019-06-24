// functions returning functions
//--------------------------------------------------------------------------------

function interviewQuestion(job) {
  if (job === "designer") {
    //anonymous function becasue no name
    return function(name) {
      console.log(name + ", please explain UX");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log(name + ", please explain teaching");
    };
  } else {
    return function(name) {
      console.log("hello " + name + ", what do you do");
    };
  }
}

var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");

teacherQuestion("Max");
designerQuestion("Logan");

// Max, please explain teaching
// Logan, please explain UX

interviewQuestion("Builder")("mark");

// hello mark, what do you do
