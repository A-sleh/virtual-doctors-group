export function removeKeys<T>(
  obj: { [key: string]: string | Date },
  keysToRemove: string[],
): T {
  return Object.keys(obj)
    .filter((key) => !keysToRemove.includes(key))
    .reduce((newObj: { [key: string]: string | Date }, key) => {
      newObj[key] = obj[key];
      return newObj;
    }, {}) as T;
}
