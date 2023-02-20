// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// EXAMPLE:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

export const moveZeros = (
  arr: (string | number | boolean | null | object | Array<[]>)[]
) => {
  let foundKey = false;
  const key = 0;
  let foundCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (key === arr[i]) {
      arr.splice(i, 1);
      foundKey = true;
      foundCount++;
    }
  }
  if (!foundKey) {
    return false;
  } else {
    for (let j = 0; j < foundCount; j++) {
      arr.push(key);
    }
    return arr;
  }
};
