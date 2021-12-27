// STRUCTURAL tYPE SYSTEM

// 구조가 같으면 같은 타입이다.

interface IPerson {
    name: string;
    age:number;
    speak(): string;
}

type PersonType = {
    name: string;
    age: number;
    speak(): string;
}

let PersonInterface: IPerson = {} as any;
let personType: PersonType = {} as any;

PersonInterface = personType;
personType = PersonInterface;

// 구조가 같아서 서로 대입해도 문제가 없다.

// Norminal type sysyem

// 구조가 같아도 이름이 다르면 다른 타입이다.

type PersonID =  string & {readonly brand: unique symbol};

function PersonID(id:string):PersonID{
    return id as PersonID;
}

function getPersonByID(id:PersonID){}

getPersonByID(PersonID('id-aaaaa'))
getPersonByID("id-aaaaa");

// ts는 duck typing이 아니다.