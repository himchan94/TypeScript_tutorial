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
