import { useState, useRef, useEffect } from "react";
import { Language } from "@/lib/languages";

interface LanguageSelectProps {
  languages: Language[];
  selectedLanguage: string;
  onChange: (language: Language) => void;
}

export function LanguageSelect({
  languages,
  selectedLanguage,
  onChange,
}: LanguageSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLang = languages.find(
    (lang) => lang.code === selectedLanguage
  );

  const handleSelect = (language: Language) => {
    onChange(language);
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
        {selectedLang ? (
          <div className="flex items-center">
            <selectedLang.flag className="w-6 h-6 rounded-full object-cover mr-2" />
            <span>{selectedLang.code.toUpperCase()}</span>
          </div>
        ) : (
          <div className="flex items-center">
            {languages[0].flag({ className: "w-6 h-6 rounded-full object-cover mr-2" })}
            <span>{languages[0].code.toUpperCase()}</span>
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
          {languages.map((language) => (
            <div
              key={language.code}
              className="flex items-center space-x-2 p-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(language)}
            >
              <language.flag className="w-6 h-6 rounded-full object-cover mr-2" />
              <span>{language.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
