// 아이템 20 다른 타입에는 다른 변수 사용하기

let id = "12-34-56";
fetchProduct(id);		 // string으로 사용
id = 123456;
fetchProductBySerialNumber(id);  // number로 사용



let id = "12-34-56";
fetchProduct(id);

   id = 123456;
// ~~ '123456' 형식은 'string' 형식에 할당할 수 없습니다.
   fetchProductBySerialNumber(id);
                           // ~~ 'string' 형식의 인수는
                           //    'number' 형식의 매개변수에 할당될 수 없습니다.



let id: string|number = "12-34-56";
fetchProduct(id);
id = 123456;			 // 정상
fetchProductBySerialNumber(id);  // 정상



const id = "12-34-56";
fetchProduct(id);

const serial = 123456;		     // 정상
fetchProductBySerialNumber(serial);  // 정상



const id = "12-34-56";
fetchProduct(id);

{
  const id = 123456;		   // 정상
  fetchProductBySerialNumber(id);  // 정상
}
