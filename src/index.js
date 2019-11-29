import * as base from "./base"
import * as date from "./date"

export default function toNumber(val) {
    const n = parseFloat(val)
    return isNaN(n) ? val : n
}
