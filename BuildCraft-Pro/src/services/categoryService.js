export const categories = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "WoodCraft" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "FiberCraft" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "ThermaPlus" }
];

export function getCategory() {
  return categories.filter(g => g);
}
