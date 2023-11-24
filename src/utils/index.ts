export const uuid = () => {
  const uuid = window.crypto
    .getRandomValues(new Uint8Array(8))
    .toString()
    .split(',')
    .join('')

  return uuid
}
