import { FR, BE, CH } from "country-flag-icons/react/3x2";

export interface Country {
  code: string;
  country: string;
  flag: any;
}

export const countryCodes: Country[] = [
  { code: "+33", country: "FR", flag: FR },
  { code: "+32", country: "BE", flag: BE },
  { code: "+41", country: "CH", flag: CH },
];
