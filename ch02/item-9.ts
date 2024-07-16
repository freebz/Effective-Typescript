// 아이템 9 타입 단언보다는 타입 선언을 사용하기

interface Person { name: string };

const alice: Person = { name: 'Alice' };  // 타입은 Person
const bob = { name: 'Bob' } as Person;	  // 타입은 Person



const alice: Person = {};
   // ~~~~~ 'Person' 유형에 필요한 'name' 속성이 '{}' 유형에 없습니다.
const bob = {} as Person;  // 오류 없음



const alice: Person = {
  name: 'Alice',
  occupation: 'TypeScript developer'
//~~~~~~~~~~ 개체 리터럴은 알려진 속성만 지정할 수 있으며
//           'Person' 형식에 'occupation'이(가) 없습니다.
};
const bob = {
  name: 'Bob',
  occupation: 'JavaScript developer'
} as Person;  // 오류 없음



const people = ['alice', 'bob', 'jan'].map(name => ({name}));
// Person[]을 원했지만 결과는 { name: string; }[]...



const people = ['alice', 'bob', 'jan'].map(
  name => ({name} as Person)
};  // 타입은 Person[]



const people = ['alice', 'bob', 'jan'].map(name => ({} as Person));  // 오류 없음



const people = ['alice', 'bob', 'jan'].map(name => {
  const person: Person = {name};
  return person
});  // 타입은 Person[]



const people = ['alice', 'bob', 'jan'].map(
  (name): Person => ({name})
);  // 타입은 Person[]



const people: Person[] = ['alice', 'bob', 'jan'].map(
  (name): Person => ({name})
);



document.querySelector('#myButton').addEventListener('click', e => {
  e.currentTarget  // 타입은 EventTarget
  const button = e.currentTarget as HTMLButtonElement;
  button           // 타입은 HTMLButtonElement
});



const elNull = document.getElementById('foo');  // 타입은 HTMLElement | null
const el = document.getElementById('foo')!;	// 타입은 HTMLElement



interface Person { name: string; }
const body = document.body;
const el = body as Person;
        // ~~~~~~~~~~~~~~ 'HTMLElement' 형식을 'Person' 형식으로 변환하는 것은
        //                형식이 다른 형식과 충분히 겹치지 않기 때문에
        //                실수일 수 있습니다. 이것이 의도적인 경우에는
        //                먼저 식을 'unknown'으로 변환하십시오.



const el = document.body as unknown as Person;  // 정상
