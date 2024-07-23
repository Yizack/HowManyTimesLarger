class AppUtils {
  fixed (number = 0, decimal = 0) {
    const decimals = number < 1 ? 2 : decimal;
    return Number(number).toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  }

  compareNumbers (n1, n2) {
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
  }

  normalize (string) {
    return string.normalize("NFD").replace(/[\u0300-\u036F]/g, "");
  }

  hideModal (id) {
    const { $Modal } = useNuxtApp();
    const instance = $Modal.getInstance("#" + id);
    if (instance) {
      instance.hide();
    }
  }

  async tweenNumber (ctx, end, duration) {
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
  }

  SEO (head) {
    const { name, nameShort } = siteInfo;
    const pageTitle = `${head.title} | ${nameShort}`;
    useHead({
      title: pageTitle,
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
        { name: "twitter:title", content: pageTitle },
        { name: "twitter:description", content: head.description }
        /* TODO: Add cover image
        { name: "twitter:image", content: `${SITE.url}/${SITE.logo}` }
        */
      ],
      link: [
        { rel: "canonical", href: head.page_url }
      ]
    });
  }

  setPageSEO (page) {
    if (typeof page === "string") {
      const { url, pages } = siteInfo;
      const { title, description, keywords } = pages[page];
      const pageUrl = pages[page].path === "/" ? url : `${url}${pages[page].path}`;
      this.SEO({ title, description, keywords, pageUrl });
    }
    else if (typeof page === "object") {
      this.SEO(page);
    }
  }
}

export const UTILS = new AppUtils();
