import { siteInfo } from "./utils/siteInfo.js";

export default defineNuxtConfig({
  app: {
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
        { name: "msapplication-TileColor", content: "#121518" },
        { name: "theme-color", content: "#121518" }
      ],
      link: [
        { rel: "preload", as: "style", crossorigin: "anonymous", href: "https://fonts.googleapis.com/css?family=Nunito:400,300" },
        { rel: "stylesheet", crossorigin: "anonymous", href: "https://fonts.googleapis.com/css?family=Nunito:400,300" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "512x512", href: "/android-chrome-512x512.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-chrome-192x192.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#121518" },
        { rel: "shortcut icon", href: "/favicon.ico" }
      ]
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" }
  },
  modules: [
    "@nuxt/eslint"
  ],
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/main.css",
    "~/assets/css/transitions.css",
    "~/assets/css/theme-dark.css",
    "~/assets/css/theme-light.css"
  ],
  eslint: {
    config: {
      autoInit: false,
      stylistic: true
    }
  },
  nitro: {
    cloudflare: {
      pages: {
        routes: {
          exclude: ["/images/*"]
        }
      }
    }
  },
  features: {
    inlineStyles: false
  },
  experimental: {
    payloadExtraction: false
  }
});
