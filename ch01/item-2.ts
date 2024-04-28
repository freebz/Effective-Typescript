// 아이템 2 타입스크립트 설정 이해하기

function add(a, b) {
	return a + b;
}
add(10, null);



// tsc --noImplicitAny program.ts



{
	"compilerOptions": {
		"noImplicitAny": true
	}
}



function add(a, b) {
	return a + b;
}



function add(a: any, b: any): any



function add(a, b) {
	        // ~    'a' 매개변수는 암시적으로 'any' 형식이 포함됩니다.
	        //    ~ 'b' 매개변수는 암시적으로 'any' 형식이 포함됩니다.
	return a + b;
}



function add(a: number, b: number) {
	return a + b;
}



const x: number = null;  // 정상, null은 유효한 값입니다.



const x: number = null;
//    ~ 'null' 형식은 'number' 형식에 할당할 수 없습니다.



const x: number | null = null;



  const el = document.getElementById('status');
  el.textContent = 'Ready';
//~~ 개체가 'null'인 것 같습니다.

  if (el) {
		el.textContent = 'Ready';    // 정상, null은 제외됩니다.
	}
  el!.textContent = 'Ready';     // 정상, el이 null이 아님을 단언합니다.
