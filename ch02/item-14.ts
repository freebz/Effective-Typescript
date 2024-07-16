// 아이템 14 타입 연산과 제네릭 사용으로 반복 줄이기

console.log('Cylinder 1 x 1 ',
  'Surface area:', 6.283185 * 1 * 1 + 6.283185 * 1 * 1,
  'Voolume:', 3.14159 * 1 * 1 * 1);
console.log('Cylinder 1 x 2 ',
  'Surface area:', 6.283185 * 1 * 1 + 6.283185 * 2 * 1,
  'Volume:', 3.14159 * 1 * 2 * 1);
console.log('Cylinder 2 x 1',
  'Surface area:', 6.283185 * 2 * 1 + 6.283185 * 2 * 1,
  'Volume:', 3.14159 * 2 * 2 * 1);



const surfaceArea = (r, h) => 2 * Math.PI * r * (r + h);
const volume = (r, h) => Math.PI * r * r * h;
for (const [r, h] of [[1, 2], [1, 2], [2, 1]]) {
  console.log(
    `Cylinder ${r} x ${h}`,
    `Surface area: ${surfaceArea(r, h)}`,
    `Volume: ${volume(r, h)}`);
}



interface Person {
  firstName: string;
  lastName: string;
}

interface PersonWithBirthDate {
  firstName: string;
  lastName: string;
  birth: Date;
}



function distance(a: {x: number, y: number}, b: {x: number, y: number}) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}



interface Point2D {
  x: number;
  y: number;
}
function distance(a: Point2D, b: Point2D) { /* ... */ }



function get(url: string, opts: Options): Promise<Reponse> { /* ... */ }
function post(url: string, opts: Options): Promise<Response> { /* ... */ }



type HTTPFunction = (url: string, opts: Options) => Promise<Response>;
const get: HTTPFunction = (url, opts) => { /* ... */ };
const post: HTTPFunction = (url, opts) => { /* ... */ };



interface Person {
  firstName: string;
  lastName: string;
}

interface PersonWithBirthDate extends Person {
  birth: Date;
}



type PersonWithBirthDate = Person & { birth: Date };



interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}

interface TopNavState {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
}



type TopNavState = {
  userId: State['userId'];
  pageTitle: State['pageTitle'];
  recentFiles: State['recentFiles'];
};



type TopNavState = {
  [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k]
};



type Pick<T, K> = { [k in K]: T[k] };



type TopNavState = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;



interface SaveAction {
  type: 'save';
  // ...
}
interface LoadAction {
  type: 'load';
  // ...
}
type Action = SaveAction | LoadAction;
type ActionType = 'save' | 'load';  // 타입의 반복;



type ActionRec = Pick<Action, 'type'>;  // {type: "save" | "load"}



interface Options {
  width: number;
  height: number;
  color: string;
  label: string;
}
interface OptionsUpdate {
  width?: number;
  height?: number;
  color?: string;
  label?: string;
}
class UIWidget {
  constructor(init: Options) { /* ... */ }
  update(options: OptionsUpdate) { /* ... */ }
}



type OptionsUpdate = {[k in keyof Options]?: Options[k]};



type OptionsKeys = keyof Options;
// 타입이 "width" | "height" | "color" | "label"



class UIWidget {
  constructor(init: Options} { /* ... */ }
  update(options: Partial<Options>) { /* ... */ }
}



const INIT_OPTIONS = {
  width: 640,
  height: 480,
  color: '#00FF00',
  label: 'VGA'
};
interface Options {
  width: number;
  height: number;
  color: string;
  label: string;
}



type Options = typeof INIT_OPTIONS;



function getUserInfo(userId: string) {
  // ...
  return {
    userId,
    name,
    age,
    height,
    weight,
    favoriteColor,
  };
}
// 추론된 반환 타입은 { userId: string; name: string; age: number, ... }



type UserInfo = ReturnType<typeof getUserInfo>;



interface Name {
  first: string;
  last: string;
}
type DancingDuo<T extends Name> = [T, T];

const couple1: DancingDuo<Name> = [
  {first: 'Fred', last: 'Astaire'},
  {first: 'Ginger', last: 'Rogers'}
];  // OK
const couple2: DancingDuo<{first: string}> = [
                       // ~~~~~~~~~~~~~~~
                       // 'Name' 타입에 필요한 'last' 속성이
                       // '{ first: string; }' 타입에 없습니다.
  {first: 'Sonny'},
  {first: 'Cher'}

];



const dancingDuo = <T extends Name>(x: DancingDuo<T>) => x;
const couple1 = dancingDuo([
  {first: 'Fred', last: 'Astaire'},
  {first: 'Ginger', last: 'Rogers'}
]);
const couple2 = dancingDuo([
  {first: 'Bono'},
//~~~~~~~~~~~~~~~
  {first: 'Prince'}
//~~~~~~~~~~~~~~~~~
//    'Name' 타입에 필요한 'last' 속성이
//    '{ first: string; }' 타입에 없습니다.
]);



type Pick<T, K> = {
  [k in K]: T[k]
     // ~ 'K' 타입은 'string | number | symbol' 타입에 할당할 수 없습니다.
};



type Pick<T, K extends keyof T> = {
  [k in K]: T[k]
};  // 정상



type FirstLast = Pick<Name, 'first' | 'last'>;  // 정상
type FirstMiddle = Pick<Name, 'first' | 'middle'>;
                           // ~~~~~~~~~~~~~~~~~~
                           // '"middle"' 형식은
                           // '"first" | "last"' 형식에 할당할 수 없습니다.
