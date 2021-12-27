"use strict";
// 타입 별칭
var str = "world";
var myStr = "hello";
myStr = str;
// Aliasing Union Type
var person = 0;
person = "Mark";
var another = 0;
another = "anna";
// Aliasing Tuple
var person = ["Mark", 35];
var another = ["anna", 24];
// 기술적으로 interface와 aliasing 은 다르다!!
