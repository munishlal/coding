
function factMemoization() {
    let cache = {};

    return function factorial(n) {
        if (n in cache) {
            return cache[n];
        } else {
            if (n === 2) {
                return 2;
            } else {
                cache[n] = n * factorial(n-1);
                return cache[n];
            }
        }
    }
}