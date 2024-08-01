// 아이템 61 의존성 관계에 따라 모듈 단위로 전환하기

// 선언되지 않은 클래스 멤버

class Greeting {
  constructor(name) {
    this.greeting = 'Hello';
      // ~~~~~~~~ 'Greeting' 유형에 'greeting' 속성이 없습니다.
    this.name = name;
      // ~~~~ 'Greeting' 유형에 'name' 속성이 없습니다.
  }
  greet() {
    return this.greeting + ' ' + this.name;
             // ~~~~~~~~              ~~~~ ... 속성이 없습니다.
  }
}



class Greeting {
  greeting: string;
  name: any;
  constructor(name) {
    this.greeting = 'Hello';
    this.name = name;
  }
  greet() {
    return this.greeting + ' ' + this.name;
  }
}



// 타입이 바뀌는 값

const state = {};
state.name = 'New York';
   // ~~~~ '{}' 유형에 'name' 속성이 없습니다.
state.capital = 'Albany';
   // ~~~~~~~ '{}' 유형에 'capital' 속성이 없습니다.



const state = {
  name: 'New York',
  capital: 'Albany',
};  // 정상



interface State {
  name: string;
  capital: string;
}
const state = {} as State;
state.name = 'New York';   // 정상
state.capital = 'Albany';  // 정상



// @ts-check
/**
 * @param {number} num
 */
function double(num) {
  return 2 * num;
}

double('trouble');
    // ~~~~~~~~~ '"trouble"' 형식의 인수는
    //           'number' 형식의 매개변수에 할당될 수 없습니다.



/**
 * @param {number} num
 */
function double(num) {
  return 2 * num;
}
double('trouble');  // 정상



function double(num: number) {
  return 2 * num;
}

double('trouble');
    // ~~~~~~~~~ '"trouble"' 형식의 인수는
    //           'number' 형식의 매개변수에 할당될 수 없습니다.
