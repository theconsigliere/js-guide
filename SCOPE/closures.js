// CLOSURES
// closure is the ability to access a parent level scope from a child level scope
// even after the parent function has been terminated




function createGreeting(greeting = '') {
    const myGreet = greeting.toUpperCase();
    return function (name) {
      return `${myGreet} ${name}`;
    }
  }

  const sayHello = createGreeting('hello');
  const sayHey = createGreeting('hey');
  console.log(sayHello('wes'));
  console.log(sayHello('kait'));
  console.log(sayHey('kait'));

  //HELLO wes
  //HELLO Kait
  //HEY Kait


  function createGame(gameName) {
    let score = 0;
    return function win() {
      score++;
      return `Your name ${gameName} score is ${score}`;
    }
  }

  const hockeyGame = createGame('Hockey');
  hockeyGame()

  // your name Hockey score is 1

  const soccerGame = createGame('Soccer');
  soccerGame()

    // your name Soccer score is 1