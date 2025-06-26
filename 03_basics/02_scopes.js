// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);




function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);

    }
    // console.log(website);

}
// console.log(username);

// +++++++++++++++++++ interesting ++++++++++++++++++++


console.log(addOne(5)); // its types function declaration doess not throw any error
function addOne(num) {
    return num + 1
}


console.log(addTwo(5)); // its will throw error because its it's can't be call before function [For this type function decleration]
const addTwo = function (num) {
    return num + 2
}

