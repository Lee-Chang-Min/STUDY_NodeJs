const { odd, even } = require('./var');

console.time('dd')

const checkNumber = require('./func');
function checkString(str){
    if (str.length % 2) {
        return odd 
    } else {
        return even;
    }
}

console.log(checkNumber(10));
console.log(checkString('hello'));

console.timeEnd('dd')
console.dir()
console.trace()
console.table([{ name : '제로', birth: 1994}, {name: 'hero', birth: 1998}])