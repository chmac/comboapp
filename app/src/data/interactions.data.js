// @flow

// NOTE: We can't use the FP version because it caps the iteratee to 1 argument
import forOwnNorm from "lodash/forOwn";

import rawInteractions from "./combo_beta.json";

export type InteractionTypes =
  | "synergy"
  | "low"
  | "decrease"
  | "caution"
  | "unsafe"
  | "danger"
  | "unknown";

export type Interaction = {
  ids: string[],
  interaction: InteractionTypes,
  note: string
};

const statusToInteractionMap = {
  "Low Risk & Synergy": "synergy",
  "Low Risk & No Synergy": "low",
  "Low Risk & Decrease": "decrease",
  Caution: "caution",
  Unsafe: "unsafe",
  Dangerous: "danger"
};

const convertStatusToInteraction = (status: string): string =>
  statusToInteractionMap[status] || "unknown";

const interactions = [];

forOwnNorm(rawInteractions, (value, firstId, object) => {
  forOwnNorm(value, (data, secondId) => {
    interactions.push({
      ids: [firstId, secondId],
      ...data,
      interaction: convertStatusToInteraction(data.status)
    });
  });
});

const interactionsTemp = [
  {
    ids: ["lsd", "cannabis"],
    interaction: "caution",
    notes:
      "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics."
  },
  {
    ids: ["lsd", "cocaine"],
    interaction: "caution",
    notes:
      "Stimulants increase anxiety levels and the risk of thought loops which can lead to negative experiences"
  }
];

export default interactions;
