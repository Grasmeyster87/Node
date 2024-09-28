import { season, temperature } from "./named-exports.mjs";
import { isRainig, humidity } from "./inline-exports.mjs";

console.log(season);
console.log(temperature);

console.log(isRainig, '\n', humidity);