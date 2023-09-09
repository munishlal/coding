const fact = 5;

//!5 = 5*!4 = 4*!3 = 3*!2*1

function factorial_rec(fact) {
    //base condition
    if (fact === 2) {
        return 2;
    }
return  fact * factorial_rec(fact - 1);
}

factorial_rec(fact);
