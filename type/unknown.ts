// any의 불안정한 요소를 해소

// 모르는 변수를 얻을 때 any를 쓴다 동적 컨텐츠를 알려주는 타입이 필요함

declare const maybe: unknown;

const aNumber: number = maybe; // error

if (maybe === true) {
  const aBoolean: boolean = maybe; // true 타입을 지정

  const aString: string = maybe; // error
}

if (typeof maybe === "string") {
  // if 문 안의 maybe는 string이 된다. 타입가드
  const aString: string = maybe;
  const aBoolean: boolean = maybe; // error
}
