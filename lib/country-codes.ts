import { FR, DE, CH } from "country-flag-icons/react/3x2";

export interface Country {
  code: string;
  country: string;
  flag: any;
}

export const countryCodes: Country[] = [
  { code: "+33", country: "FR", flag: FR },
  { code: "+49", country: "DE", flag: DE }, // Changed from Belgium to Germany
  { code: "+41", country: "CH", flag: CH },
];
