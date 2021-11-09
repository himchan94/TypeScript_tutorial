"use strict";
var isDone = false;
isDone = true; //ok
console.log(typeof isDone); // 'boolean'
var isOk = true;
console.log(typeof isOk);
// let isNotOk: boolean = new Boolean(true); // Error
var rapper = new Boolean(true);
console.log(typeof rapper); // object type
