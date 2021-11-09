"use strict";
// any의 불안정한 요소를 해소
var aNumber = maybe; // error
if (maybe === true) {
    var aBoolean = maybe; // true 타입을 지정
    var aString = maybe; // error
}
if (typeof maybe === "string") {
    // if 문 안의 maybe는 string이 된다. 타입가드
    var aString = maybe;
    var aBoolean = maybe; // error
}
