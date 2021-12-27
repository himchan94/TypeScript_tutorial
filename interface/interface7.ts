// function interface

interface HelloPerson {
  (name: string, age?: number): void;
}

// Error
// const helloPerson: HelloPerson = function (name: string, age: number) {
//   console.log(`안녕하세요 ${name}`);
// };

const helloPerson: HelloPerson = function (name: string) {
  console.log(`안녕하세요 ${name}`);
};

helloPerson("Mark", 39);
