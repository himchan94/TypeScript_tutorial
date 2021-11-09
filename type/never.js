"use strict";
// return에 보통 사용됨
function error(message) {
    // never는 리턴하지 않는다는 뜻이다.
    throw new Error(message);
}
function fail() {
    // never로 추론됨
    return error("fail");
}
function infiniteLoop() {
    while (true) { }
}
if (typeof t !== "string") {
    t; // number
}
