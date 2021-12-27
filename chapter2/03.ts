// 서브타입 : 더 범위가 작은 타입

let sub4 :number =1;
let sup4: any = sub4;

sub4 = sup4; // 에러 안남

let sub5: never = 0 as never;
let sup5: number = sub5;

sub5 =sup5; // error

class Animal {}
class Dog extends Animal{
    eat(){};
}

let sub6: Dog = new Dog();
let sup6: Animal = sub6;

sub6 = sup6; // error

// 1. 같거나 서브 타입인 경우, 할당이 가능하다 => 공변

// 2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다 => 반병
// * stricFunctionTypes 옵션 참고 *