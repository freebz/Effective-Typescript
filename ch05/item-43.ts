// 아이템 43 몽키 패치보다는 안전한 타입을 사용하기

window.monkey = 'Tamarin';
document.monkey = 'Howler';



const el = document.getElementById('colobus');
el.home = 'tree';



RegExp.prototype.monkey = 'Capuchin'
// "Capuchin"
/123/.monkey
// "Capuchin"



document.monkey = 'Tamarin';
      // ~~~~~~ 'Document' 유형에 'monkey' 속성이 없습니다.



(document as any).monkey = 'Tamarin';  // 정상



(document as any).monky = 'Tamarin';   // 정상, 오타
(document as any).monkey = /Tamarin/;  // 정상, 잘못된 타입



interface Document {
  /** 몽키 패치의 속(genus) 또는 종(species) */
  monkey: string;
}

document.monkey = 'Tamarin';  // 정상



export {};
declare global {
  interface Document {
    /** 몽키 패치의 속(genus) 또는 종(species) */
    monkey: string;
  }
}
document.monkey = 'Tamarin';  // 정상



interface MonkeyDocument extends Document {
  /** 몽키 패치의 속(genus) 또는 종(species) */
  monkey: string;
}
(document as MonkeyDocument).monkey = 'Macaque';
