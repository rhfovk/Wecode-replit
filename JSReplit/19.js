/*
1. sliceCityFromAddress 함수는 address 를 인자로 받습니다.
2. address 는 주소를 나타내는 string 입니다.
3. 주어진 주소가 어느 도시 인지를 찾아 해당 주소에서 도시 부분만 삭제한 새로운 주소를 리턴해 주세요.
4. 도시는 무조건 "시" 로 끝납니다. 예를 들어, "서울시".
5. "도" 와 "시" 는 주소에 한번 밖에 포함되어 있지 않습니다.

예를 들어, 다음과 같은 주소가 주어졌다면;

"경기도 성남시 분당구 중앙공원로 53"

다음과 같은 값이 리턴되어야 합니다:

"경기도 분당구 중앙공원로 53"
*/

function sliceCityFromAddress(address) {
    let arr = address.split(" "); 
    for (let i = 0; i < arr.length; i++) { 
      if (arr[i][arr[i].length - 1] === "시") { 
          arr.splice(i,1); 
      }
    } address = arr.join(' ');
    return address;
  }