// const joke = require("jokes.js");
import { jokes } from "./jokes";

const joke = jokes;

const button = document.querySelector(".btn");
const set = document.querySelector(".setup");
const punch = document.querySelector(".punchline");

button.addEventListener('click', () => {
    console.log(joke[0].id);
})