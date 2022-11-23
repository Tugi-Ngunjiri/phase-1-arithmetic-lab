"before all" , let = require("mocha");
 Hook in "{root}",0.1 * 0.1;
//=> 0.010000000000000002

0.1 + 0.1 + 0.1;
//=> 0.30000000000000004

1 - 0.9;
//=> 0.09999999999999998
// Write your code here
40 + 2;
//=> 42
9001 - 9000;
//=> 1
6 * 7;
//=> 42
9001 / 42;
//=> 214.3095238095238
9001 % 42;
//=> 13
2 ** 8;
//=> 256
2 - (2 % 2) + (2 / 2 ** 2) * 2;
//=> 3

2 - ((2 % (2 + 2)) / 2 ** 2) * 2;
//=> 1
let c= 0;
//=> undefined

counter++;
//=> 0

counter;
//=> 1
let cto= 0;
//=> undefined

++counter;
//=> 1

counter;
//=> 1
let ct = 0;
//=> undefined

// Return the current value of 'counter' and then decrement by 1
counter--;
//=> 0

// Check the new value of 'counter'
counter;
//=> -1

// Decrement 'counter' and then return the new value
--counter;
//=> -2

// Check the new value of 'counter'
counter;
//=> -2
let counter = 0;
//=> undefined

counter += 10;
//=> 10

counter -= 2;
//=> 8

counter *= 4;
//=> 32

counter /= 2;
//=> 16

counter %= 6;
//=> 4

counter **= 3;
//=> 64
counter++;
//=> Number.isInteger(42);
//=> true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

Number.isInteger(42);
//=> true

Number.isInteger(0.42);
//=> false
Number.isFinite(9001);
//=> true

Number.isFinite(Infinity);
//=> false
Number.isNaN(10);
//=> false

Number.isNaN(undefined);
//=> false

Number.isNaN(NaN);
//=> trueNumber.parseInt('100', 10);
//=> 100

Number.parseInt('100', 2);
//=> 4
Number.parseFloat('3.14159');
//=> 3.14159
Math.ceil(0.5);
//=> 1

Math.floor(0.5);
//=> 0

Math.round(0.5);
//=> 1

Math.round(0.49);
//=> 0
Math.max(1, 2, 3, 4, 5);
//=> 5

Math.min(1, 2, 3, 4, 5);
//=> 1
Math.random();
//=> 0.4495507082209371
Math.floor(Math.random() * 10) + 1;
//=> 8

Math.floor(Math.random() * 10) + 1;
//=> 1

Math.floor(Math.random() * 10) + 1;
//=> 6
