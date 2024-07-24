// 아이템 24 일관성 있는 별칭 사용하기

const borough = {name: 'Brooklyn', location: [40.688, -73.979]};
const loc = borough.location;



loc[0] = 0;
borough.location
// [0, -73.979]



interface Coordinate {
  x: number;
  y: number;
}

interface BoundingBox {
  x: [number, number];
  y: [number, number];
}

interface Polygon {
  exterior: Coordinate[];
  holes: Coordinate[][];
  bbox?: BoundingBox;
}



function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
  if (polygon.bbox) {
    if (pt.x < polygon.bbox.x[0] || pt.x > polygon.bbox.x[1] ||
        pt.y < polygon.bbox.y[0] || pt.y > polygon.bbox.y[1]) {
      return false;
    }
  }

  // ...
}



function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
  const box = polygon.bbox;
  if (polygon.bbox) {
    if (pt.x < box.x[0] || pt.x > box.x[1] ||
        //     ~~~                ~~~  객체가 'undefined'일 수 있습니다.
        pt.y < box.y[0] || pt.y > box.y[1]) {
        //     ~~~                ~~~  객체가 'undefined'일 수 있습니다.
      return false;
    }
  }
  // ...
}



function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
  polygon.bbox    // 타입이 BoundingBox | undefined
  const box = polygon.box;
  box             // 타입이 BoundingBox | undefined
  if (polygon.bbox) {
    polygon.bbox  // 타입이 BoundingBox
    box		  // 타입이 BoundingBox | undefined
  }
}



function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
  const box = polygon.bbox;
  if (box) {
    if (pt.x < box.x[0] || pt.x > box.x[1] ||
        pt.y < box.y[0] || pt.y > box.y[1]) {  // 정상
      return false;
    }
  }
  // ...
}



function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
  const {bbox} = polygon;
  if (bbox) {
    const {x, y} = bbox;
    if (pt.x < x[0] || pt.x > x[1] ||
        pt.y < y[0] || pt.y > y[1]) {
      return false;
    }
  }
  // ...
}



const {bbox} = polygon;
if (!bbox) {
  calculatePolygonBbox(polygon);  // polygon.bbox가 채워집니다.
  // 이제 polygon.bbox와 bbox는 다른 값을 참조합니다!
}



function fn(p: Polygon) { /* ... */ }

polygon.bbox     // 타입이 BoundingBox | undefined
if (polygon.bbox) {
  polygon.bbox   // 타입이 BoundingBox
  fn(polygon);
  polygon.bbox   // 타입이 BoundingBox
}
