function isUndef(v) {
    return v === undefined || v === null
}

function isDef(v) {
    return v !== undefined && v !== null
}

function isObject(obj) {
    return obj !== null && typeof obj === "object"
}

function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === "[object, Object]"
}

export default {
    isUndef,
    isDef,
    isObject,
    isPlainObject
}
