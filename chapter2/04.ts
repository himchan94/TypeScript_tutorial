// 타입 별칭

// interface와 비슷함
// 만들어진 타입의 refer로 사용하는 것이지 타입을 만드는 것이 아님

// Aliasing Primitve

type MyStringType = string;

const str = "world";

let myStr: MyStringType = "hello";
myStr = str;

// Aliasing Union Type

let person: string | number = 0;
person = "Mark";

type StringOrNumber = string | number;

let another: StringOrNumber = 0;
another = "anna";

// Aliasing Tuple
let person: [string, number] = ["Mark", 35];

type PersonTuple = [string, number];

let another: PersonTuple = ["anna", 24];

// Aliasing FUnction
type EatType = (food: string) => void;

// 기술적으로 interface와 aliasing 은 다르다!!
