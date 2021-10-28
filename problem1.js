

function compare(str1, str2) {
  let substrLength = 0; 
  if (str1.length > str2.length) {
    substrLength = str2.length
    let comparedString = str1.substring(0,substrLength)
    return console.log(comparedString);
  } else {
    substrLength = str1.length
    let comparedString = str2.substring(0,substrLength)
    return console.log(comparedString);
  }
}

compare('KUDANIL', 'KUDA');