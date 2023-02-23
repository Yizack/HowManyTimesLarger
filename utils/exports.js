import siteInfo from "~/siteInfo.js";

export { siteInfo };

export const fixed = (n = 0, d = 0) => {
  return Number(n).toLocaleString(undefined, { minimumFractionDigits: d, maximumFractionDigits: d });
};

export const normalize = (string) => {
  return string.normalize("NFD").replace(/[\u0300-\u036F]/g, "");
};

export const randomFrom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
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
