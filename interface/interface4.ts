interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person4 = {
  name: "Himchan",
  age: 29,
  hello: function (): void {
    console.log(this.name);
  },
};

const p42: Person4 = {
  name: "Himchan",
  age: 29,
  hello(this: Person4): void {
    console.log(this.name);
  },
};

const p43: Person4 = {
  name: "Himchan",
  age: 29,
  hello: (this: Person4): void => {
    console.log(this.name);
  },
  // 화살표에서 this는 전역객체를 가르킨다.
};

// TS 에서 첫번째에 this를 넣고 타입을 지정할 수 있음

p41.hello();
p42.hello();
