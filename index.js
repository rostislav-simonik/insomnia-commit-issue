const { parse } = require('yaml')
const { readFileSync } = require('fs')


const src = readFileSync('./src.txt').toString()

console.log(src)

parse(src)

