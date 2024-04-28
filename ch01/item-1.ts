// 아이템 1 타입스크립트와 자바스크립트의 관계 이해하기

function greet(who: string) {
    console.log('Hello', who);
}



// function greet(who: string) {
//                   ^

// SyntaxError: Unexpected token :



let city = 'new york city';
console.log(city.toUppercase());



// TypeError: city.toUppercase is not a function



let city = 'new york city';
console.log(city.toUppercase());
              // ~~~~~~~~~~~ 'toUppercase' 속성이 'string' 형식에 없습니다.
              //             'toUpperCase'을(를) 사용하시겠습니까?



const states = [
	{name: 'Alabama', capital: 'Montgomery'},
  {name: 'Alaska', capital: 'Juneau'},
	{name: 'Arizona', capital: 'Phoenix'},
	// ...
];
for (const state of states) {
	console.log(state.capitol);
}


// undefined
// undefined
// undefined



for (const state of states) {
	console.log(state.capitol);
	               // ~~~~~~~ 'capitol' 속성이 ... 형식에 없습니다.
	               //         'capital'을(를) 사용하시겠습니까?
}



const states = [
	{name: 'Alabama', capitol: 'Montgomery'},
  {name: 'Alaska', capitol: 'Juneau'},
	{name: 'Arizona', capitol: 'Phoenix'},
	// ...
];
for (const state of states) {
	console.log(state.capital);
	               // ~~~~~~~ 'capital' 속성이 ... 형식에 없습니다.
	               //         'capitol'을(를) 사용하시겠습니까?
}



interface State {
	name: string;
	capital: string;
}
const states: State[] = [
	{name: 'Alabama', capitol: 'Montgomery'},
	               // ~~~~~~~~~~~~~~~~~~~~~
  {name: 'Alaska',  capitol: 'Juneau'},
	               // ~~~~~~~~~~~~~~~~~
	{name: 'Arizona', capitol: 'Phoenix'},
	               // ~~~~~~~~~~~~~~~~~~ 개체 리터럴은 알려진 속성만 지정할 수 있지만
	               //                    'State' 형식에 'capitol'이(가) 없습니다.
	               //                    'capital'을(를) 쓰려고 했습니까?
	// ...
];
for (const state of states) {
	console.log(state.capital);
}



const states: State[] = [
	{name: 'Alabama', capital: 'Montgomery'},
  {name: 'Alaska',  capitol: 'Juneau'},
	               // ~~~~~~~~~~~~~~~~~ 'capital'을(를) 쓰려고 했습니까?
	{name: 'Arizona', capital: 'Phoenix'},
	// ...
];



const x = 2 + '3';  // 정상, string 타입입니다.
const y = '2' + 3;	// 정상, string 타입입니다.



const a = null + 7;							// 자바스크립트에서는 a값이 7이 됩니다.
       // ~~~~ '+' 연산자를 ... 형식에 적용할 수 없습니다.
const b = [] + 12;							// 자바스크립트에서는 b값이 '12'가 됩니다.
       // ~~~~~~~ '+' 연산자를 ... 형식에 적용할 수 없습니다.
alert('Hello', 'TypeScript');		// "Hello" 경고를 표시합니다.
             // ~~~~~~~~~~~ 0-1개의 인수가 필요한데 2개를 가져왔습니다.



const names = ['Alice', 'Bob'];
console.log(names[2].toUpperCase());



// TypeError: Cannot read property 'toUpperCase' of undefined
