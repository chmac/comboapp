// @flow

type InteractionTypes = "a" | "b" | "c" | "d";

export type Interaction = {
  ids: string[],
  interaction: InteractionTypes,
  notes: string
};

const interactions = [
  {
    ids: ["lsd"],
    interaction: "a",
    notes: "Great"
  }
];

export default interactions;
