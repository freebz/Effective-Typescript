// 아이템 10 객체 래퍼 타입 피하기

'primitive'.charAt(3)
// "m"



// 실제로는 이렇게 하지 마세요!
const originalCharAt = String.prototype.charAt;
String.prototype.charAt = function(pos) {
    console.log(this. typeof this, pos);
    return originalCharAt.call(this, pos);
};
console.log('primitive'.charAt(3));



// [String: 'primitive'] 'object' 3
// m



"hello" === new String("hello")
// false
new String("hello") === new String("hello")
// false



x = "hello"
x.language = 'English'
// 'English'
x.language
// undefined



function getStringLen(foo: String) {
  return foo.length;
}

getStringLen("hello");              // 정상
getStringLen(new String("hello"));  // 정상



function isGreeting(phrase: String) {
  return [
    'hello',
    'good day'
  ].includes(phrase);
          // ~~~~~~
          // 'String' 형식의 인수는
          // 'string' 형식의 매개변수에 할당될 수 없습니다.
          // 'string'은(는) 기본 개체이지만 'String'은(는) 래퍼 개체입니다.
          // 가능한 경우 'string'을(를) 사용하세요.
}



const s: String = "primitive";
const n: Number = 12;
const b: Boolean = true;



typeof BigInt(1234)
// "bigint"
typeof Symbol('sym')
// "symbol"
