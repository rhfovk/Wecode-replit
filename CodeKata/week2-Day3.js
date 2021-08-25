/* 문제

s는 여러 괄호들로 이루어진 String 인자입니다. s가 유효한 표현인지 아닌지 true/false로 반환해주세요.

종류는 '(', ')', '[', ']', '{', '}' 으로 총 6개 있습니다. 아래의 경우 유효합니다. 한 번 괄호를 시작했으면, 같은 괄호로 끝내야 한다. 괄호 순서가 맞아야 한다.
*/

function isValid(s) {
    const nums = s.split('');
    // 새로운 문자열 복사 
    let arr = s.slice();
  
    for(i=0;i<nums.length; i++){
  
      for(j=i+1;j<nums.length;j=j+2){
  
        let result=nums[i]+nums[j];
  
        if(result === '()' || result === '{}' || result === '[]'){
        // 새로운 문자열에 각 조건문을 빠져나온 각 문자를 replace로 빈배열("")로 대치
          arr = arr.replace(nums[i],"").replace(nums[j],"");
  
        }
  
      }
  
    }
  
    if(arr === ''){
      return true;
    }else{
      return false;
    }
  }
  