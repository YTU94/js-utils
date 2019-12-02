
const webpack = require("webpack")
const config = require("../webpack.config")

console.log("build start")
webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.log("build fail:", err)
    } else {
        console.log("build success！")
    }
})
