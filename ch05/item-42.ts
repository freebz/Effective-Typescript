// 아이템 42 모르는 타입의 값에는 any 대신 unknown을 사용하기

function parseYAML(yaml: string): any {
  // ...
}



interface Book {
  name: string;
  author: string;
}
const book: Book = parseYAML(`
  name: Wuthering Heights
  author: Emily Brontë
`);



const book = parseYAML(`
  name: Jane Eyre
  author: Charlotte Brontë
`);
alert(book.title);  // 오류 없음, 런타임에 "undefined" 경고
book('read');	    // 오류 없음, 런타임에 "TypeError: book은 함수가 아닙니다" 예외 발생



function safeParseYAML(yaml: string): unknown {
  return parseYAML(yaml);
}
const book = safeParseYAML(`
  name: The Tenant of Wildfell Hall
  author: Anne Brontë
`);
alert(book.title);
   // ~~~~ 개체가 'unknown' 형식입니다.
book("read");
//~~~~~~~~~~~ 개체가 'unknown' 형식입니다.



const book = safeParseYAML(`
  name: Villette
  author: Charlotte Brontë
`) as Book;
alert(book.title);
        // ~~~~~ 'Book' 형식에 'title' 속성이 없습니다.
book('read');
//~~~~~~~~~~ 이 식은 호출할 수 없습니다.



interface Feature {
  id?: string | number;
  geometry: Geometry;
  properties: unknown;
}



function processValue(val: unknown) {
  if (val instanceof Date) {
    val  // 타입이 Date
  }
}



function isBook(val: unknown): val is Book {
  return (
    typeof(val) === 'object' && val !== null &&
    'name' in val && 'author' in val
  );
}
function processValue(val: unknown) {
  if (isBook(val)) {
    val;  // 타입이 Book
  }
}



function safeParseYAML<T>(yaml: string): T {
  return parseYAML(yaml);
}



declare const foo: Foo;
let barAny = foo as any as Bar;
let barUnk = foo as unknown as Bar;
