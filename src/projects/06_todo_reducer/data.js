import generateId from "./utils/generateId";

export const defaultFruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Grapes",
].map((name) => ({
  id: generateId(),
  name,
}));
