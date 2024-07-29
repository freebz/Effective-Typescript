// 아이템 44 타입 커버리지를 추적하여 타입 안전성 유지하기

// $ npx type-coverage
// 9985 / 10117 98.69%



// $ type-coverage --detail
// path/to/code.ts:1:10 getColumnInfo
// path/to/module.ts:7:1 pt2
// ...



function getColumnInfo(name: string): any {
  return utils.buildColumnInfo(appState.dataSchema, name);  // any를 반환합니다.
}



declare module 'my-module';



import {someMethod, someSymbol} from 'my-module';  // 정상

const pt1 = {
  x: 1,
  y: 2,
};                                        // 타입이 {x: number, y: number}
const pt2 = someMethod(pt1, someSymbol);  // 정상, pt2의 타입이 any
