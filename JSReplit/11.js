/*
index.js를 보고 아래 조건에 맞는 함수를 작성해주세요.

1. 데이터를 전달 받는 isbiggerThanHundred 이라는 이름의 함수를 만들어주세요. isbiggerThanHundred 함수에서 받은 argument를 myNumber라는 parameter에 저장해주세요.
2. isbiggerThanHundred 함수에서 myNumber가 100보다 크면 "크다!"라는 문자열을 return 해주세요.
3. myNumber가 100보다 작거나 같으면 "작다!"라는 문자열을 return 해주세요.
*/

// 첫 번째
function sayHi(name){
    return "안녕하세요" + " " + name + "님"
}
const result = sayHi("김관희");
console.log(result);


// 두 번째
function isbiggerThanHundred(num) {
  let myNumber = num;
  if (myNumber > 100) {
    return "크다!";
  }else {
    return "작다!";
  }
}

console.log(isbiggerThanHundred(12));