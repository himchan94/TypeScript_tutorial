// 인터페이스도 상속 가능함

interface IPerson2 {
  name: string;
  age?: number;
}

interface IKorean extends IPerson2 {
  city: string;
}

const k: IKorean = {
  name: "이웅재",
  city: "서울",
};

// 대규모 프로젝트에서는 상속으로 인터페이스 관계를 표현하는 경우가 많음(편함)
