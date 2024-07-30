// 아이템 50 오버로딩 타입보다는 조건부 타입을 사용하기

function double(x) {
  return x + x;
}



function double(x: number|string): number|string;
function double(x: any) { return x + x; }



const num = double(12);   // string | number
const str = double('x');  // string | number



function double<T extends number|string>(x: T): T;
function double(x: any) { return x + x; }

const num = double(12);   // 타입이 12
const str = double("x");  // 타입이 "x"



function double(x: number): number;
function double(x: string): string;
function double(x: any) { return x + x; }

const num = double(12);   // 타입이 number
const str = double('x');  // 타입이 string



function f(x: number|string) {
  return double(x);
             // ~ 'string | number' 형식의 인수는
             //   'string' 형식의 매개변수에 할당될 수 없습니다.
}



function double<T extends number | string>(
  x: T
): T extends string ? string : number;
function double(x: any) { return x + x; }



const num = double(12);   // number
const str = double('x');  // string

// function f(x: string | number): string | number
function f(x: number|string) {
  return double(x);
}



//    (number|string) extends string ? string : number
// -> (number extends string ? string : number) |
//    (string extends string ? string : number)
// -> number | string
