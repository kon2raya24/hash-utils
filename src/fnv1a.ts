/**
 * fnv1a
 * @param str
 */
export function fnv1a(str: string): number {
  if (str === null || str === undefined) throw new Error("Invalid input");
  let hash = 2166136261;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = (hash * 16777619) | 0;
  }
  return hash >>> 0;
}
