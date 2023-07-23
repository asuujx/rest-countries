export interface CountryType {
  name: {
    common: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  tld: string[];
  currencies: string[];
  languages: string[];
  borders: string[];
  flags: string[];
  cca3: string;
}

export interface CountryDetails {
  name: {
    common: string;
    nativeName: { [key: string]: NativeName };
  };
  tld: string[];
  cca3: string;
  currencies: {
    placeholder: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  region: string;
  subregion: string;
  languages: { [key: string]: Language };
  borders: string[];
  population: number;
  flags: {
    png: string;
  };
}

export interface NativeName {
  official: string;
  common: string;
}

export interface Language {
  name: string;
}
