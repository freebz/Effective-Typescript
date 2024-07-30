// 아이템 51 의존성 분리를 위해 미러 타입 사용하기

function parseCSV(contents: string | Buffer): {[column: string]: string}[] {
  if (typeof contents === 'object') {
    // 버퍼인 경우
    return parseCSV(contents.toString('utf8'));
  }
  // ...
}



// $ npm install --save-dev @types/node



interface CsvBuffer {
  toString(encoding: string): string;
}
function parseCSV(contents: string | CsvBuffer): {[column: string]: string}[] {
  // ...
}



parseCSV(new Buffer("column1,column2\nval1,val2", "utf-8"));  // 정상
