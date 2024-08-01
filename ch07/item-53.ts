// 아이템 53 타입스크립트 기능보다는 ECMAScript 기능을 사용하기

// 열거형(enum)

enum Flavor {
  VANILLA = 0,
  CHOCOLATE = 1,
  STRAWBERRY = 2,
}

let flavor = Flavor.CHOCOLATE;  // 타입이 Flavor

Flavor     // 자동완성 추천: VANILLA, CHOCOLATE, STRAWBERRY
Flavor[0]  // 값이 "VANILLA"



enum Flavor {
  VANILLA = 'vanilla',
  CHOCOLATE = 'chocolate',
  STRAWBERRY = 'strawberry',
}

let flavor = Flavor.CHOCOLATE;  // 타입이 Flavor
    flavor = 'strawberry';
 // ~~~~~~ '"strawberry"' 형식은 'Flavor' 형식에 할당될 수 없습니다.



function scoop(flavor: Flavor) { /* ... */ }



scoop('vanilla');  // 자바스크립트에서 정상



scoop('vanilla');
   // ~~~~~~~~~ '"vanilla"' 형식은 'Flavor' 형식의 매개변수에 할당될 수 없습니다.

import {Flavor} from 'ice-cream';
scoop(Flavor.VANILLA);  // 정상



type Flavor = 'vanilla' | 'chocolate' | 'strawberry';

let flavor: Flavor = 'chocolate';  // 정상
    flavor = 'min chip';
 // ~~~~~~ '"mint chip"' 유형은 'Flavor' 유형에 할당될 수 없습니다.



// function scoop(flavor: Flavor) {
// if (flavor === 'v
//                  // 자동완성이 'vanilla'를 추천합니다.
// }



// 매개변수 속성

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}



class Person {
  constructor(public name: string) {}
}



class Person {
  first: string;
  last: string;
  constructor(public name: string) {
    [this.first, this.last] = name.split(' ');
  }
}



class Person {
  constructor(public name: string) {}
}
const p: Person = {name: 'Jed Bartlet'};  // 정상



// 네임스페이스와 트리플 슬래시 임포트

namespace foo {
  function bar() {}
}

/// <reference path="other.ts"/>
foo.bar();



// 데코레이터

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  @logged
  greet() {
    return "Hello, " + this.greeting;
  }
}

function logged(target: any, name: string, descriptor: PropertyDescriptor) {
  const fn = target[name];
  descriptor.value = function() {
    console.log(`Calling ${name}`);
    return fn.apply(this, arguments);
  };
}

console.log(new Greeter('Dave').greet());
// 출력:
// Calling greet
// Hello, Dave
