class Person {
  private static CITY = "Seoul";

  public static hello() {
    console.log("안녕하세요");
  }
}

const p1 = new Person();
p1.hello();

Person.hello(); // class에서 함수를 사용
Person.CITY;


// singletons pattern

// 클래스로 단 하나의 object를 생성해서 사용하는 패턴

class ClassName {
  private static instance : ClassName | null = null;
  public static getInstance(): ClassName{
    // ClassName 으로부터 만든 object가 있으면 그걸 리턴
    // ClassName 으로부터 만든 object가 있으면 없으면, 만들어서 리턴
    if (ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }

    return ClassName.instance;
  }

  private constructor(){} // new로 호출할 수 없음


} 

// const a = new ClassName(); // error
// const b = new ClassName(); // error

const a =  ClassName.getInstance();
const b =  ClassName.getInstance();

console.log(a === b)