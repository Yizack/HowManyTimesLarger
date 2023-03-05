import { countries } from "./assets/data/countries.json";
import siteInfo from "./siteInfo.js";

const routes = ["/"];

countries.forEach((left) => {
  countries.forEach((right) => {
    if (left.code_2 !== right.code_2) {
      routes.push(`/compare/${left.code_2}/${right.code_2}/`);
    }
  });
});

export default {
  app: {
    rootId: "app",
    buildAssetsDir: "/_app/",
    head: {
      title: siteInfo.name,
      htmlAttrs: {
        lang: "en"
      },
      bodyAttrs: {
        "data-bs-theme": "dark"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index, follow" },
        { name: "apple-mobile-web-app-title", content: siteInfo.name },
        { name: "application-name", content: siteInfo.name },
        { name: "msapplication-TileColor", content: "#171a1e" },
        { name: "theme-color", content: "#171a1e" }
      ],
      link: [
        { rel: "preload", as: "style", crossorigin: "anonymous", href: "https://fonts.googleapis.com/css?family=Roboto:400,300" },
        { rel: "stylesheet", crossorigin: "anonymous", href: "https://fonts.googleapis.com/css?family=Roboto:400,300" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "194x194", href: "/favicon-194x194.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-chrome-192x192.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#171a1e" }
      ]
    }
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/main.css"
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes
    }
  }
};
