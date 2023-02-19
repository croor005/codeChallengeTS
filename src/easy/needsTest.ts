// write a function that takes two parameters. The first parameter is an array that can contain only strings, only integers or a mix of both. The second parameter is a key that is either a single string or integer.
// this function should remove any items from the original array that match the key
// if no values match the key, false should be returned

export const needsTest = (array: any, key: any) => {
  let foundKey = false;
  for (let i = 0; i < array.length; i++) {
    if (key === array[i]) {
      array.splice(i, 1);
      foundKey = true;
    }
  }
  if (foundKey == false) {
    return false;
  } else {
    return array;
  }
};
