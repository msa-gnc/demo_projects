// recursive Function
// IIEF (Immediatel Invoked Funcion Expresion)
// callback Function

const adYazdır = function () {
  console.log("merhaba");
};

adYazdır();

const isEvenOdd = function (a) {
  // a=67
  // let result=a%2===0 ? "Even" : "odd"
  // return result

  return a % 2 === 0 ? "Even" : "odd";

  // let result=a%2===0 ? "Even" : "odd"
  //  if(a<10){
  //     return a
  //  }
  //  else{
  //      return result}
};

let sayı = 67;
console.log(isEvenOdd(sayı));

console.log(isEvenOdd(58));

// let a=67
// let b=34
// let c=98

const enBüyük = function (a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
};
console.log(enBüyük(67, 34, 98));

let a = 67;
let b = 34;
let c = 98;

const enb = function () {
  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
};
enb();

// let a = 3
// let b = 50
// let c= 15

const Enb = function () {
  let biggest = a;
  if (b > biggest) {
    biggest = b;
  }
  if (c > biggest) {
    biggest = c;
  }
  console.log(biggest);
};

// -------------------------------------------------------------------------

const selamla = () => {
  console.log("Arrow Functiondan merhaba");
};

selamla();

//! Tek satırlık bir kod olacaksa {} ve return gerekmez

const naber = () => console.log("merhaba");

naber();

//-----------------------------------------------
const bol = (num) => (num % 3 === 0 ? "3 e bölüür" : "3 ' e bölünmez");

const ucebolum = (num) => {
  let result;
  if (num % 3 === 0) {
    result = "3e bölünür";
  } else {
    result = "3e bölünmez";
  }
  return result;
};

console.log(bol(45));
console.log(ucebolum(45));

const add = (a, b) => a + b;
add(10, 5);
console.log(add(10, 5));
document.write(add(8, 6));

// const add=(a,b)=> document.write(a+b)

const sHacmi = (r, h) => Math.PI * r * r * 2 * h;
console.log(sHacmi(2, 2));

//* verilen sayıya kadar olan asal sayıları bulalım

const topla = (n) => {
  let topla = 0;
  for (let i = 1; i < n; i++) {
    topla += i;
  }
  console.log(topla);
};

topla(10);

//* verilen sayıya kadar olan asal sayıları bulalım

const asal = (num) => {
  if (num < 2) {
    console.log("Bu değere kadar asal sayı yok");
    return;
  }

  for (let i = 2; i < num; i++) {
    if (i === 2) {
      console.log(i);
    } else {
      let asal = true;
      // asal mı kontrolü
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          asal = false;
          break;
        }
      }

      asal ? console.log(i) : "";
    }
  }
};

asal(4);

//!!! recursive fonksiyon------------------------------------

const toplamlar = (n) => {
  if (n < 1) {
    return n;
  } else {
    return toplamlar(n - 1) + n;
  }
};

console.log(toplamlar(8));

//! ---------------------------fonksiyolar IIFE---------------------------
(function () {
  console.log("merhaba IIFE");
})()(
  // (function(num){
  //     console.log("merhaba",num)
  // })(67)

  // (function(x,y){
  //     return x**y
  // })(5,9)

  function (x, y) {
    console.log(x ** y);
  }
)(3, 5);
