// 아이템 60 allowJs로 타입스크립트와 자바스크립트 같이 사용하기

// $ browserify index.ts -p [ tsify --allowJs ] > bundle.js



module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
