export const take: <T>(n: number, arr: T[]) => T[] = (n, arr) => {
  if (n >= arr.length) { return arr }
  const taken = []
  for (let i = 0; i < n; i++) {
    taken.push(arr[i])
  }
  return taken
}