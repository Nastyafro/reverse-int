module.exports = function reverse (n) {
    return Math.abs((n<0?-1:1)*parseInt(n.toString().split('').reverse().join('')));
      
}

