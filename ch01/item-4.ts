// 아이템 4 구조적 타이핑에 익숙해지기

interface Vector2D {
  x: number;
  y: number;
}



function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}



interface NamedVector {
  name: string;
  x: number;
  y: number;
}



const v: NamedVector = { x: 3, y: 4, name: 'Zee' };
calculateLength(v);  // 정상, 결과는 5



interface Vector3D {
  x: number;
  y: number;
  z: number;
}



function normalize(v: Vector3D) {
  const length = calculateLength(v);
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}



normalize({x: 3, y: 4, z: 5})
{ x: 0.6, y: 0.8, z: 1 }



function calculateLengthL1(v: Vector3D) {
  let length = 0;
  for (const axis of Object.keys(v)) {
    const coord = v[axis];
               // ~~~~~~~ 'string'은 'Vector3D'의 인덱스로 사용할 수 없기에
               //         엘리먼트는 임시적으로 'any' 타입입니다.
    length += Math.abs(coord);
  }
  return length;
}



const vec3D = {x: 3, y: 4, z: 1, address: '123 Broadway'};
calculateLengthL1(vec3D);  // 정상, NaN을 반환합니다.



function calculateLengthL1(v: Vector3D) {
  return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}



class C {
  foo: string;
  constructor(foo: string) {
    this.foo = foo;
  }
}

const c = new C('instance of C');
const d: C = { foo: 'object literal' };  // 정상!



interface Author {
  first: string;
  last: string;
}
function getAuthors(database: PostgresDB): Author[] {
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
  return authorRows.map(row => ({first: row[0], last: row[1]}));
}



interface DB {
  runQuery: (sql: string) => any[];
}
function getAuthors(database: DB): Author[] {
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
  return authorRows.map(row => ({first: row[0], last: row[1]}));
}



test('getAuthors', () => {
  const authors = getAuthors({
    runQuery(sql: string) {
      return [['Toni', 'Morrison'], ['Maya', 'Angelou']];
    }
  });
  expect(authors).toEqual([
    {first: 'Toni', last: 'Morrison'},
    {first: 'Maya', last: 'Angelou'}
  ]);
});
