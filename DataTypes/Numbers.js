let billion = 1000000000;
//We can use _ (to make it more readable)
let billion2 = 1_000_000_000;

console.log(billion);
console.log(billion2);

//To type than number faster we can use (e) and enter the number of zeros.
let billion3 = 1e9;
console.log(billion3);

1e3 === 1 * 1000;
1.23e6 === 1.23 * 1000000;

//one microsecound
let mcs = 0.000001;
//As well we can use (e) but negative one.
let ms = 1e-6; // 6 zeros in left side
console.log(mcs);
console.log(ms);
