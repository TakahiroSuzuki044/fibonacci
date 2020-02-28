'use strict';

function fibonacci(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

const number = 40;
for (let i = 0; i < number; i++) {
    console.log(fibonacci(i));
}