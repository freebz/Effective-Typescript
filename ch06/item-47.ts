// 아이템 47 공개 API에 등장하는 모든 타입을 익스포트하기

interface SecretName {
  first: string;
  last: string;
}

interface SecretSanta {
  name: SecretName;
  gift: string;
}

export function getGift(name: SecretName, gift: string): SecretSanta {
  // ...
}



type MySanta = ReturnType<typeof getGift>;    // SecretSanta
type MyName = Parameters<typeof getGift>[0];  // SecretName
