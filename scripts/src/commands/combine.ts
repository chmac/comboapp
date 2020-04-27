import { Command, flags } from "@oclif/command";
import * as R from "remeda";
import * as fs from "fs";
import * as path from "path";

const DATA_PATH = path.join(__dirname, "../../../app/src/data");

type Combos = {
  [firstName: string]: {
    [secondName: string]: {
      status: string;
      note?: string;
    };
  };
};

type Drug = {
  name: string;
  categories?: string[];
  pretty_name: string;
};

type DrugData = {
  [name: string]: Drug;
};

const getFile = (name: string) => {
  return JSON.parse(
    fs.readFileSync(path.join(DATA_PATH, name), {
      encoding: "utf8",
    })
  );
};

// NOTE: This is copied from the logic here:
// https://github.com/TripSit/factsheets/blob/058f9efde34de0a61d1530781f3513046ddb814a/routes/index.js#L294-L310
const transformNameForInteractionSearch = (substance: Drug): string => {
  if (substance.name.match(/^do.$/i)) {
    return "dox";
  } else if (substance.name.match(/^2c-.$/i)) {
    return "2c-x";
  } else if (substance.name.match(/^5-meo-..t$/i)) {
    return "5-meo-xxt";
  }

  if (typeof substance.categories !== "undefined") {
    if (substance.categories.includes("benzodiazepines")) {
      return "benzodiazepines";
    } else if (substance.categories.includes("opioid")) {
      return "opioids";
    } else if (substance.categories.includes("stimulant")) {
      return "amphetamines";
    }
  }

  return substance.name;
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
    const combos: Combos = getFile("combo_beta.json");
    const allDrugs: DrugData = getFile("allDrugs.json").data[0];

    const comboNames = R.pipe(
      combos,
      R.toPairs,
      R.map(([firstName, data]) => {
        return Object.keys(data).concat(firstName);
      }),
      R.flatten(),
      R.uniq()
    );

    const drugsWithComboData = R.pipe(
      Object.values(allDrugs),
      R.filter((drug) => {
        const searchName = transformNameForInteractionSearch(drug);
        if (comboNames.includes(searchName)) {
          return true;
        }
        return false;
      }),
      R.map(R.pick(["name", "pretty_name"]))
    );

    fs.writeFileSync(
      path.join(DATA_PATH, "drugsWithCombos.json"),
      JSON.stringify(drugsWithComboData)
    );

    this.log("Finished #IkG35t");
  }
}
