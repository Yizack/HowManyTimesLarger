import { rmSync, readdirSync, unlinkSync } from "fs";
import { siteInfo } from "./../utils/siteInfo.js";

const public_path = "./.output/public";
Object.keys(siteInfo.pages).forEach((page) => {
  if (page !== "home") {
    rmSync(`${public_path}/${page}`, { recursive: true, force: true });
    console.info(`Removed for mobile app ${public_path}/${page}`);
  }
  else {
    rmSync(`${public_path}/compare`, { recursive: true, force: true });
    console.info(`Removed for mobile app ${public_path}/compare`);
  }
});

try {
  const regex = [/^[^.]+.(png|xml|ico|webmanifest|txt|svg)$/];
  const files = readdirSync(public_path).filter(f => regex.find(r => r.test(f)));
  files.forEach((f) => {
    unlinkSync(`${public_path}/${f}`);
    console.info(`Removed for mobile app ${public_path}/${f}`);
  });
}
catch (e) {
  console.warn(e);
}
