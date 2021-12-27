// 타입시스템
// 컴파일러에게 타입을 명시적으로 지정 or 자동 지정

// JS 함수는 매개변수 타입에 따라 Return 값이 달라진다. 사용자 의도와 달라짐

function f3(a) {
  return a * 38;
}

// a any로 추정됨
//

// noimplicitAny ,옵션 : 명시적으로 타입을 지정하지 않았을 때 any로 자동으로 타입을 any로 지정하게 되는 경우 에러를 발생시킴

function f4(a: number) {
  if (a > 0) {
    return a * 38;
  }
}

console.log(f4(5)); // 190
console.log(f4(-5) + 5); // Nan  f4(-5)가 undefined로 됨

// strictNullChecks 옵션을 켜먼 모든 타입에 자동으로 포함되어 있는 null과 undefined를 제거함

// error TS2532: Object is possibly 'undefined'

// noImplicitReturns 옵션을 켜면 함수 내에서 모든 코드가 값을 리턴하지 않으면 컴파일 에러를 발생시킨다.

function f5(a: number) {
  if (a > 0) {
    return a * 38;
  }
}

// 값이 리턴되지 않으면 에러 error
// 매개변수에 object가 들어오는 경우

function f7(a: { name: string; age: number }): string {
  return `${a.name}`;
}

// 나만의 타입을 만드는 방법

interface PersonInterface {
  name: string;
  age: number;
}

type PersonTypeAlias = {
  name: string;
  age: number;
};

function f8(a: PersonInterface): string {
  return `${a.name}`;
}
