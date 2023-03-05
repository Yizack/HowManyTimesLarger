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

const SEO = (head) => {
  const { name, name_short } = siteInfo;
  const page_title = `${head.title} | ${name_short}`;

  useHead({
    title: page_title,
    meta: [
      { hid: "description", name: "description", content: head.description },
      { hid: "keywords", name: "keywords", content: head.keywords },
      // Open Graph
      { property: "og:url", content: head.page_url },
      { property: "og:type", content: "website" },
      { property: "og:title", content: name },
      { property: "og:site_name", content: head.title },
      { property: "og:description", content: head.description },
      /* TODO: Add cover image
      { property: "og:image", content: `${SITE.url}/${SITE.cover}` },
      { property: "og:image:width", content: "300" },
      { property: "og:image:height", content: "200" },
      { property: "og:image:alt", content: `${SITE.name} cover image` },
      */
      // Twiter Card
      { name: "twitter:card", content: "summary" },
      // { name: "twitter:site", content: `@${SITE.twitter}` },
      { name: "twitter:title", content: page_title },
      { name: "twitter:description", content: head.description }
      /* TODO: Add cover image
      { name: "twitter:image", content: `${SITE.url}/${SITE.logo}` }
      */
    ],
    link: [
      { rel: "canonical", href: head.page_url }
    ]
  });
};

export const setPageSEO = (page) => {
  if (typeof page === "string") {
    const { url, pages } = siteInfo;
    const { title, description, keywords } = pages[page];
    const page_url = pages[page].path === "/" ? url : `${url}${pages[page].path}`;
    SEO({ title, description, keywords, page_url });
  }
  else if (typeof page === "object") {
    SEO(page);
  }
};
