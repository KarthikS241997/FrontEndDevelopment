function OddEven(input) {
    if (input % 2 == 0) {
        console.log(input + " is a even number");
    } else {
        console.log(input + " is odd number");
    }
}

OddEven(10);
OddEven(5);
OddEven(0);

var EvenOdd = function(input) {
    if (input % 2 == 0) {
        console.log(input + " is a even number");
    } else {
        console.log(input + " is odd number");
    }
}

EvenOdd(15);
EvenOdd(10);
EvenOdd(0);

function sample(input) {
    if (input % 2 == 0) {
        return console.log(input + " is a even number");
    } else {
        return console.log(input + " is odd number");
    }
}

console.log(sample(10));