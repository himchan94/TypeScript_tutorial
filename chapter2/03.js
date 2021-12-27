"use strict";
// 서브타입 : 더 범위가 작은 타입
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var sub4 = 1;
var sup4 = sub4;
sub4 = sup4; // 에러 안남
var sub5 = 0;
var sup5 = sub5;
sub5 = sup5; // error
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.eat = function () { };
    ;
    return Dog;
}(Animal));
var sub6 = new Dog();
var sup6 = sub6;
sub6 = sup6; // error
// 1. 같거나 서브 타입인 경우, 할당이 가능하다 => 공변
// 2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다 => 반병
// * stricFunctionTypes 옵션 참고 *
