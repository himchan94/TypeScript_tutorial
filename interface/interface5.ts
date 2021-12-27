interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

// implements로 interfaces를 클래스로 사용할 수 있음

class Person implements IPerson1 {
  name: string;
  age?: number | undefined; // 없어도 됨

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(this.name);
  }
}

const person_yo: IPerson1 = new Person("himchan");
