const now = new Date();
console.log(now);

// METHODS
// Getting the date's components
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getUTCHours());
console.log(now.getTimezoneOffset());   // in minutes
console.log(now.getTime());     // milliseconds since 1970

// set methods
console.log(now.setHours(18));
console.log(now);


let start = new Date();

for (let i = 0; i < 100000000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Loop completed for ${end - start} ms.`);