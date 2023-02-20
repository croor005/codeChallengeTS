// write a function that takes two parameters. The first parameter is an array that can contain only strings, only integers or a mix of both. The second parameter is a key that is either a single string or integer.
// this function should remove any items from the original array that match the key
// if no values match the key, false should be returned

export const needsTest = (
  enteredArray: string[] | number[] | (string | number)[],
  key: string | number
) => {
  let foundKey = false;
  for (let i = 0; i < enteredArray.length; i++) {
    if (key === enteredArray[i]) {
      enteredArray.splice(i, 1);
      foundKey = true;
    }
  }
  if (!foundKey) {
    return false;
  } else {
    return enteredArray;
  }
};
