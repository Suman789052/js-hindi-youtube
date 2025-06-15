const accountId = 144553
let accountEmail = "chowdhurysuman243@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "suman0101xx@gmail.com"
accountPassword = "21212121"
accountCity = "Kolkata"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])