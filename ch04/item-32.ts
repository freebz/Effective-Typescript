// 아이템 32 유니온의 인터페이스보다는 인터페이스의 유니온을 사용하기

interface Layer {
  layout: FillLayout | LineLayout | PointLayout;
  paint: FillPaint | LinePaint | PointPaint;
}



interface FillLayer {
  layout: FillLayout;
  paint: FillPaint;
}
interface LineLayer {
  layout: LineLayout;
  paint: LinePaint;
}
interface PointLayer {
  layout: PointLayout;
  paint: PointPaint;
}
type Layer = FillLayer | LineLayer | PointLayer;



interface Layer {
  type: 'fill' | 'line' | 'point';
  layout: FillLayout | LineLayout | PointLayout;
  paint: FillPaint | LinePaint | PointPaint;
}



interface FillLayer {
  type: 'fill';
  layout: FillLayout;
  paint: FillPaint;
}
interface LineLayer {
  type: 'line';
  layout: LineLayout;
  paint: LinePaint;
}
interface PointLayer {
  type: 'paint';
  layout: PointLayout;
  paint: PointPaint;
}
type Layer = FillLayer | LineLayer | PointLayer;



function drawLayer(layer: Layer) {
  if (layer.type === 'fill') {
    const {paint} = layer;   // 타입이 FillPaint
    const {layout} = layer;  // 타입이 FillLayout
  } else if (layer.type === 'line') {
    const {paint} = layer;   // 타입이 LinePaint
    const {layout} = layer;  // 타입이 LineLayout
  } else {
    const {paint} = layer;   // 타입이 PointPaint
    const {layout} = layer;  // 타입이 PointLayout
  }
}



interface Person {
  name: string;
  // 다음은 둘 다 동시에 있거나 동시에 없습니다.
  placeOfBirth?: string;
  dateOfBirth?: Date;
}



interface Person {
  name: string;
  birth?: {
    place: string;
    date: Date;
  }
}



const alanT: Person = {
  name: 'Alan Turing',
  birth: {
//~~~~~ 'date' 속성이 '{ place: string }' 형식에 없지만    
//      '{ place: string; date: Date; }' 형식에서 필수입니다.
    place: 'London'
  }
}



function eulogize(p: Person) {
  console.log(p.name);
  const {birth} = p;
  if (birth) {
    console.log(`was born on ${birth.date} in ${birth.place}.`);
  }
}



interface Name {
  name: string;
}

interface PersonWithBirth extends Name {
  placeOfBirth: string;
  dateOfBirth: Date;
}

type Person = Name | PersonWithBirth;



function eulogize(p: Person) {
  if ('placeOfBirth' in p) {
    p                        // 타입이 PersonWithBirth
    const {dateOfBirth} = p  // 정상, 타입이 Date
  }
}
