/*
find_longest_word 함수를 만들어 주세요.

주어진 리스트안에 있는 단어중 가장 긴 단어를 찾을수 있도록 함수를 완성해주세요.

console.log(find_longest_word(["PHP", "Exercises", "Backend"])) 
// --> "Exercises"
*/

function find_longest_word(arr) {
    //map을 통해서 longArr에 배열 내의 각 단어의 문자길이를 반환
    const longArr = arr.map(x => x.length);
    //Math.max로 그 중 가장 긴 값을 저장
    let resultNum = Math.max(...longArr);
    //indexOf로 LongArr에서의 resultNum가장 큰 숫자와 길이가 같은 값의 index 번호를 반환
    let result = longArr.indexOf(resultNum);
    //arr에서의 result번 째 단어를 출력
    return arr[result];
}


const arr =["PHP", "Exercises", "Backend"];
