// 아이템 11 잉여 속성 체크의 한계 인지하기

interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}
const r: Room = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present',
//~~~~~~~~~~~~~~~~~~~ 개체 리터럴은 알려진 속성만 지정할 수 있으며
//                    'Room' 형식에 'elephant'이(가) 없습니다.
};



const obj = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present',
};
const r: Room = obj;  // 정상



interface Options {
  title: string;
  darkMode?: boolean;
}
function createWindow(options: Options) {
  if (options.darkMode) {
    setDarkMode();
  }
  // ...
}
createWindow({
  title: 'Spider Solitaire',
  darkmode: true
//~~~~~~~~~~~~~~ 개체 리터럴은 알려진 속성만 지정할 수 있지만
//               'Options' 형식에 'darkmode'이(가) 없습니다.
//               'darkMode'을(를) 쓰려고 했습니까?
});



const o1: Options = document;               // 정상
const o2: Options = new HTMLAnchorElement;  // 정상



const o: Options = { darkmode: true, title: 'Ski Free' };
                  // ~~~~~~~~ 'Options' 형식에 'darkmode'이(가) 없습니다.



const intermediate = { darkmode: true, title: 'Ski Free' };
const o: Options = intermediate;  // 정상



const o = { darkmode: true, title: 'Ski Free' } as Options;  // 정상



interface Options {
  darkMode?: boolean;
  [otherOptions: string]: unknown;
}
const o: Options = { darkmode: true };  // 정상



interface LineChartOptions {
  logscale?: boolean;
  invertedYAxis?: boolean;
  areaChart?: boolean;
}
const opts = { logScale: true };
const o: LineChartOptions = opts;
   // ~ '{ logScale: boolean; }' 유형에
   //   'LineChartOptions' 유형과 공통적인 속성이 없습니다.
