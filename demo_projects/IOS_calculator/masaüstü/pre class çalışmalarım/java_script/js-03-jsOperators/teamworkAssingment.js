// !leap year

let year = 2024

// if (year%4 == 0){
//     if (year%100 !== 100){
//         console.log("It's a leap year." )
//     }
//     else{"It's a not leap year."}
// }

// else if (year%400 == 0){
//     console.log("It's a leap year");
// }
// else(console.log("It's a not leap year"))

if (year%4 ==0 && year%100 !== 0){
    console.log("It's a leap year");
}
else if(year%400 == 0){
    console.log("It's a leap year");
}
else(console.log("It's a not leap year"))

// ! Get Season

let month = 11
let day = 20

if ( (month<1 || month>12 || day<1 || day>31) ||  ((month===4 || month===6 || month===9 || month===11) && (day===31)) || (month===2 && day>29) ){
    console.log("Invalid month or day. Please enter valid values.")
}
else {
    if ((month === 2 && (day>=21 && day<= 29)) ||  month===3 || (month === 4 && day<31) || month===5){
        console.log(` The season for ${month} /${day} is Spring.`);
    }
    else if ((month===6 && day<31) || month === 7 || (month===8 && day<31 ) || (month===9 && day<=21 )){
        console.log(` The season for ${month} /${day} is Summer.`);
    }
    else if((month===9 && day>21 && day<31) || month===10 || (month === 11 && day<20)){
        console.log(`The season for ${month} /${day} is Fall.`);}

    else{console.log(`The season for ${month} /${day} is Winter`);}
}


