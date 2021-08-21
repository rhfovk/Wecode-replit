/* 문제
reverse 함수에 정수인 숫자를 인자로 받습니다.
그 숫자를 뒤집어서 return해주세요.

x: 숫자
return: 뒤집어진 숫자를 반환!

예들 들어,
x: 1234
return: 4321

x: -1234
return: -4321

x: 1230
return: 321
*/

// 풀이
const reverse = x => {
  
    let string = x.toString();
    let result = "";
    let newNum = string.replace(/\-/g,'');
    
      if(x < 0){
      for(let i=newNum.length-1; i>=0; i--){
      result = result.concat(newNum[i]);
      }
      return Number(result * -1) ; 
    } else{
      for(let i=newNum.length-1; i>=0; i--){
      result = result.concat(newNum[i]);
      }
        return Number(result);
    
    }
    }


// 또 다른 풀이(철진님의 풀이)
const reverse = x => {
    let numArray = x.toString().split('');
    let result = numArray.reverse();
    if (x < 0) {
    // parseInt앞에 '-'를 붙이면 '-'가 붙어서 출력
      return -parseInt(result.join(''));
    } else {
      return parseInt(result.join(''));
    }
  }
