import { useState, useRef, useEffect } from "react";
import {  Country as CountryCode } from "@/lib/country-codes";

interface CountryCodeSelectProps {
  countryCodes: CountryCode[];
  selectedCode: string;
  onChange: (country: CountryCode) => void;
}

export function CountryCodeSelect({
  countryCodes,
  selectedCode,
  onChange,
}: CountryCodeSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry = countryCodes.find(
    (country) => country.country === selectedCode
  );

  const handleSelect = (country: CountryCode) => {
    onChange(country);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                className="flex items-center justify-between w-full p-3 rounded-lg bg-white/50 border border-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {selectedCountry ? (
                  <div className="flex items-center">
                    <selectedCountry.flag className="w-6 h-6 rounded-full object-cover mr-2" />
                    <span>{selectedCountry.country}</span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    {countryCodes[0].flag({ className: "w-6 h-6 rounded-full object-cover mr-2" })}
                    <span>{countryCodes[0].country}</span>
                  </div>
                )}
                <svg
                  className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-black rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {countryCodes.map((country) => (
            <div
              key={country.code}
              className="flex items-center space-x-2 p-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(country)}
            >
              <country.flag className="w-6 h-6 rounded-full object-cover mr-2" />
              <span>{country.country}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
