//0 1 1 2 3 5 8 13 21 34
//0 = 0; 1 = 1; 2 = 0 + 1; 3 = 1 + 1; 4 = 2 + 1

function fib_index(number) {
    if (number < 2) {
        return number;
    }
    return fib_index(number-1) + fib_index(number-2);
}


