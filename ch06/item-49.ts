// 아이템 49 콜백에서 this에 대한 타입 제공하기

class C {
  vals = [1, 2, 3];
  logSquares() {
    for (const val of this.vals) {
      console.log(val * val);
    }
  }
}

const c = new C();
c.logSquares();



// 1
// 4
// 9



const c = new C();
const method = c.logSquares;
method();



// Uncaught TypeError: undefined의 'vals' 속성을 읽을 수 없습니다.



const c = new C();
const method = c.logSquares;
method.call(c);  // 제곱을 출력합니다.



document.querySelector('input')!.addEventListener('change', function(e) {
  console.log(this);  // 이벤트가 발생한 input 엘리먼트를 출력합니다.
});



class ResetButton {
  render() {
    return makeButton({text: 'Reset', onClick: this.onClick});
  }
  onClick() {
    alert(`Reset ${this}`);
  }
}



class ResetButton {
  constructor() {
    this.onClick = this.onClick.bind(this);
  }
  render() {
    return makeButton({text: 'Reset', onClick: this.onClick});
  }
  onClick() {
    alert(`Reset ${this}`);
  }
}



class ResetButton {
  render() {
    return makeButton({text: 'Reset', onClick: this.onClick});
  }
  onClick = () => {
    alert(`Reset ${this}`);  // "this"가 항상 인스턴스를 참조합니다.
  }
}



class ResetButton {
  constructor() {
    var _this = this;
    this.onClick = function () {
      alert("Reset " + _this);
    };
  }
  render() {
    return makeButton({ text: 'Reset', onClick: this.onClick });
  }
}



function addKeyListener(
  el: HTMLElement,
  fn: (this: HTMLElement, e: KeyboardEvent) => void
) {
  el.addEventListener('keydown', e => {
    fn.call(el, e);
  });
}



function addKeyListener(
  el: HTMLElement,
  fn: (this: HTMLElement, e: KeyboardEvent) => void
) {
  el.addEventListener('keydown', e => {
    fn(el, e);
        // ~ 1개의 인수가 필요한데 2개를 가져왔습니다.
  });
}



function addKeyListener(
  el: HTMLElement,
  fn: (this: HTMLElement, e: KeyboardEvent) => void
) {
  el.addKeyListener('keydown', e => {
    fn(e);
 // ~~~~~ 'void' 형식의 'this' 컨텍스트를
 //       메서드의 'HTMLElement' 형식 'this'에 할당할 수 없습니다.
  });
}



declare let el: HTMLElement;
addKeyListener(el, function(e) {
  this.innerHTML;  // 정상, "this"는 HTMLElement 타입
});



class Foo {
  registerHandler(el: HTMLElement) {
    addKeyListener(el, e => {
      this.innerHTML;
        // ~~~~~~~~~ 'Foo' 유형에 'innerHTML' 속성이 없습니다.
    });
  }
}
