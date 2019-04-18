/**
 *
 * 格式化数字
 * @param {*} n
 * @returns
 */
function formatNumber(n) {
    const str = n.toString()
    return str[1] ? str : `0${str}`
}

/**
 *
 * 格式化时间戳
 * @export
 * @param {*} v
 * @param {*} shortType
 * @returns
 */
export function formatTime(v, shortType = true, Joiner = '-') {
    v = v * 1000
    const date = new Date(parseInt(v))
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    const t1 = [year, month, day].map(formatNumber).join(Joiner)
    const t2 = [hour, minute, second].map(formatNumber).join(':')

    if (shortType) {
        return `${t1}`
    } else {
        return `${t1} ${t2}`
    }
}