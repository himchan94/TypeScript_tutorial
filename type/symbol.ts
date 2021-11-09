// Symbol
// 프리미티브 타입의 값을 담아서 사용한다.
// 고유하고 수정불가능한 값으로 만들어준다.

console.log(Symbol("foo") === Symbol("foo"));

const sym: symbol = Symbol();

const obj = {
  [sym]: "value",
};

// obj["sym"]; // Error

obj[sym];
