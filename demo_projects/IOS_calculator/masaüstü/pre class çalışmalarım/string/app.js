const str1 = "Clarusway";
const str2 = `Hello`;

console.log(typeof str2);

//string constructor ile string oluşturma
const str3 = new String("World");
console.log(typeof str3);

const str4 = "🐓🐟😙😀";
console.log(typeof str4);
console.log(str4.length); //imojilerin length'i bir değil ikidir iki karakter uzunluğundadır

let kelime = "Clarusway";

console.log(kelime[0]);
console.log(kelime[1]);

for (let i = 0; i < 9; i++) {
  console.log(kelime[i]);
}

kelime[0] = "h";
console.log(kelime); // değişmez immutable

//! ************STRING PROPERTY ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir
//parantez açıp kapatmaya gerek yoktur

//? lenght
//Prototype

//! ************STRING METHODS ************
// charAt()             Returns the character at the specified index.
// charCodeAt()         Returns the Unicode of the character at the specified index.
// concat()             Joins two or more strings, and returns a new string.
// endsWith()           Checks whether a string ends with a specified substring.
// fromCharCode()       Converts Unicode values to characters.
// includes()           Checks whether a string contains the specified substring.
// indexOf()            Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()        Returns the index of the last occurrence of the specified value in a string.
// localeCompare()      Compares two strings in the current locale.
// match()              Matches a string against a regular expression, and returns an array of all matches.
// repeat()             Returns a new string which contains the specified number of copies of the original string.
// replace()            Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()              Searches a string against a regular expression, and returns the index of the first match.
// slice()              Extracts a portion of a string and returns it as a new string.
// split()              Splits a string into an array of substrings.
// startsWith()         Checks whether a string begins with a specified substring.
// substr()             Extracts the part of a string between the start index and a number of characters after it.
// substring()          Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()  Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()  Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()        Converts a string to lowercase letters.
// toString()           Returns a string representing the specified object.
// toUpperCase()        Converts a string to uppercase letters.
// trim()               Removes whitespace from both ends of a string.
// valueOf()            Returns the primitive value of a String object.

// length-property
const metin = "Clarusway IT Bootcamp😀";
let emoji = "😉";
console.log(metin.length);

for (let i = 0; i < metin.length; i++) {
  console.log(metin[i]);
}

console.log(metin.toLowerCase());
console.log(metin);
let metin2 = metin.toLowerCase();
console.log(metin2);

let metin3 = metin.toUpperCase();
console.log(metin3);
//! ---------------------------------------------------------
let şehir = "Istanbul";
console.log(şehir.toLocaleLowerCase("tr-TR"));
console.log(şehir.toLowerCase());

let text1 = "Merhaba";
let text2 = "JavaScript";

console.log(text1 + " " + text2);

let text3 = (text1 += text2);
console.log(text3);

let s1 = "Yakarsa Dünyayı";
let s2 = " Garipler Yakar";

console.log(s1.concat(s2));

let s3 = s1.concat(s2);
console.log(s3);

let str5 = "Clarusway";
let str6 = "Merhaba";
// let isim =prompt("Adın ne?")
// console.log(`${str5} ${str6} ${isim}`);

console.log("mmm m m  m  m m mmmm".length);

console.clear();

let metin1 = "Claruwsway IT Bootcamp";

console.log(metin1.split(" "));

let parcalanmısMetin = metin.split();

for (let i = 0; i < parcalanmısMetin.length; i++) {
  if (parcalanmısMetin[i] === "IT") {
    console.log("Bu cümlede IT kelimesi geçiyor");
  }
}
let date = "11.11.2024";
let newDate = date.split(".");
console.log(newDate);
let gun = newDate[0];
let ay = newDate[1];
let yil = newDate[2];

console.log(gun);

// join metodu string methodu değil array methodu

let kelime1 = "merhaba";
console.log(kelime1.split("").reverse().join(""));

let send = "yahşi günde yar yahşididr yaman günde yetiş gardaş";
console.log(send.split(" ").reverse().join(" "));

let kelime2 = "madam";
let mesaj =
  kelime2 === kelime2.split("").reverse().join("")
    ? "polidromdur"
    : "polidrom değildir";
console.log(mesaj);

console.clear();

let sentence = "Merhaba cohort 18";
console.log(sentence.slice(-7));
console.log(sentence.slice(7));
console.log(sentence.slice(0, 7));
console.log(sentence.slice(8, 14));

console.log(sentence.substring(0, 8));
console.log(sentence.substr(8, 6));

let kelime4 = "To be or Not To be, That is The qeustions";
console.log(kelime4.includes("TO BE"));
console.log(kelime4.includes("To      be"));
console.log(kelime4.includes("Tobe"));
console.log(kelime4.includes("To be"));

let url = "https://clarusway.com";
let msg = url.includes("https") ? "güvenli" : "güvenli değil";
console.log(msg);

console.log(kelime4.indexOf("be"));
console.log(kelime4.indexOf("musa"));

console.log(kelime4.search("be"));
console.log(kelime4.indexOf("musa"));

let variable = "HarveyWatson";
console.log(variable.search(/h/));
console.log(variable.search(/h/i));
console.log(variable.search(/A/i));

// [A-Z] [a-z] [0-9]

let kelime5 = "To be or Not To be, That is The qeustions";
console.log(kelime5.search(/[A-Z]/));
console.log(kelime5.search(/[a-z]/));
console.log(kelime5.search(/[0-9]/));
console.log(kelime5.search(/[^A-Z]/));

let phone = "My phone number is 123-456-7890";
let result = phone.match(/\d+/g);
console.log(result);

console.log(phone.startsWith("M"));
console.log(phone.startsWith("m"));
console.log(phone.endsWith(5));
console.log(phone.endsWith(0));

let text4 = "Hello World, Who are you World?";

let newText = text4.replace("World", "javascript");
console.log(newText);
let allNewText = text4.replaceAll("World", "javascirpt");
console.log(allNewText);

let metin5 = "   clarusway        ";
console.log(metin5);
let yeniMetin = metin5.trim();
console.log(yeniMetin);
