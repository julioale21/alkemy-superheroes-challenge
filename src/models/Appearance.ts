export default interface Appearance {
  [key: string]: string | Array<string>;
  gender: "Male" | "Female";
  race: string;
  height: string[];
  weight: string[];
  "eye-color": string;
  "hair-color": string;
}
