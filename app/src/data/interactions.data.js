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

export const interactionTypes = [
  {
    id: "synergy",
    name: "Low Risk & Synergy",
    description:
      "These drugs work together to cause an effect greater than the sum of its parts, and they aren't likely to cause an adverse or undesirable reaction when used carefully. Additional research should always be done before combining drugs.",
  },
  {
    id: "low",
    name: "Low Risk & No Synergy",
    description:
      "Effects are additive. The combination is unlikely to cause any adverse or undesirable reaction beyond those that might ordinarily be expected from these drugs.",
  },
  {
    id: "decrease",
    name: "Low Risk & Decrease",
    description:
      "Effects are substractive. The combination is unlikely to cause any adverse or undersirable reaction beyond those that might ordinarily be expected from these drugs.",
  },
  {
    id: "caution",
    name: "Caution",
    description:
      "These combinations are not usually physically harmful, but may produce undesirable effects, such as physical discomfort or overstimulation. Extreme use may cause physical health issues. Synergistic effects may be unpredictable. Care should be taken when choosing to use this combination.",
  },
  {
    id: "unsafe",
    name: "Unsafe",
    description:
      "There is considerable risk of physical harm when taking these combinations, they should be avoided where possible.",
  },
  {
    id: "danger",
    name: "Dangerous",
    description:
      "These combinations are considered extremely harmful and should always be avoided. Reactions to these drugs taken in combination are highly unpredictable and have a potential to cause death.",
  },
  { id: "unknown", name: "Unknown", description: "Effects are unknown." },
];

export type Interaction = {
  ids: string[],
  interaction: InteractionTypes,
  note: string,
};

const statusToInteractionMap = {
  "Low Risk & Synergy": "synergy",
  "Low Risk & No Synergy": "low",
  "Low Risk & Decrease": "decrease",
  Caution: "caution",
  Unsafe: "unsafe",
  Dangerous: "danger",
};

const convertStatusToInteraction = (status: string): string =>
  statusToInteractionMap[status] || "unknown";

const interactions = [];

forOwnNorm(rawInteractions, (value, firstId, object) => {
  forOwnNorm(value, (data, secondId) => {
    interactions.push({
      ids: [firstId, secondId],
      ...data,
      interaction: convertStatusToInteraction(data.status),
    });
  });
});

// const interactionsTemp = [
//   {
//     ids: ["lsd", "cannabis"],
//     interaction: "caution",
//     notes:
//       "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics.",
//   },
//   {
//     ids: ["lsd", "cocaine"],
//     interaction: "caution",
//     notes:
//       "Stimulants increase anxiety levels and the risk of thought loops which can lead to negative experiences",
//   },
// ];

export default interactions;
