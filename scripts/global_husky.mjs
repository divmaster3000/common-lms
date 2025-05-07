import fs from "node:fs";
import { exec } from "node:child_process";

const systemDirectories = ["node_modules", "scripts"];
const PACKAGES_DIRECTORY = "packages";

const getDirectories = (source) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter(
      (name) => !name.startsWith(".") && !systemDirectories.includes(name)
    );

const getPackageName = (source, dir) => {
  try {
    const data = fs.readFileSync(`${source}/${dir}/package.json`, "utf-8");
    const packageData = JSON.parse(data);
    return packageData.name;
  } catch (error) {
    console.error(`Error for ${source}/${dir} - ${error}`);
  }
};

const runScript = (packageName) => {
  exec(`pnpm --filter ${packageName} pre-commit`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Output:\n${stdout}`);
  });
};

const main = () => {
  const globalDirectory = process.cwd();
  const apps = getDirectories(globalDirectory).filter(
    (item) => item !== PACKAGES_DIRECTORY
  );
  const packagesDirectories = getDirectories(
    `${globalDirectory}/${PACKAGES_DIRECTORY}`
  ).map((item) => `packages/${item}`);

  for (let dir of [...apps, ...packagesDirectories]) {
    const packageName = getPackageName(globalDirectory, dir);
    runScript(packageName);
  }
};

main();
