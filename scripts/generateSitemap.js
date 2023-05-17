import { writeFileSync } from "fs";
import xml from "xml";
import { siteInfo } from "./../utils/siteInfo.js";

const { url, pages } = siteInfo;

const outFile = "public/sitemap.xml";
const date = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Panama" }));
const dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split("T")[0];

const routes = [];

Object.values(pages).forEach((page) => {
  routes.push({ path: page.path, priority: page.path === "/" ? "1.00" : "0.80" });
});

const xmlObject = {
  urlset: [
    {
      _attr: {
        xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9"
      }
    },
    ...routes.map((route) => {
      return {
        url: [
          { loc: url + route.path },
          { lastmod: dateString },
          { priority: route.priority }
        ]
      };
    })
  ]
};

const xmlString = xml(xmlObject);
writeFileSync(outFile, "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" + xmlString);
console.info("Generated: sitemap.xml");
