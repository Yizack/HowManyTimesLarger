import { createWriteStream } from "fs";
import { get } from "https";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { countries } = require("./../assets/data/countries.json");

countries.forEach((country) => {
  const file = createWriteStream(`./../public/images/flags/${country.code_2}.svg`);
  get(`https://countryflagsapi.com/svg/${country.code_2}`, (response) => {
    response.pipe(file);
    file.on("finish", () => {
      file.close();
      console.info(`Downloaded Flag: ${country.name_en}`);
    });
  });

  const shapes = createWriteStream(`./../public/images/shapes/${country.code_2}.svg`);
  get(`https://cdn.mylifeelsewhere.com/static/images/countries/svg/${country.code_2.toLocaleLowerCase()}.svg`, (response) => {
    response.pipe(shapes);
    shapes.on("finish", () => {
      shapes.close();
      console.info(`Downloaded Shape: ${country.name_en}`);
    });
  });
});
