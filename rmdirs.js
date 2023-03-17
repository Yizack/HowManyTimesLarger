import { rmSync } from "fs";
import siteInfo from "./siteInfo.js";

Object.keys(siteInfo.pages).forEach((page) => {
  if (page !== "home") {
    rmSync(`./.output/public/${page}`, { recursive: true, force: true });
    console.info(`Removed for mobile app ./.output/public/${page}`);
  }
  else {
    rmSync("./.output/public/compare", { recursive: true, force: true });
    console.info("Removed for mobile app ./.output/public/compare");
  }
});

rmSync("./.output/public/sitemap.xml", { recursive: true, force: true });
console.info("Removed for mobile app ./.output/public/sitemap.xml");
