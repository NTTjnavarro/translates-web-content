export function findKey(obj: any, key: string) {
  return obj?.[key]?.uri || obj?.[key];
}
