function removeDupe(arr) {

  let removeDupes = arr.reduce(function(prevValue, tempValue) {
    if (prevValue.indexOf(tempValue) === -1) {
      prevValue.push(tempValue)
    }
    return prevValue
  }, [])
  console.log(removeDupes);
  console.log(removeDupes.length)
}

removeDupe([2, 3, 3, 3, 6, 9, 9]);