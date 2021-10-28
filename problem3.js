console.log('PROBLEM 3 ARRAY UNIQUE \n')

function ArrayUnique(arr1, arr2) {
  let difference = arr1.filter(x => !arr2.includes(x));
  return difference;
}

console.log(ArrayUnique([1, 2, 3, 4], [1, 3, 5, 10, 16])) // [2 4]
console.log(ArrayUnique([10, 20, 30, 40], [5, 10, 15, 59])) // [20 30 40]
console.log(ArrayUnique([1, 3, 7], [1, 3, 5])) // [7]
console.log(ArrayUnique([3, 8], [2, 8])) // [3]
console.log(ArrayUnique([1, 2, 3], [3, 2, 1])) // []