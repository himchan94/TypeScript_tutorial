// Funtion

type EatType = (food: string) => void;

interface IEat {
  (food: string): void;
}

// Array
type PersonList = string[];

interface IPersonList {
  [index: number]: string;
}

// intersection

interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtistsData {
  artists: { name: string }[];
}

// type alias
type ArtistsResponseType = ArtistsData & ErrorHandling;

// interface
// 다중상속 가능
interface IArtistsResponse extends ArtistsData, ErrorHandling {}

let art: ArtistsResponseType;
let iar: IArtistsResponse;

// union types
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

type PetType = Bird | Fish;

interface IPet extends PetType {} // error

class Pet implements PetType {} // error

// Declaration Mergin - interface

// type alias에서는 불가능

interface MergingInterface {
  a: string;
}

interface MergingInterface {
  b: string;
}

let mi: MergingInterface;

// type alias는 타입을 부르는 이름
// 인터페이스는 어떤 새로운 타입을 만드는 것
