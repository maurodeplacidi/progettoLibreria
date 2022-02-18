import * as input from "input";
import * as fs from "fs";
import * as path from "path";
import "../index";


export class mainMenu(){
async function main() {
  await mainMenu();
}

async function mainMenu() {
  let choise;
  let choises = ["Login", "Register", "Exit"];
  let problem;
  do {
    console.clear();
    problem = undefined;
    choise = await input.select(choises);
    problem = await menuUser(choise);
    if (problem) {
      const fixProblem = await input.confirm(problem + "Try again?");
      choise = fixProblem ? choise : "Exit";
    }
  } while (choise != "Exit");
}

async function menuUser() {}
}