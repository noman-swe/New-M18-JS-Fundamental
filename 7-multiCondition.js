var gotJob = true;
var hasFlat = false;
var moneySaved = 150000;
moneySaved = 3400000;

console.log(moneySaved);

if(gotJob == true){
    // console.log(`let's marrige`);
}else{
    // console.log('tor kopal e biye nai');
}

// double conditons
if(gotJob == true && moneySaved > 200000){
    // console.log('chol biya kori');
}
else{
    // console.log('Sorry');
}

// more than double
if(gotJob == true && moneySaved > 200000 && hasFlat ==true){
    console.log('chol biya kori');
}
else{
    console.log('Sorry');
}

// OR
moneySaved = 5000;
console.log(moneySaved);

if(gotJob == true || moneySaved > 200000 || hasFlat == true){
    console.log('chol biya kori or');
}
else{
    console.log('Sorry');
}