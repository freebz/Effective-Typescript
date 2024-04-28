// 아이템 5 any 타입 지양하기

let age: number;
age '12';
//~ '"12"' 형식은 'number' 형식에 할당할 수 없습니다.
age = '12' as any;  // OK



// any 타입에는 타입 안전성이 없습니다

age += 1;  // 런타임에 정상, age는 "121"



// any는 함수 시그니처를 무시해 버립니다

function calculateAge(birthDate: Date): number {
  // ...
}

let birthDate: any = '1990-01-19';
calculateAge(birthDate);  // 정상



// any 타입에는 언어 서비스가 적용되지 않습니다

interface Person {
  first: string;
  last: string;
}

const formatName = (p: Person) => `${p.first} ${p.last}`;
const formatNameAny = (p: any) => `${p.first} ${p.last}`;



// vscode에서 Rename Symbol

interface Person {
  firstName: string;
  last: string;
}
const formatName = (p: Person) => `${p.firstName} ${p.last}`;
const formatNameAny = (p: any) => `${p.first} ${p.last}`;



// any 타입은 코드 리팩터링 때 버그를 감춥니다

interface ComponentProps {
  onSelectItem: (item: any) => void;
}



function renderSelector(props: ComponentProps) { /* ... */ }

let selectedId: number = 0;

function handleSelectItem(item: any) {
  selectedId = item.id;
}

renderSelector({onSelectItem: handleSelectItem});



interface ComponentProps {
  onSelectItem: (id: number) => void;
}
