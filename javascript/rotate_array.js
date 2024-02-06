function rotateArray(arr, k) {
  // copy arr to rotatedArr
  // iterate over arr
  // get each element's "new index" by adding k to its current index
  // if new index is < arr.length - 1
  // rotatedArr[newIndex] = current arr element
  // if new index is > arr.length - 1
  // new index should now equal new index - arr.length
  // rotatedArr[newIndex] = current arr element
  // return rotatedArr


  let rotatedArr = [...arr];

  for (let i = 0; i < arr.length; i++) {
    let newIdx = i + k;
    if (newIdx > (arr.length - 1)) {
      newIdx = newIdx % arr.length;
    }
    rotatedArr[newIdx] = arr[i];
  }
  return rotatedArr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));
  //k = 6
  // 0 => 6 => 2
  // 1 => 7 => 3
  // 2 => 8 => 0
  // 3 => 9 => 1

  console.log("");

  console.log("Expecting: [3, 4, 1, 2]");
  console.log("=>", rotateArray([1, 2, 3, 4], 6));
  //k = 6
  // 0 => 6 => 2
  // 1 => 7 => 3
  // 2 => 8 => 0
  // 3 => 9 => 1

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  // 1: 0 + 2 = 2
  // 2: 1 + 2 = 3 - 3 = 0
  // 3: 2 + 2 = 4 - 3 = 1

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));

  // 1 : 0 + 3 = 3 - 3 = 0
  // 2 : 1 + 3 = 4 - 3 = 1
  // 3 : 2 + 3 = 5 - 3 = 2


  console.log("");

  console.log("Expecting: []");
  console.log("=>", rotateArray([], 3));

  console.log("");

  console.log("Expecting: [2, 1, 1, 2, 3]");
  console.log("=>", rotateArray([1, 1, 2, 3, 2], 1));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
