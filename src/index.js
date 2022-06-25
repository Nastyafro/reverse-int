module.exports = function reverse (n) {
    return  Number(String(Math.abs(n)).split("").map((_,i,arr) => arr[arr.length - 1 - i]).join(""))
     
}

