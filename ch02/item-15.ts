// 아이템 15 동적 데이터에 인덱스 시그니처 사용하기

const rocket = {
  name: 'Falcon 9',
  variant: 'Block 5',
  thrust: '7,607 kN',
};



type Rocket = {[property: string]: string};
const rocket: Rocket = {
  name: 'Falcon 9',
  variant: 'v1.0',
  thrust: '4,940 kN',
};  // 정상



interface Rocket {
  name: string;
  variant: string;
  thrust_kN: number;
}
const falconHeavy: Rocket = {
  name: 'Falcon Heavy',
  variant: 'v1',
  thrust_kN: 15_200
};



function parseCSV(input: string): {[columnName: string]: string}[] {
  const lines = input.split('\n');
  const [header, ...rows] = lines;
  const headerColumns = header.split(',');
  return rows.map(rowStr => {
    const row: {[columnName: string]: string} = {};
    rowStr.split(',').forEach((cell, i) => {
      row[headerColumns[i]] = cell;
    });
    return row;
  });
}



interface ProductRow {
  productId: string;
  name: string;
  price: string;
}

declare let csvData: string;
const products = parseCSV(csvData) as unknown as ProductRow[];



function safeParseCSV(
  input: string
): {[columnName: string]: string | undefined}[] {
  return parseCSV(input);
}



const rows = parseCSV(csvData);
const prices: ([product: string]: number} = {};
for (const row of rows) {
  prices[row.productId] = Number(row.price);
}

const safeRows = safeParseCSV(csvData);
for (const row of safeRows) {
  prices[row.productId] = Number(row.price);
      // ~~~~~~~~~~~~~ 'undefined' 형식을 인덱스 형식으로 사용할 수 없습니다.
}



interface Row1 { [column: string]: number }                       // 너무 광범위
interface Row2 { a: number; b?: number; c?: number; d?: number }  // 최선
type Row3 =
    | { a: number; }
    | { a: number; b: number; }
    | { a: number; b: number; c: number; }
    | { a: number; b: number; c: number; d: number };  // 가장 정확하지만 사용하기 번거로움



type Vec3D = Record<'x' | 'y' | 'z', number>;
// Type Vec3D = {
//   x: number;
//   y: number;
//   z: number;
// }



type Vec3D = {[k in 'x' | 'y' | 'z']: number};
// Type Vec3D = {
//   x: number;
//   y: number;
//   z: number;
// }
type ABC = {[k in 'a' | 'b' | 'c']: k extends 'b' ? string : number};
// Type ABC = {
//   a: number;
//   b: string;
//   c: number;
// }
