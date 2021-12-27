"use strict";
var _this = this;
var p41 = {
    name: "Himchan",
    age: 29,
    hello: function () {
        console.log(this.name);
    },
};
var p42 = {
    name: "Himchan",
    age: 29,
    hello: function () {
        console.log(this.name);
    },
};
var p43 = {
    name: "Himchan",
    age: 29,
    hello: function () {
        console.log(_this.name);
    },
    // 화살표에서 this는 전역객체를 가르킨다.
};
// TS 에서 첫번째에 this를 넣고 타입을 지정할 수 있음
p41.hello();
p42.hello();
