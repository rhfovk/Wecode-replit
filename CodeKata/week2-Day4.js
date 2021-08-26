/*
문제

nums는 숫자로 이루어진 배열입니다. 가장 자주 등장한 숫자를 k 개수만큼 return해주세요.
*/

function topK(nums, k) {
    let countNum = {};
    let count = 0;
    let result = [];
  
    for (let i of nums){ !countNum[i] ? countNum[i]=1 : countNum[i]++ }
  
    //sort함수를 이용하여 value값을 최대값부터 정렬시킨다.
    let array = Object.values(countNum).sort((a,b) => {return b-a});

    for(let i=0; i<Object.keys(countNum).length; i++){
        //map을 통해 value값으로 key을 찾아서 빈배열에 push한다.
      Object.keys(countNum).map(key => {
        if(countNum[key] === array[i]){
          result.push(parseInt(key));
        }
      })
    }
  //k 개수만큼 slice를 통해 배열을 잘라준다.
    return result.slice(0,k);
  }