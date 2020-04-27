import { Command, flags } from "@oclif/command";

import * as fs from "fs";
import * as path from "path";

const getFile = (name: string) => {
  return JSON.parse(
    fs.readFileSync(path.join(__dirname, "../../../app/src/data", name), {
      encoding: "utf8",
    })
  );
};

export default class Combine extends Command {
  static description = "Combine the data files";

  static examples = [
    `$ scripts combine
Finished.
`,
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    // name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    // force: flags.boolean({ char: "f" }),
  };

  static args = [];

  async run() {
    const combo = getFile("combo_beta.json");
    const allDrugs = getFile("allDrugs.json");
    console.log("Some data", allDrugs.data[0]["mephedrone"]);
  }
}
