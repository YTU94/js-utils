import base from "./base"
import date from './date'

export function toNumber(val) {
    const n = parseFloat(val)
    return isNaN(n) ? val : n
}

export default {
    ...base,
    ...date,
    toNumber
}