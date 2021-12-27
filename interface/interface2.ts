interface Person2 {
  name: string;
  age?: number; // age 있을 수도? 없을 수도?
}

function hello2(person: Person2): void {
  console.log(person.name, person.age);
}

hello2({ name: "himchan", age: 39 });
hello2({ name: "James" });
