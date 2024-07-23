import { rmSync, readdirSync, unlinkSync } from "fs";
import { siteInfo } from "./../utils/siteInfo.js";

const publicPath = "./.output/public";
Object.keys(siteInfo.pages).forEach((page) => {
  if (page !== "home") {
    rmSync(`${publicPath}/${page}`, { recursive: true, force: true });
    console.info(`Removed for mobile app ${publicPath}/${page}`);
  }
  else {
    rmSync(`${publicPath}/compare`, { recursive: true, force: true });
    console.info(`Removed for mobile app ${publicPath}/compare`);
  }
});

try {
  const regex = [/^[^.]+.(png|xml|ico|webmanifest|txt|svg)$/];
  const files = readdirSync(publicPath).filter(f => regex.find(r => r.test(f)));
  files.forEach((f) => {
    unlinkSync(`${publicPath}/${f}`);
    console.info(`Removed for mobile app ${publicPath}/${f}`);
  });
}
catch (e) {
  console.warn(e);
}
