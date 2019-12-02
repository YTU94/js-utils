import * as base from "./base"
import * as date from "./date"

function toNumber(val) {
    const n = parseFloat(val)
    return isNaN(n) ? val : n
}

export default {
    base,
    date,
    toNumber
}
