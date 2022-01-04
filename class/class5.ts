// readonly properties

class Person5 {
  public readonly name: string = "Mark";
  private readonly country: string = "Korea";

  public constructor(private _name: string, private age: number) {
    this.country = "Korea";
  }

  hello() {
    this.country = "China";
  }
}

const p6: Person = new Person("Mark", 39);

console.log(p1.name); // get을 하는 함수를 getter
p1.name = "himchan"; // set을 하는 함수를 setter

// readonly는 초기화되는 영역에서만 값을 바꿀 수 있다.
