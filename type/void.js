"use strict";
// void는 어떤 타입도 없다
// 값을 반환하지 않는 undefined를 리턴할때 void를 사용함
function returnVoid(message) {
    console.log(message);
    // return void로 추론됨
    //return undefined; 는 유일하게 할당가능함
}
var r = returnVoid("리턴이 없다"); // r의 타입은 void
// r(void)를 통해 아무것도 할 수 없다.
