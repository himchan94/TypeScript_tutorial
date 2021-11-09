"use strict";
// 이 변수들에 할당할 수 있는 것들은 거의 없다.
var u = undefined;
var n = null;
//  컴파일 옵션에서 --stricNullChecks 사용하면 null과 undefined는 void나 자기 자신들에게만 할당할 수 있다 보통 옵션을 체크하고 사용함
// void에는 undefined 할당가능, null은 안됨
// 보통 union type을 사용함
// let myName:string null; // error
