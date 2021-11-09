// tuple 앞 뒤로 다른 타입으로 array를 지정해서 만듬
// 순서 타입 길이 모두 맞아야한다.

let x: [string, number];

x = ["hi", 99];

// x=[3]; // Error 튜플은 2자리인데 2자리?? error

const person: [string, number] = ["himcha", 28];

const [first, second] = person; // 구조할당
