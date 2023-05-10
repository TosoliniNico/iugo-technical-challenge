function firstMostRepeatedLetter(word) {
  if (word.length === 0) {
    return -1;
  }
  const lowerCaseWord = word.toLowerCase();
  const letters = new Map();
  let mostRepeatedLetter = lowerCaseWord[0];
  let maxCount = 0;
  for (let i = 0; i < lowerCaseWord.length; i++) {
    const letter = lowerCaseWord[i];
    if (letters.has(letter)) {
      const count = letters.get(letter) + 1;
      letters.set(letter, count);
      if (
        count > maxCount ||
        (count === maxCount &&
          lowerCaseWord.indexOf(letter) <
            lowerCaseWord.indexOf(mostRepeatedLetter))
      ) {
        mostRepeatedLetter = letter;
        maxCount = count;
      }
    } else {
      letters.set(letter, 1);
    }
  }
  return lowerCaseWord.indexOf(mostRepeatedLetter);
}

module.exports = firstMostRepeatedLetter;
