"use strict";
// 어떤 것이든 들어올 수 있다 any
// 최대한 안 쓰는게 좋다
// noImplicityany 옵션
// function returnAny(message: any): any {
//   console.log(message);
// }
// const any1 = returnAny("아무거나");
// any1.toString();
// any는 계속해서 전파된다.
// 타입 안정성을 잃는다.
// let looselyTyped: any = {};
// let d = looselyTyped.a.b.c.d;
// console.log(d);
// function leakingAny(obj: any) {
//   const a:number = obj.num; // any // number
//   const b = a + 1; // any
//   return b;
// }
// const c = leakingAny({ num: 0 });
// c.indexOf("0");
var a;
a = 3;
console.log(typeof a);
