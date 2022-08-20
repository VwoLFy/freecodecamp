function randomFraction() {

    // Only change code below this line
  var randNum = Math.random();
  if (randNum == 0) {
    randNum = randomFraction();
    return randNum;
  } else {
    return randNum;
  }
    // Only change code above this line
  }

  function randomFraction2() {
    let randNum = 0;
    // Only change code below this line
    while (randNum==0) {
    randNum = Math.random();
    }
    return randNum;
  
    // Only change code above this line
  }