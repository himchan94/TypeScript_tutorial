interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: "Himchan",
  gender: "male",
};

// 읽기 속성이라서 할당할 수 없음!
// p81.gender = "female";
