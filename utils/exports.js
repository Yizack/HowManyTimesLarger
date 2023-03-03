import siteInfo from "~/siteInfo.js";
export { siteInfo };

export const fixed = (number = 0, decimal = 0) => {
  const decimals = number < 1 ? 2 : decimal;
  return Number(number).toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
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
  if (modals.length) {
    modals.forEach((modal) => {
      const instance = nuxtApp.$Modal.getInstance(modal);
      if (instance) {
        instance.hide();
      }
    });
  }
};

export const tweenNumber = async (ctx, end, duration) => {
  while (ctx.tweened < end) {
    const set = end / (60 * duration);
    if (ctx.tweened + set > end) {
      ctx.tweened = end;
    }
    else {
      ctx.tweened += set;
    }
    await new Promise(resolve => setTimeout(resolve, duration * 1000 / 60));
  }
};
