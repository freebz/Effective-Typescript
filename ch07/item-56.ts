// 아이템 56 정보를 감추는 목적으로 private 사용하지 않기

class Foo {
  _private = 'secret123';
}



const f = new Foo();
f._private;  // 'secret123'



class Diary {
  private secret = 'cheated on my English test';
}

const diary = new Diary();
diary.secret
   // ~~~~~~ 'secret' 속성은 private이며
   //        'Diary' 클래스 내에서만 접근할 수 있습니다.



class Diary {
  constructor() {
    this.secret = 'cheated on my English test';
  }
}
const diary = new Diary();
diary.secret;



class Diary {
  private secret = 'cheated on my English test';
}

const diary = new Diary();
(diary as any).secret  // 정상



declare function hash(text: string): number;

class PasswordChecker {
  checkPassword: (password: string) => boolean;
  constructor(passwordHash: number) {
    this.checkPassword = (password: string) => {
      return hash(password) === passwordHash;
    }
  }
}

const checker = new PasswordChecker(hash('s3cret'));
checker.checkPassword('s3cret');  // 결과는 true



class PasswordChecker {
  #passwordHash: number;

  constructor(passwordHash: number) {
    this.#passwordHash = passwordHash;
  }

  checkPassword(password: string) {
    return hash(password) === this.#passwordHash;
  }
}

const checker = new PasswordChecker(hash('s3cret'));
checker.checkPassword('secret');  // 결과는 false
checker.checkPassword('s3cret');  // 결과는 true
