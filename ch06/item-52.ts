// 아이템 52 테스팅 타입의 함정에 주의하기

declare function map<U, V>(array: U[], fn: (u: U) => V): V[];



map(['2017', '2018', '2019'], v => Number(v));



test('square a number', () => {
  square(1);
  square(2);
});



const lengths: number[] = map(['john', 'paul'], name => name.length);



function assertType<T>(x: T) {}

assertType<number[]>(map(['john', 'paul'], name => name.length));



const n = 12;
assertType<number>(n);  // 정상



const beatles = ['john', 'paul', 'george', 'ringo'];
assertType<{name: string}[]>(
  map(beatles, name => ({
    name,
    inYellowSubmarine: name === 'ringo'
  })));  // 정상



const add = (a: number, b: number) => a + b;
assertType<(a: number, b: number) => number>(add);     // 정상

const double = (x: number) => 2 * x;
assertType<(a: number, b: number) => number>(double);  // 정상!?



const g: (x: string) => any = () => 12;  // 정상



map(array, (name, index, array) => { /* ... */ });



const double = (x: number) => 2 * x;
int p: Parameters<typeof double> = null;
assertType<[number, number]>(p);
//                           ~ '[number]' 형식의 인수는 '[number, number]'
//                             형식의 매개변수에 할당될 수 없습니다.
let r: ReturnType<typeof double> = null;
assertType<number>(r);  // 정상



const beatles = ['john', 'paul', 'george', 'ringo'];
assertType<number[]>(map(
  beatles,
  function(name, i, array) {
//~~~~~~~~ '(name: any, i: any, array: any) => any' 형식의 인수는    
//         '(u: string) => any' 형식의 매개변수에 할당될 수 없습니다.
    assertType<string>(name);
    assertType<number>(i);
    assertType<string[]>(array);
    assertType<string[]>(this);

    return name.length;
  }
});



declare function map<U, V>(
  array: U[],
  fn: (this: U[], u: U, i: number, array: U[]) => V
): V[];



declare module 'overbar';



const beatles = ['john', 'paul', 'george', 'ringo'];
map(beatles, function(
  name,  // $ExpectType string
  i,     // $ExpectType number
  array  // $ExpectType string[]
) {
  this   // $ExpectType string[]
  return name.length;
});      // $ExpectType number[]
