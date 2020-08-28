export const pick = <T>(...elems: T[]): T => {
    const index = Math.floor(Math.random() * (elems.length))
    return elems[index]
}