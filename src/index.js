module.exports = function reverse (number) {
    return Number(Math.abs(number).toString().split('').reverse().join(''));
}
