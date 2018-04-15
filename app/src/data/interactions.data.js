// @flow

type InteractionTypes =
  | "synergy"
  | "low"
  | "decrease"
  | "caution"
  | "unsafe"
  | "danger";

export type Interaction = {
  ids: string[],
  interaction: InteractionTypes,
  notes: string
};

const interactions = [
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
