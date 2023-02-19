// DESCRIPTION:
// When given a string of space separated words, return the word with the longest length.  If there are multiple words with the longest length, return the last instance of the word with the longest length.

// EXAMPLE:
// 'red white blue' //returns string value of white
// 'red blue gold' //returns gold

export const longestWord = (stringOfWords: string) => {
  let longestWord;
  const wordsArray = stringOfWords.split(" ");
  longestWord = wordsArray[0];
  for (let i = 0; i < wordsArray.length; i++) {
    if (longestWord.length <= wordsArray[i].length) {
      longestWord = wordsArray[i];
    }
  }
  return longestWord;
};
