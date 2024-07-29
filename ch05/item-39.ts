// 아이템 39 any를 구체적으로 변형해서 사용하기

function getLengthBad(array: any) {  // 이렇게 하지 맙시다!
  return array.length;
}

function getLength(array: any[]) {
  return array.length;
}



getLengthBad(/123/);  // 오류 없음, undefined를 반환합니다.
getLength(/123/);
       // ~~~~~ 'RegExp' 형식의 인수는
       //       'any[]' 형식의 매개변수에 할당될 수 없습니다.



function hasTwelveLetterKey(o: {[key: string]: any}) {
  for (const key in o) {
    if (key.length === 12) {
      return true;
    }
  }
  return false;
}



function hasTwelveLetterKey(o: object) {
  for (const key in o) {
    if (key.length === 12) {
      console.log(key, o[key]);
                    // ~~~~~~ '{}' 형식에 인덱스 시그니처가 없으므로
                    //        요소에 암시적으로 'any' 형식이 있습니다.
      return true;
    }
  }
  return false;
}



type Fn0 = () => any;                // 매개변수 없이 호출 가능한 모든 함수
type Fn1 = (arg: any) => any;        // 매개변수 1개
type FnN = (...args: any[]) => any;  // 모든 개수의 매개변수
                                     // "Function" 타입과 동일합니다.



const numArgsBad = (...args: any) => args.length;     // any를 반환합니다.
const numArgsGood = (...args: any[]) => args.length;  // number를 반환합니다.
