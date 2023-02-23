import { countries } from "./assets/data/countries.json";

const routes = ["/"];

countries.forEach((left) => {
  countries.forEach((right) => {
    routes.push(`/compare/${left.code_2}/${right.code_2}/`);
  });
});

export default {
  app: {
    rootId: "app",
    buildAssetsDir: "/_app/",
    head: {
      htmlAttrs: {
        lang: "en"
      },
      bodyAttrs: {
        "data-bs-theme": "dark"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index, follow" }
      ],
      link: [
        { rel: "preload", as: "style", crossorigin: "anonymous", href: "https://fonts.googleapis.com/css?family=Roboto:400,300" },
        { rel: "stylesheet", crossorigin: "anonymous", href: "https://fonts.googleapis.com/css?family=Roboto:400,300" }
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
