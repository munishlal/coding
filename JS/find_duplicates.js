
var my_dupes = ['a','b','c','a','b','z','m','x'];

function my_func (my_dupes) {
    var cache = {};
    let i = my_dupes.length - 1;
    while (i >= 0) {
        console.log();
        if (my_dupes[i] in cache) {
            cache[my_dupes[i]] = cache[my_dupes[i]] + 1;
        } else {
            cache[my_dupes[i]] = 1;
        }
        
        i--;
    }
    console.log(cache);
    return (cache);
};

my_func(my_dupes);