const obj = { name : "Hi My Name is Binnie"};
const str = "Hi My Name is Binnie";


function rev_str(str) {
    //check input
    if(!str || str.length < 2 || typeof str !== 'string') {
        return  console.log('ooops...needs string to reverse.');
    }
    const arr1 = str.split("");
    let arr2 = [];
    
    console.log(str);
    
    for (let i=arr1.length-1; i>=0; i--) {
        arr2.push(arr1[i]);
    }
    
    console.log("rev_str: "+ arr2.join(''));

    return arr2.join('');
}


function rev_str2 (str) {
//check
if (!str || str.length < 2 || typeof str !== 'string') {
    return console.log('...oops need a string');
}

//let rev = str.split('').reverse().join('');
let rev = [...str].reverse().join('');

return console.log("rev_str2: " + rev);

}

//main
rev_str(str);

rev_str2(str);