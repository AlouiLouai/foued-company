import { GB, FR } from "country-flag-icons/react/3x2";

export interface Language {
  code: string;
  name: string;
  flag: any;
}

export const languages: Language[] = [
  { code: "en", name: "English", flag: GB },
  { code: "fr", name: "Français", flag: FR },
];
