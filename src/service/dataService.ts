import * as fs from "fs";

export abstract class dataService {
  readData<T>(path: string): T {
    let read = JSON.parse(fs.readFileSync(path, "utf-8"));
    return read;
  }

  writeData<T>(path: string, data: T) {
    let write = fs.writeFileSync(path, JSON.stringify(data), "utf-8");
  }
  getLastID() {}
  autoIncrementId() {}
}
