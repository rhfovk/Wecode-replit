/* 문제
숫자로 이루어진 배열인 nums를 인자로 전달합니다. 숫자중에서 과반수(majority, more than a half)가 넘은 숫자를 반환해주세요.
*/

function moreThanHalf(nums) {

const nums = [2,2,2,1,1,1,1];

let countNum = {};
let count = 0;

for (let i of nums){
  if(!countNum[i]){
    countNum[i]=1;
  }else{
    countNum[i]++
  }
}

for (const [key,value] of Object.entries(countNum)){
  if(value > nums.length/2){
    return parseInt(key);
  }
}
}