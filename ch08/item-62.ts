// 아이템 62 마이그레이션의 완성을 위해 noImplicitAny 설정하기

class Chart {
  indices: any;

  // ...
}



class Chart {
  indices: number[];

  // ...
}



getRanges() {
  for [const r of this.indices) {
    const low = r[0];   // 타입이 any
    const high = r[1];	// 타입이 any
    // ...
  }
}



getRanges() {
  for (const r of this.indices) {
    const low = r[0];
             // ~~~~ 'Number' 형식에 인덱스 시그니처가 없으므로
             //      요소에 암시적으로 'any' 형식이 있습니다.
    const high = r[1];
              // ~~~~ 'Number' 형식에 인덱스 시그니처가 없으므로
              //      요소에 암시적으로 'any' 형식이 있습니다.
    // ...
  }
}
