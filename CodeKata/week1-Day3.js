/* 문제
String 형인 str 인자에서 중복되지 않은 알파벳으로 이루어진 제일 긴 단어의 길이를 반환해주세요.

str: 텍스트 return: 중복되지 않은 알파벳 길이 (숫자 반환)

예를 들어, str = "abcabcabc" return 은 3 => 'abc' 가 제일 길기 때문

str = "aaaaa" return 은 1 => 'a' 가 제일 길기 때문

str = "sttrg" return 은 3 => 'trg' 가 제일 길기 때문
*/

// 풀이(은정님의 풀이)
const getLengthOfStr = str => {
  let countMax = 0; 
  let countString = ''; 
  
  for(let i=0; i<str.length; i++) {
      //countString이라는 문자열에 str의 문자가 있는 지 확인
    let indexOfStr = countString.indexOf(str[i]);
    
    // 만약 있다면 있는 위치까지 문자열을 자르고 countString에 저장
    if (countString !== -1) {
      countString = countString.substr(indexOfStr + 1);
    }
    
    // 확인한 문자열을 countString에 저장
    countString += str[i];

    // 잘린 문자열과 저장된 문자열을 비교하여 길이가 긴 것을 출력
    countMax = Math.max(countMax, countString.length);
}
  return countMax;
}