//Memoization + closures
//const fastfib = fibMemoization();
// fastfib(5);
function fibMemoization() {
    let cache = {};
        cache[0] = 0;
        cache[1] = 1;
   // const num = n;    
    return function fib(n) {
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n-2)+ fib(n-1);
               // if(n === num) {
                    console.log(cache);
               // }
                
                return cache[n];               
            }
        }
    }
}
