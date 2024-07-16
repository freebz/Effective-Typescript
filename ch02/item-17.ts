// 아이템 17 변경 관련된 오류 방지를 위해 readonly 사용하기

function printTriangles(n: number) {
  const nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(i);
    console.log(arraySum(nums));
  }
}



printTriangles(5)
// 0
// 1
// 2
// 3
// 4



function arraySum(arr: number[]) {
  let sum = 0, num;
  while ((num = arr.pop()) !== undefined) {
    sum += num;
  }
  return sum;
}



function arraySum(arr: readonly number[]) {
  let sum = 0, num;
  while ((num = arr.pop()) !== undefined) {
                 // ~~~ 'readonly number[]' 형식에 'pop' 속성이 없습니다.
    sum += num;
  }
  return sum;
}



const a: number[] = [1, 2, 3];
const b: readonly number[] = a;
const c: number[] = b;
   // ~ 'readonly number[]' 타입은 'readonly' 이므로
   //   변경 가능한 'number[]' 타입에 할당될 수 없습니다.



function arraySum(arr: readonly number[]) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}



printTriangles(5)
// 0
// 1
// 3
// 6
// 10



function parseTaggedText(lines: string[]): string[][] {
  const paragraphs: string[][] = [];
  const currPara: string[] = [];

  const addParagraph = () => {
    if (currPara.length) {
      paragraphs.push(currPara);
      currPara.length = 0;  // 배열을 비움
    }
  };

  for (const line of lines) {
    if (!line) {
      addParagraph();
    } else {
      currPara.push(line);
    }
  }
  addParagraph();
  return paragraphs;
}



// [ [], [], [] ]



paragraphs.push(currPara);
currPara.length = 0;  // 배열을 비움



function parseTaggedText(lines: string[]): string[][] {
  const currPara: readonly string[] = [];
  const paragraphs: string[][] = [];

  const addParagraph = () => {
    if (currPara.length) {
      paragraphs.push(
	currPara
     //	~~~~~~~~ 'readonly string[]' 형식의 인수는
     //          'string[]' 형식의 매개변수에 할당될 수 없습니다.
      );
      currPara.length = 0;  // 요소를 비움
            // ~~~~~~ 읽기 전용 속성이기 때문에 'length'에 할당할 수 없습니다.
    }
  };

  for (const line of lines) {
    if (!line) {
      addParagraph();
    } else {
      currPara.push(line);
            // ~~~~ 'readonly string[]' 형식에 'push' 속성이 없습니다.
    }
  }
  addParagraph();
  return paragraphs;
}



let currPara: readonly string[] = [];
// ...
currPara = [];  // 배열을 비움
// ...
currPara = currPara.concat([line]);



paragraphs.push([...currPara]);



const paragraphs: (readonly string[])[] = [];



paragraphs.push(currPara as string[]);



const dates: readonly Date[] = [new Date()];
dates.push(new Date());
   // ~~~~ 'readonly Date[]' 형식에 'push' 속성이 없습니다.
dates[0].setFullYear(2037);  // 정상



interface Outer {
  inner: {
    x: number;
  }
}
const o: Readonly<Outer> = { inner: { x: 0 }};
o.inner = { x: 1 };
//~~~~~ 읽기 전용 속성이기 때문에 'inner'에 할당할 수 없습니다.
o.inner.x = 1;  // 정상



let obj: {readonly [k: string]: number} = {};
// 또는 Readonly<[k: string]: number}
obj.hi = 45;
 // ~~ ... 형식의 인덱스 시그니처는 읽기만 허용됩니다.
obj = {...obj, h1: 12};     // 정상
obj = {...obj, bye: 34};    // 정상
