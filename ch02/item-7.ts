// 아이템 7 타입이 값들의 집합이라고 생각하기

const x: never = 12;
   // ~ '12' 형식은 'never' 형식에 할당할 수 없습니다.



type A = 'A';
type B = 'B';
type Twelve = 12;



type AB = 'A' | 'B';
type AB12 = 'A' | 'B' | 12;



const a: AB = 'A';  // 정상, 'A'는 집합 {'A', 'B'}의 원소입니다.
const c: AB = 'C';
   // ~ '"C"' 형식은 'AB' 형식에 할당할 수 없습니다.



// 정상, {"A", "B"}는 {"A", "B"}의 부분 집합입니다.
const ab: AB = Math.random() < 0.5 ? 'A' : 'B';
const ab12: AB12 = ab;  // 정상 {"A", "B"}는 {"A", "B", 12}의 부분 집합입니다.

declare let twelve: AB12;
const back: AB = twelve;
   // ~~~~ 'AB12' 형식은 'AB' 형식에 할당할 수 없습니다.
   //        '12' 형식은 'AB' 형식에 할당할 수 없습니다.



type Int = 1 | 2 | 3 | 4 | 5 // | ...



interface Identified {
  id: string;
}



interface Person {
  name: string;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}
type PersonSpan = Person & Lifespan;



const ps: PersonSapn = {
  name: 'Alan Turing',
  birth: new Date('1912/06/23'),
  death: new Date('1954/06/07'),
};  // 정상



type K = keyof {Person | Lifespan};  // 타입이 never



keyof (A&B) = (keyof A) | (keyof B)
keyof (A|B) = (keyof A) & (keyof B)



interface Person {
  name: stirng;
}
interface PersonSpan extends Person {
  birth: Date;
  death?: Date;
}



interface Vector1D { x: number; }
interface Vector2D extends Vector1D { y: number; }
interface Vector3D extends Vector2D { z: number; }



interface Vector1D { x: number; }
interface Vector2D { x: number; y: number; }
interface Vector3D { x: number; y: number; z: number; }



function getKey<K extends string>(val: any, key: K) {
  // ...
}



getKey({}, 'x');                              // 정상, 'x'는 string을 상속
getKey({}, Math.random() < 0.5 ? 'a' : 'b');  // 정상, 'a'|'b'는 string을 상속
getKey({}, document.title);		      // 정상, string은 string을 상속
getKey({}, 12);
        // ~~ '12' 형식의 인수는 'string' 형식의 매개변수에 할당될 수 없습니다.



interface Point {
  x: number;
  y: number;
}
type PointKeys = keyof Point;  // 타입은 "x" | "y"

function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
  // ...
}
const pts: Point[] = [{x: 1, y: 1}, {x: 2, y: 0}];
sortBy(pts, 'x');  // 정상, 'x'는 'x'|'y'를 상속 (즉, keyof T)
sortBy(pts, 'y');  // 정상, 'y'는 'x'|'y'를 상속
sortBy(pts, Math.random() < 0.5 ? 'x' : 'y');
                   // 정상, 'x'|'y'는 'x'|'y'를 상속
sortBy(pts, 'z');
         // ~~~ '"z"' 형식의 인수는 '"x" | "y"' 형식의 매개변수에 할당할 수 없습니다.



const list = [1, 2];  // 타입은 number[]
const tuple: [number, number] = list;
   // ~~~~~ 'number[]' 타입은 '[number, number]' 타입의 0, 1 속성에 없습니다.



const triple: [number, number, number] = [1, 2, 3];
const double: [number, number] = triple;
   // ~~~~~~ '[number, number, number]' 형식은
   //        '[number, number]' 형식에 할당할 수 없습니다.
   //        'length' 속성의 형식이 호환되지 않습니다.
   //        '3' 형식은 '2' 형식에 할당할 수 없습니다.



type T = Exclude<string|Date, string|number>;  // 타입은 Date
type NonZeroNums = Exclude<number, 0>;	       // 타입은 여전히 number
