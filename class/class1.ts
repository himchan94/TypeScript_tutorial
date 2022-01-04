// 클래스란
// Object를 만드는 청사진, 설계도
// 클래스 이전에 Object를 만드는 기본적인 방법은 function
// JS에도 class는 es6부터 사용가능 (접근제어자, tranfile을 활용해야함)
// OOP를 위한 초석
// TypeScript 에서는 클래스도 사용자가 만드는 타입의 하나.

// class Person {
//   name;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const p1 = new Person("Mark");

// console.log(p1);

// class 키워드를 이용하여 클래슬르 만들 수 있다.
// class 이름은 보통 대문자를 이용한다
// new를 이용하여 class를 통해 object를 만들 수 있다.
// constructor를 이용하여 object를 생성하면서 값을 전달할 수 있다.
// this를 이용해서 만들어진 object를 가리킬 수 있다.
// JS로 컴파일되면 es5의 경우 function으로 변경된다.

// strictPropertyInitailization
class Person1 {
  name: string = "Mark"; // 초기화된 값이 없으면 에러
  age: number; // 느낌표를 달면 값이 할당되지 않아도 에러가 안남

  constructor(age?: number) {
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }

  async init() {}
}

const p0 = new Person1(39);
const p00 = new Person1();

console.log(p1);

// constructor 안에서는 async를 쓸 수 없음

// 생성자 함수가 없으면 디폴트 생성자가 불린다.
// 프로그래머가 만든 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다.
// strict 모드에서는 프로퍼티를 선선하는 곳 또는 생성자에서 값을 할당해야 한다.
// 프로퍼티를 선선하는 곳 또는 생성자에서 값을 할당하지 않는 경우 !를 붙여 위험을 표현한다
// 클래스의 프로퍼티가 정의되어 있지만, 값을 대입하지 않으면 undefined 이다.
// 생성자에는 async를 설정할 수 없다.
