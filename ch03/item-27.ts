// 아이템 27 함수형 기법과 라이브러리로 타입 흐름 유지하기

const csvData = "...";
const rawRows = csvData.split('\n');
const headers = rawRows[0].split(',');

const rows = rawRows.slice(1).map(rowStr => {
  const row = {};
  rowStr.split(',').forEach((val, j) => {
    row[headers[j]] = val;
  });
  return row;
});



const rows = rawRows.slice(1)
  .map(rowStr => rowStr.split(',').reduce(
    (row, val, i) => (row[headers[i]] = val, row),
    {}));



import _ from 'lodash';
const rows = rawRows.slice(1)
  .map(rowStr => _.zipObject(headers, rowStr.split(',')));



const rowsA = rawRows.slice(1).map(rowStr => {
  const row = {};
  rowStr.split(',').forEach((val, j) => {
    row[headers[j]] = val;
 // ~~~~~~~~~~~~~~~ '{}' 형식에서 'string' 형식의 매개변수가 포함된
 //                 인덱스 시그니처를 찾을 수 없습니다.
  });
  return row;
});
const rowsB = rawRows.slice(1);
  .map(rowStr => rowStr.split(',').reduce(
    (row, val, i) => (row[headers[i]] = val, row),
                   // ~~~~~~~~~~~~~~~ '{}' 형식에서 'string' 형식의 매개변수가
                   //                 포함된 인덱스 시그니처를 찾을 수 없습니다.
    {}));



const rows = rawRows.slice(1)
  .map(rowStr => _.zipObject(headers, rowStr.split(',')));
  // 타입이 _.Dictionary<string>[]



interface BasketballPlayer {
  name: string;
  team: string;
  salary: number;
}
declare const rosters: {[team: string]: BasketballPlayer[]};



let allPlayers = [];
 // ~~~~~~~~~~  'allPlayers' 변수는 형식을 확인할 수 없는 경우
 //             일부 위치에서 암시적으로 'any[]' 형식입니다.
for (const players of Object.values(rosters)) {
  allPlayers = allPlayers.concat(players);
            // ~~~~~~~~~~ 'allPlayers' 변수에는 암시적으로
            //            'any[]' 형식이 포함됩니다.
}



let allPlayers: BasketballPlayer[] = [];
for (const players of Object.values(rosters)) {
  allPlayers = allPlayers.concat(players);  // 정상
}



const allPlayers = Object.values(rosters).flat();
// 정상, 타입이 BasketballPlayer[]



const teamToPlayers: {[team: string]: BasketballPlayer[]} = {};
for (const player of allPlayers) {
  const {team} = player;
  teamToPlayers[team] = teamToPlayers[team] || [];
  teamToPlayers[team].push(player);
}

for (const players of Object.values(teamToPlayers)) {
  players.sort((a, b) => b.salary - a.salary);
}

const bestPaid = Object.values(teamToPlayers).map(players => players[0]);
bestPaid.sort((playerA, playerB) => playerB.salary - playerA.salary);
console.log(bestPaid);



// [
//   { team: 'GSW', salary: 37457154, name: 'Stephen Curry' },
//   { team: 'MOU', salary: 35654150, name: 'Chris Paul' },
//   { team: 'LAL', salary: 35654150, name: 'LeBron James' },
//   { team: 'OKC', salary: 35654150, name: 'Russell Westbrook' },
//   { team: 'DET', salary: 32088932, name: 'Blake Griffin' },
//   ...
// ]



const bestPaid = _(allPlayers)
  .groupBy(player => player.team)
  .mapValues(players => _.maxBy(players, p => p.salary)!)
  .values()
  .sortBy(p => -p.salary)
  .value()  // 타입이 BasketballPlayer[]



_.c(_.b(_.a(v)))

_(v).a().b().c().value()



const namesA = allPlayers.map(player => player.name)     // 타입이 string[]
const namesB = _.map(allPlayers, player => player.name)  // 타입이 string[]
const namesC = _.map(allPlayers, 'name')		 // 타입이 string[]



const salaries = _.map(allPlayers, 'salary');  // 타입이 number[]
const teams = _.map(allPlayers, 'team');       // 타입이 string[]
const mix = _.map(allPlayers, Math.random() < 0.5 ? 'name' : 'salary');
                                               // 타입이 (string | number)[]
