'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);
function fibonacci(num) {
    if (memo.has(num)) {
        return memo.get(num);
    }
    const value = fibonacci(num - 1) + fibonacci(num - 2);
    memo.set(num,value);
    return value;
}

const number = 40;
for (let i = 0; i < number; i++) {
    console.log(fibonacci(i));
}