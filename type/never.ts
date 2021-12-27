// return에 보통 사용됨

function error(message: string): never {
  // never는 리턴하지 않는다는 뜻이다.

  throw new Error(message);
}

function fail() {
  // never로 추론됨
  return error("fail");
}

function infiniteLoop(): never {
  while (true) {}
}

// never는 모든 타입의 서브타입, 모든 타입에 할당할 수 있다.
// never에는 어떤 것도 할당할 수 없다.
// 잘못된 타입 지정을 막을 때 사용

// let a: string = "hello";

// if (typeof a !== "string") {
//   a; // 타입은 never
// }

declare const t: string | number;

if (typeof t !== "string") {
  t; // number
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;
// 조건부 타입


type ObjectIndex = Indexable<{}>