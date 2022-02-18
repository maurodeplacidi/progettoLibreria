import "./index";
import * as fs from "fs";
import * as input from "input";
import * as path from "path";

export class userService {
  getUser() {
    const currentUser = JSON.user(
      fs.readFileSync("../../data/users.json", "utf-8")
    );
    return currentUser;
  }

  addUser(path) {
    const currentUser = read("../../data/users.json");
    currentUser.push(user);
    fs.writeFileSync(path, JSON.stringify(currentUser), "utf-8");
  }
}
