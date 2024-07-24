// 아이템 23 한꺼번에 객체 생성하기

const pt = {};
pt.x = 3;
pt.y = 4;



const pt = {};
pt.x = 3;
// ~ '{}' 형식에 'x' 속성이 없습니다.
pt.y = 4;
// ~ '{}' 형식에 'y' 속성이 없습니다.



interface Point { x: number; y: number; }
const pt: Point = {};
   // ~~ '{}' 형식에 'Point' 형식의 x, y 속성에 없습니다.
pt.x = 3;
pt.y = 4;



const pt = {
  x: 3,
  y: 4,
};  // 정상



const pt = {} as Point;
pt.x = 3;
pt.y = 4;  // 정상



const pt: Point = {
  x: 3,
  y: 4,
};



const pt = {x: 3, y: 4};
const id = {name: 'Pythagoras'};
const namedPoint = {};
Object.assign(namedPoint, pt, id);
namedPoint.name;
        // ~~~~ '{}' 형식에 'name' 속성이 없습니다.



const namedPoint = {...pt, ...id};
namedPoint.name;  // 정상, 타입이 string



const pt0 = {};
const pt1 = {...pt0, x: 3};
const pt: Point = {...pt1, y: 4};  // 정상



declare let hasMiddle: boolean;
const firstLast = {first: 'Harry', last: 'Truman'};
const president = {...firstLast, ...(hasMiddle ? {middle: 'S'} : {})};



const president: {
  middle?: string;
  first: string;
  last: string;
}



declare let hasDates: boolean;
const nameTitle = {name: 'Khufu', title: 'Pharaoh'};
const pharaoh = {
  ...nameTitle,
  ...(hasDates ? {start: -2598, end: -2566} : {})
};



const pharaoh: {
  start: number;
  end: number;
  name: string;
  title: string;
} | {
  name: string;
  title: string;
}



pharaoh.start
     // ~~~~~ '{ name: string; title: string; }' 형식에
     //       'start' 속성이 없습니다.



function addOptional<T extends object, U extends object>(
  a: T, b: U | null
): T & Partial<U> {
  return {...a, ...b};
}

const pharaoh = addOptional(
  nameTitle,
  hasDates ? {start: -2589, end: -2566} : null
};
pharaoh.start  // 정상, 타입이 number | undefined
