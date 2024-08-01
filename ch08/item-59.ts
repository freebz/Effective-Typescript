// 아이템 59 타입스크립트 도입 전에 @ts-check와 JSDoc으로 시험해 보기

// @ts-check
const person = {first: 'Grace', last: 'Hopper'};

2 * person.first
 // ~~~~~~~~~~~~ 산술 연산 오른쪽은 'any', 'number', 'bigint'
 //              또는 열거형 형식이어야 합니다.



// 선언되지 않은 전역 변수

// @ts-check
console.log(user.firstName);
         // ~~~~ 'user' 이름을 찾을 수 없습니다.



interface UserData {
  firstName: string;
  lastName: string;
}
declare let user: UserData;



// @ts-check
/// <reference path="./types.d.ts" />
console.log(user.firstName);  // 정상



// 알 수 없는 라이브러리

// @ts-check
   $('#graph').style({'width': '100px', 'height': '100px'});
// ~ '$' 이름을 찾을 수 없습니다.



// $ npm install --save-dev @types/jquery



// @ts-check
$('#graph').style({'width': '100px', 'height': '100px'});
         // ~~~~~ 'JQuery<HTMLElement>' 형식에 'style' 속성이 없습니다.



// DOM 문제

// @ts-check
const ageEl = document.getElementById('age');
ageEl.value = '12';
   // ~~~~~ 'HTMLElement' 유형에 'value' 속성이 없습니다.



// @ts-check
const ageEl = /** @type {HTMLInputElement} */(document.
getElementById('age'));
ageEl.value = '12' // 정상



// 부정확한 JSDoc

// @ts-check
/**
 * 엘리먼트의 크기(픽셀 단위)를 가져 옵니다.
 * @param {Node} el 해당 엘리먼트
 * @return {{w: number, h: number}} 크기
 */
function getSize(el) {
  const bounds = el.getBoundingClientRect();
                 // ~~~~~~~~~~~~~~~~~~~~~ 'Node' 형식에
                 //                       'getBoundClientRect' 속성이
                 //                       없습니다.
  return {width: bounds.width, height: bounds.height);
       // ~~~~~~~~~~~~~~~~~~~ '{ width: any; height; any; }' 형식은
       //                     '{ w: number; h: number; }'에 할당할 수 없습니다.
}



function double(val) {
  return 2 * val;
}



// @ts-check
/**
 * @param {number} val
 */
function double(val) {
  return 2 *ㅍ미;
}



function loadData(data) {
  data.files.forEach(async file => {
    // ...
  });
}



/**
 * @param {{
 *  files: { forEach: (arg0: (file: any) => Promise<void>) => void; };
 * }} data
 */
function loadData(data) {
  // ...
}
