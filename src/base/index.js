export function isUndef(v) {
    return v === undefined || v === null
}

export function isDef(v) {
    return v !== undefined && v !== null
}

export function isObject(obj) {
    return obj !== null && typeof obj === "object"
}

export function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === "[object, Object]"
}

export function toNumber(val) {
    const n = parseFloat(val)
    return isNaN(n) ? val : n
}