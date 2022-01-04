class Person {
  public constructor(private _name: string, private age: number) {}

  get name() {
    //
    console.log("get");
    return this._name;
  }

  set name(n: string) {
    console.log("set");
    this._name = n;
  }
}

const p1: Person = new Person("Mark", 39);

console.log(p1.name); // get을 하는 함수를 getter
p1.name = "himchan"; // set을 하는 함수를 setter
