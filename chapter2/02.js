"use strict";
// STRUCTURAL tYPE SYSTEM
var PersonInterface = {};
var personType = {};
PersonInterface = personType;
personType = PersonInterface;
function PersonID(id) {
    return id;
}
function getPersonByID(id) { }
getPersonByID(PersonID('id-aaaaa'));
getPersonByID("id-aaaaa");
// ts는 duck typing이 아니다.
