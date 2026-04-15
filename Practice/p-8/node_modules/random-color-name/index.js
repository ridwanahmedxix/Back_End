const color = require('./color')

const randomColor = (array) => {

    let random = Math.floor(Math.random() * array.length)
    return array[random]
}
module.exports.random = () => randomColor(color)
module.exports.all = color
console.log(module.exports.random())