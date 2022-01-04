// 접근 제어자
// 타입스크립트는 기본적으로 모두 외부에서 접근이 가능하다.
// 외부에서 접근가능하게 하는 것은 public

class Person2 {
  public name: string = "Mark"; // 초기화된 값이 없으면 에러
  public agee!: number; // 느낌표를 달면 값이 할당되지 않아도 에러가 안남

  public constructor(age?: number) {
    if (age === undefined) {
      this.agee = 20;
    } else {
      this.agee = age;
    }
  }

  private async _init() {} // private 프로퍼티 메서드는 _(언더바)를 적어주는 컨벤션이있다.
}

const p2: Person2 = new Person2(39);

// protected 는 외부에서 접근 불가능하지만 상속에서는 접근 가능하다.

// 설정하지 않으면 public
// 클래스 내부의 모든 곳에 설정가능
