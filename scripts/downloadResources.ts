import { writeFile } from "node:fs/promises";
import { $fetch } from "ofetch";
import countriesData from "../assets/data/countries.json";

for (const country of countriesData.countries) {
  const flag = await $fetch(`https://countryflagsapi.netlify.app/flag/${country.code_2}.svg`, {
    responseType: "text"
  }).catch(() => null);

  if (flag) {
    await writeFile(`./public/images/flags/${country.code_2}.svg`, flag);
    console.info(`Downloaded Flag: ${country.name_en}`);
  }

  // `https://cdn.mylifeelsewhere.com/static/images/countries/svg/${country.code_2.toLocaleLowerCase()}.svg`
}
