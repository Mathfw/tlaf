/**
 * @function nanoUUID - generate a uuid with 12 characters
 * @param {number} [size=12]
 * @returns {string}
 */
export function nanoUUID(size = 12) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const bytes = crypto.getRandomValues(new Uint8Array(size));
  return Array.from(bytes, b => chars[b%chars.length]).join('');
}