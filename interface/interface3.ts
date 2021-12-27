interface Person3 {
  name: string;
  age?: number;
  [index: string]: any; // 어떤 이름의 프로퍼티가 있어도 괜찮음 인덱서블 타입
}

function hello3(person: Person3): void {
  console.log(person.name);
}

const p31: Person3 = {
  name: "Himchan",
  age: 29,
};

const p32: Person3 = {
  name: "Anna",
  systers: ["Sung", "Chan"],
};

const p33: Person3 = {
  name: "Bob",
  father: p31,
  mother: p32,
};
