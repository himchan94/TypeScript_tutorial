interface Person1 {
  name: string;
  age: number;
}

function hello1(person: Person1): void {
  console.log(person);
}

const p1: Person1 = {
  name: "himchan",
  age: 29,
};

hello1(p1);

// 인터페이스는 컴파일 되었을 때 사라짐!!
// 즉 컴파일 타임에만 필요함
