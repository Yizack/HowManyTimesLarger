export const fixed = (n = 0, d = 0) => {
  return Number(n).toLocaleString(undefined, {minimumFractionDigits: d, maximumFractionDigits: d});
};

export const compareNumbers = (n1, n2) => {
  if (n1 > n2) {
    const diff = n1 - n2;
    return {
      diff: diff,
      word: "larger",
      func: "than"
    };
  }
  else if (n1 < n2) {
    const diff = n2 - n1;
    return {
      diff: diff,
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
