import siteInfo from "~/siteInfo.js";
import { countries } from "~/assets/data/countries.json";

export { siteInfo, countries };

export const fixed = (n = 0, d = 0) => {
  return Number(n).toLocaleString(undefined, { minimumFractionDigits: d, maximumFractionDigits: d });
};

export const normalize = (string) => {
  return string.normalize("NFD").replace(/[\u0300-\u036F]/g, "");
};

export const randomCountry = (...code) => {
  const filtered = countries.filter(country => !code.includes(country.code_2));
  return filtered[Math.floor(Math.random() * filtered.length)];
};

export const filterCountries = (input, continent = "All") => {
  return countries.filter((country) => {
    const wordsMatch = normalize(String(input).toLocaleLowerCase()).split(" ").map(char => normalize(String(country.name_en).toLocaleLowerCase()).includes(char)).every(Boolean);
    const continentMatch = continent === "All" || country.continent_en === continent;
    if (wordsMatch && continentMatch) {
      return country;
    }
    return false;
  });
};

export const compareNumbers = (n1, n2) => {
  if (n1 > n2) {
    const diff = n1 / n2;
    return {
      diff,
      word: "larger",
      func: "than"
    };
  }
  else if (n1 < n2) {
    const diff = n2 / n1;
    return {
      diff,
      word: "smaller",
      func: "than"
    };
  }
  else {
    return {
      diff: 0,
      word: "equal",
      func: "to"
    };
  }
};

export const closeModals = () => {
  const nuxtApp = useNuxtApp();
  const modals = document.querySelectorAll(".modal.show");
  if (modals) {
    modals.forEach((modal) => {
      const instance = nuxtApp.$Modal.getInstance(modal);
      if (instance) {
        instance.hide();
      }
    });
  }
};
