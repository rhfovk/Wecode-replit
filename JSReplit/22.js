/*
최소(min), 최대값(max)을 받아 그 사이의 랜덤수를 return 하는 함수를 구현해주세요.

    - 함수는 짧지만, 이번에는 수학의 뇌를 조금 써야 하는 assignment 입니다. 🙌
    - 앞으로 랜덤함수를 쓸 일이 정말 많습니다.
    - 그런데 Math.random() 으로는 내가 원하는 범위의 랜덤수를 얻을 수가 없습니다.
    - 항상 0.0000000000000000에서 0.9999999999999999 사이 값만 return 해주기 때문이죠.
    
*/

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
