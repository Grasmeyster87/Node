//import {dotenv} from 'dotenv';
//console.log(dotenv);
//dotenv.config();

/*
console.log(process.env.DB_USERNAME);
console.log(process.env.DB_URL);
console.log(process.env.DB_PASSWORD);
*/

import { config } from 'dotenv';
console.log(config);
config();

console.log(process.env.DB_USERNAME);
console.log(process.env.DB_URL);
console.log(process.env.DB_PASSWORD);
