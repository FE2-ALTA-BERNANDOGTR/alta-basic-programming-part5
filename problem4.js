function findMaxSumSubArray(k, arr) {
  let newArr = [];

  let maxSum = arr.reduce(function (prevValue, tempValue) {
    console.log('temp', tempValue);
    console.log('prev ', prevValue);
    prevValue + tempValue;
    return prevValue;
  })

  console.log(maxSum);

}

//findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2]) // 9
findMaxSumSubArray(2, [2, 3, 4, 1, 5])    // 7
// console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1]))    // 5
// console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1]))    // 7
// console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1]))    // 8