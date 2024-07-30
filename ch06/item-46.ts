// 아이템 46 타입 선언과 관련된 세 가지 버전 이해하기

// $ npm install react
//   + react@16.8.6

// $ npm install --save-dev @types/react
//   + @types/react@16.8.19



// $ npm install --save-dev @types/lodash@ts3.1



// node_modules/
//   @types/
//     foo/
//       index.d.ts @1.2.3
//     bar/
//       index.d.ts
//       node_modules/
//         @types/
//         foo/
//           index.d.ts @2.3.4



{
  "name": "left-pad",
  "version": "1.3.0",
  "description": "String left pad",
  "main": "index.js",
  "types": "index.d.ts",
  // ...
}
