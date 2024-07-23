import { countries } from "~/assets/data/countries.json";

class HowManyTimesLarger {
  constructor (countries) {
    this.countries = countries;
  }

  getCountries () {
    return this.countries.map(country => this.getCountry(country));
  }

  getCountry (country) {
    country.mi2 = country.km2 / 2.59;
    country.shape = `/images/shapes/${country.code_2}.svg`;
    country.flag = `/images/flags/${country.code_2}.svg`;
    return country;
  }

  getCountryByCode (code) {
    const country = this.countries.find(country => country.code_2 === code);
    return this.getCountry(country);
  }

  getRandomCountry (...code) {
    const filtered = this.countries.filter(country => !code.includes(country.code_2));
    const country = filtered[Math.floor(Math.random() * filtered.length)];
    return this.getCountry(country);
  }

  filterCountries (input, continent = "All") {
    return this.countries.filter((country) => {
      const normalizedInput = UTILS.normalize(String(input).toLocaleLowerCase());
      const normalizedNameEn = UTILS.normalize(String(country.name_en).toLocaleLowerCase());
      const wordsMatch = normalizedInput.split(" ").map(char => normalizedNameEn.includes(char)).every(Boolean);
      const continentMatch = continent === "All" || country.continent_en === continent;
      if (wordsMatch && continentMatch) {
        return this.getCountry(country);
      }
      return false;
    });
  }
}

export const API = new HowManyTimesLarger(countries);
