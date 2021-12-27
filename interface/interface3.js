"use strict";
function hello3(person) {
    console.log(person.name);
}
var p31 = {
    name: "Himchan",
    age: 29,
};
var p32 = {
    name: "Anna",
    systers: ["Sung", "Chan"],
};
var p33 = {
    name: "Bob",
    father: p31,
    mother: p32,
};
