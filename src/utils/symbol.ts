/**
 * Checks if the typeof `value` is `symbol`.
 */
export function isSymbol(input: unknown): input is symbol {
  return typeof input === 'symbol';
}
