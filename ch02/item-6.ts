// 아이템 6 편집기를 사용하여 타입 시스템 탐색하기

function getElement(elOrId: string|HTMLElement|null): HTMLElement {
  if (typeof elOrId === 'object') {
    return elOrId;
 // ~~~~~~~~~~~~~~ 'HTMLElement | null' 형식은 'HTMLElement' 형식에 할당할 수
 //                없습니다.
  } else if (elOrId === null) {
    return document.body;
  } else {
    const el = document.getElementById(elOrId);
    return el;
 // ~~~~~~~~~~ 'HTMLElement | null'형식은 'HTMLElement' 형식에 할당할 수 없습니다.
  }
}



declare function fetch(
  input: RequestInfo, init?: RequestInit
): Promise<Response>;



type RequestInfo = Request | string;



declare var Request: {
  prototype: Request;
  new(input: RequestInfo, init?: RequestInit): Request;
};



interface RequestInit {
  body?: BodyInit | null;
  cache?: RequestCache;
  credentials?: RequestCredentials;
  headers?: HeadersInit;
  // ...
}
