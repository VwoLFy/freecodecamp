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