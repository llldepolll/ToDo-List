export function getSelectOptionsArrayFromObject(objOfStr) {
  return Object.values(objOfStr).map((item) => ({
    value: item,
    label: item,
  }));
}
