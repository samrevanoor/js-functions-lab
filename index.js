// JS Functions Lab:

// 1. 

function maxOfTwoNumbers(x,y){
    if (x > y){
      return x;
    } else if (x <= y){
      return y;
    }
  }
  
  console.log("#1 Max of Two Numbers: ")
  console.log(maxOfTwoNumbers(19,23))
  console.log(maxOfTwoNumbers(6,6))
  console.log(maxOfTwoNumbers(-72,20))
  
  // 2. 
  
  const maxOfThree = (x, y, z) => {
    if (z >= y === true && z >= x === true){
      return z;
    } else if (y >= z === true && y >= x === true){
      return y;
    } else if (x >= y === true && x >= z === true){
      return x;
    }
    }
  
  console.log("#2 Max of Three Numbers: ")
  console.log(maxOfThree(71,7,3))
  console.log(maxOfThree(1,14,65))
  console.log(maxOfThree(8076,923,76))
  console.log(maxOfThree(-8076,923,76))
  
  
  // I also tried this, but it kept freezing my Repl and I'm not sure why :(
  // const maxOfThree = (x, y, z) => {
  //   let maxArray = new Array(x, y, z);
  //   let max = maxArray[0];
  //   for (let i = 1; i = maxArray.length; i++){
  //     if (maxArray[i] > max){
  //       max = maxArray[i];
  //     }
  //   }
  //   return max;
  // }
  
  // 3. 
  
  function isCharAVowel(x){
    let formattedX = x.toLowerCase();
    if (formattedX === "a" || formattedX === "e" || formattedX === "i" || formattedX === "o" || formattedX === "u"){
      return true;
    } else {
      return false;
    }
  }
  
  console.log("#3 Is this character a vowel: ")
  console.log(isCharAVowel("d"))
  console.log(isCharAVowel("U"))
  console.log(isCharAVowel("g"))
  console.log(isCharAVowel("Q"))
  console.log(isCharAVowel("i"))
  
  // 4. 
  
  const sumArray = function(arr){
    let total = 0;
    arr.forEach(function(value){
      total += value
    })
    return total;
  }
  
  console.log("#4 The sum of an array: ")
  console.log(sumArray([2,4,5]))
  console.log(sumArray([21,34,15]))
  console.log(sumArray([17,30]))
  console.log(sumArray([1,24,92,56,23,100]))
  
  // 5. 
  
  function multipleArray(arr){
    let total = 1;
    arr.forEach(function(value){
      total = total * value
    })
    return total;
  }
  
  console.log("#5 The product of an array: ")
  console.log(multipleArray([2,4,5]))
  console.log(multipleArray([21,34,15]))
  console.log(multipleArray([17,30]))
  console.log(multipleArray([1,24,92,56,23,100]))
  console.log(multipleArray([1,24,92,56,23,100,0]))
  
  // 6. 
  
  const numArgs = function() {
    return arguments.length;
  }
  
  console.log("#6 The number of arguments entered: ")
  console.log(numArgs(1,2,3,4,5))
  console.log(numArgs([21,34,15]))
  console.log(numArgs([17,30],[1]))
  console.log(numArgs(1,24,92,56,23,100))
  console.log(numArgs("dog", "cat", "hamster", "chimpanzee"))
  
  // 7. 
  
  function reverseString(word){
    let arrayOfString = Array.from(word);
    let reverseArray = [];
    for (let i = arrayOfString.length - 1; i >= 0; i--){
      reverseArray.push(arrayOfString[i]);
    }
    const newWord = reverseArray.join('');
    return newWord;
  }
  
  console.log("#7 The reversed string: ")
  console.log(reverseString("dog"))
  console.log(reverseString("rockstar"))
  console.log(reverseString("my name is sam"))
  
  
  // 8. 
  
  const longestStringInArray = function(arr){
    let longestString = "";
    arr.forEach(function(string){
      if (longestString.length < string.length){
        longestString = string;
      }
    })
    return longestString;
  }
  
  // another option!
  // const longestStringInArray = function(arr){
  //   let longestString;
  //   let length = 0;
  //   for (var i = 0; i < arr.length; i++) {
  //     if (arr[i].length > length) {
  //     let length = arr[i].length;
  //     longestString = arr[i];
  //   }
  // }
  //   return longestString;
  // }
  
  console.log("#8 The longest string: ")
  console.log(longestStringInArray(["hey", "hi", "hello"]))
  console.log(longestStringInArray(["happiness", "ivy", "cherry", "mariners apartment complex", "gold rush"]))
  console.log(longestStringInArray(["this is a string", "this is also a string", "this is also a string", "this is a string too"]))
  
  // 9. 
  
  function stringsLongerThan(arr, num){
    let newArray = [];
    arr.forEach(function(string){
      if (string.length > num){
      newArray.push(string)
      }
    })
    return newArray;
  }
  
  console.log("#9 Strings longer than the specified number: ")
  console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))
  console.log(stringsLongerThan(["happiness is a butterfly", "ivy", "cherry", "right where you left me", "california"], 9))