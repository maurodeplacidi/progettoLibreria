import * as fs from "fs";
import input from "input";
import { dataService } from "../dataService";
import { user } from "../../models/users";
import { mainMenu } from "./mainMenu";

export class menuService{
  // Registration
  async registration() {
    let username = await input.text("Username");
    let nome = await input.text("Nome");
    let cognome = await input.text("Cognome");
    let email = await input.text("Email");
    let password = await input.password("Password");
  }

  // Login
  async login() {
    const username = await input.text("username");
    const password = await input.password("password");

    let userData;
    let userLogin;
    userLogin = userData.find((user)) => user.username === username;
    if (userLogin && userLogin.password === password) {
      return menuUser;
    }
  }
}
