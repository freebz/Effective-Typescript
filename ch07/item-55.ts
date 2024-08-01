// 아이템 55 DOM 계층 구조 이해하기

function handleDrag(eDown: Event) {
  const targetEl = eDown.currentTarget;
  targetEl.classList.add('dragging');
  const dragStart = [eDown.clientX, eDown.clientY];
  const handleUp = (eUp: Event) => {
    targetEl.classList.remove('dragging');
    targetEl.removeEventListener('mouseup', handleUp);
    const dragEnd = [eUp.clientX, eUp.clientY];
    console.log('dx, dy = ', [0, 1].map(i => dragEnd[i] - dragStart[i]));
  }
  targetEl.addEventListener('mouseup', handleUp);
}
const div = document.getElementById('surface');
div.addEventListener('mousedown', handleDrag);



function handleDrag(eDown: Event) {
  const targetEl = eDown.currentTarget;
  targetEl.classList.add('dragging');
//~~~~~~~~           개체가 'null'인 것 같습니다.
//         ~~~~~~~~~ 'EventTarget' 형식에 'classList' 속성이 없습니다.  
  const dragStart = [
     eDown.clientX, eDown.clientY];
        // ~~~~~~~                'Event' 형식에 'clientX' 속성이 없습니다.
        //                ~~~~~~~ 'Event' 형식에 'clientY' 속성이 없습니다.
  const handleUp = (eUp: Event) => {
    targetEl.classList.remove('dragging');
 // ~~~~~~~~           개체가 'null'인 것 같습니다.
 //          ~~~~~~~~~ 'EventTarget' 형식에 'classList' 속성이 없습니다.    
    targetEl.removeEventListener('mouseup', handleUp);
 // ~~~~~~~~ 개체가 'null'인 것 같습니다.    
    const dragEnd = [
       eUp.clientX, eUp.clientY];
        // ~~~~~~~                'Event' 형식에 'clientX' 속성이 없습니다.
        //              ~~~~~~~   'Event' 형식에 'clientY' 속성이 없습니다.
    console.log('dx, dy = ', [0, 1].map(i => dragEnd[i] - dragStart[i]));
  }
  targetEl.addEventListener('mouseup', handleUp);
//~~~~~~~~ 개체가 'null'인 것 같습니다.  
}

   const div = document.getElementById('surface');
   div.addEventListener('mousedown', handleDrag);
// ~~~ 개체가 'null'인 것 같습니다.



<p id="quote">add <i>yet</i> it moves</p>


  
const p = document.getElementsByTagName('p')[0];
p instanceof HTMLParagraphElement
// 참(true)



function handleDrag(eDown: Event) {
  const targetEl = eDown.currentTarget;
  targetEl.classList.add('dragging');
//~~~~~~~~           개체가 'null'인 것 같습니다.
//         ~~~~~~~~~ 'EventTarget' 형식에 'classList' 속성이 없습니다.
  // ...
}



<p>
  And <i>yet</i> it moves
  <!-- quote from Galileo -->
</p>



p.children
// HTMLCollection [i]
p.childNodes
// NodeList(5) [text, i, text, comment, text]



document.getElementsByTagName('p')[0];  // HTMLParagraphElement
document.createElement('button');	// HTMLButtonElement
document.querySelector('div');		// HTMLDivElement



document.getElementById('my-div');  // HTMLElement



document.getElementById('my-div') as HTMLDivElement;



const div = document.getElementById('my-div');



function handleDrag(eDown: Event) {
  // ...
  const dragStart = [
    eDown.clientX, eDown.clientY];
       // ~~~~~~~                'Event'에 'clientX' 속성이 없습니다.
       //                ~~~~~~~ 'Event'에 'clientY' 속성이 없습니다.
  // ...

}



function addDragHandler(el: HTMLElement) {
  el.addEventListener('mousedown', eDown => {
    const dragStart = [eDown.clientX, eDown.clientY];
    const handleUp = (eUp: MouseEvent) => {
      el.classList.remove('dragging');
      el.removeEventListener('mouseup', handleUp);
      const dragEnd = [eUp.clientX, eUp.clientY];
      console.log('dx, dy = ', [0, 1].map(i => dragEnd[i] - dragStart[i]));
    }
    el.addEventListener('mouseup', handleUp);
  });
}

const div = document.getElementById('surface');
if (div) {
  addDragHandler(div);
}
