/*
1. 아래 조건을 읽고 이행해주세요.
getElement 함수안에 arr 변수를 선언했습니다.
arr 변수는 배열을 할당했고요, 배열에는 다양한 데이터 타입의 요소가 들어있네요!
배열이 담긴 arr 변수에 접근하여 getElement 함수가 "array" 라는 문자열을 return 할 수 있도록 해주세요.
2. addFirstAndLast 함수를 작성해주세요.
addFirstAndLast 함수에 주어진 인자 myArray는 숫자 값으로만 이루어진 array 입니다.
addFirstAndLast 함수에 주어진 인자 myArray 의 첫번째 element와 마지막 element의 값을 더한 값을 리턴해주세요.
만일 myArray에 한 개의 요소만 있다면 해당 요소의 값을 리턴해 주시고 요소가 없는 비어있는 array라면 0을 리턴해주세요.
*/

function getElement() {
    let arr = [3, [4, ["array", 9], 2+3], [0]];
    return arr.flat(2)[2];
  }
  
  
  // Assignment2 - 다음 함수 안에 코드를 구현하세요
  // ex) myArray = [3, 2, 5];
  function addFirstAndLast(myArray) {
    if (myArray.length === 1){
      return myArray[0];
    }else if(myArray.length === 0){
      return 0;
    }else{
      let result = myArray[0] + myArray[myArray.length - 1] 
      return result;
    }
  }