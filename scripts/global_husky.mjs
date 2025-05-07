import fs from "node:fs";

const globalDirectory = process.cwd();
const systemDirectories = ["node_modules", "scripts", "packages"];

const getDirectories = (source) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter(
      (name) => !name.startsWith(".") && !systemDirectories.includes(name)
    );

console.log(getDirectories(globalDirectory));
