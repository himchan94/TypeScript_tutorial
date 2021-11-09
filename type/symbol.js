"use strict";
// Symbol
// 프리미티브 타입의 값을 담아서 사용한다.
// 고유하고 수정불가능한 값으로 만들어준다.
var _a;
console.log(Symbol("foo") === Symbol("foo"));
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = "value",
    _a);
// obj["sym"]; // Error
obj[sym];
