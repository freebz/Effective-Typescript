// 아이템 8 타입 공간과 값 공간의 심벌 구분하기

interface Cylinder {
  radius: number;
  height: number;
}

const Cylinder = (radius: number, height: number) => ({radius, height});



function calculateVolume(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape.radius
       // ~~~~~~ '{}' 형식에 'radius' 속성이 없습니다.
  }
}



type T1 = 'string literal';
type T2 = 123;
const v1 = 'string literal';
const v2 = 123;



interface Person {
  first: string;
  last: string;
}
const p: Person = { first: 'Jane', last: 'Jacobs' };
//    ~           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 값
//       ~~~~~~                                      타입



function email(p: Person, subject: string, body: string): Response {
  //     ~~~~~ ~          ~~~~~~~          ~~~~                    값
  //              ~~~~~~           ~~~~~~        ~~~~~~   ~~~~~~~~ 타입
  // ...
}



class Cylinder {
  radius=1;
  height=1;
}

function calculateVolume(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape         // 정상, 타입은 Cylinder
    shape.radius  // 정상, 타입은 number
  }
}



type T1 = typeof p;       // 타입은 Person
type T2 = typeof email;
    // 타입은 (p: Person, subject: string, body: string) => Response

const v1 = typeof p;      // 값은 "object"
const v2 = typeof email;  // 값은 "function"



const v = typeof Cylinder;  // 값이 "function"
type T = typeof Cylinder;   // 타입이 typeof Cylinder



declare let fn: T;
const c = new fn();  // 타입이 Cylinder



type C = InstanceType<typeof Cylinder>;  // 타입이 Cylinder



const first: Person['first'] = p['first'];  // 또는 p.first
   // ~~~~~                    ~~~~~~~~~~ 값
   //        ~~~~~~~~~~~~~~~              타입



type PersonEl = Person['first' | 'last'];  // 타입은 string
type Tuple = [string, number, Date];
type TupleEl = Tuple[number];              // 타입은 string | number | Date



function email(options: {person: Person, subject: string, body: string}) {
  // ...
}



function email({person, subject, body}) {
  // ...
}



function email({
  person: Person,
       // ~~~~~~ 바인딩 요소 'Person'에 암시적으로 'any' 형식이 있습니다.
  subject: string,
        // ~~~~~~ 'string' 식별자가 중복되었습니다.
        //        바인딩 요소 'string'에 암시적으로 'any' 형식이 있습니다.
  body: string}
     // ~~~~~~ 'string' 식별자가 중복되었습니다.
     //        바인된 요소 'string'에 암시적으로 'any' 형식이 있습니다.
) { /* ... */ }



function email(
  {person, subject, body}: {person: Person, subject: string, body: string}
) {
  // ...
}
