//rob adjacent house

function robMemoization() {
    let cache = {};
    let arr1 = [];

    return function rob(arr,n) {
        if (n < 0) {
            return 0;
        }
        if (n === 0) {
            return arr[0];
        }
        cache[0] = cache[0] + arr[n] + rob(arr, n-2);
        cache[1] = rob(arr, n-1);

        return (Math.max(cache[0],cache[1]));
    }
}