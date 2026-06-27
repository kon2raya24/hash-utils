
// Type exports for consumers
// Add specific types as needed
export function djb2(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) hash = ((hash << 5) + hash + str.charCodeAt(i)) | 0;
  return hash >>> 0;
}
