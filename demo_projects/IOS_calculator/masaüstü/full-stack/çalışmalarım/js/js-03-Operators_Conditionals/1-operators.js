/* ---------------------------------- */
//!             OPERATORS             */
/* ---------------------------------- */
//! Aritmatik Operatorler

let a=10
let b=2

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a ** 3)
console.log(a % b) // mod alma operatoru : kalan bulma

// Öncelik sıralaması-  işlem önceliği
// üs, parantez içi, çarpma/bölme, çıkarma/toplama

// Dakika olarak verilen ağaşıdaki deger kaç saat kaç dakikaya denk gelmektedir
let sure=377

let saat = Math.trunc(377/60)
console.log(saat);

let dakika = 377%60
console.log(dakika);
console.log(`${saat}:${dakika}`)

//! INCREMENT ++  - DECREMENT --

let x=10
let y=10

// x ++ önce yazdır sonra arttır

console.log(y++); // consolda 10 yazdı ama y 11 oldu
console.log(y); // 11 yazdırdı
// ++ x önce arttır sonra yazdır

console.log(++x) // consolda 11 yazdırdı
console.log(x); // 11 yazdırdı

// x ++ önce yazdır sonra azalt
// ++ x önce azalt sonra yazdır
//x=x-1
console.log(x--)
console.log(x);

console.log(--y)
console.log(y);

//! ASSIGMENT OPERATORS

let t=7;
let z=6;

console.log(t)
// atama operatoru =
t=z // z değerini t ye aktarıyoruz.
console.log(t)
console.log(z);

t=t+z
t+=z
console.log(t)

t=t+z
t+=z
console.log(t)
t-=z
console.log(t)
t*=3 // t=t*3 
console.log(t)
t/=4
console.log(t)
t%=4
console.log(t)
t**=5
console.log(t)

let c=2
let d="2"

console.log(typeof c)
console.log(typeof d)
console.log("c ve d birbirine eşit mi?:", c==d) // == eşittir tipine bakmadan sadece değerler aynıysa eşit olarak kabul eder.

console.log("c ve d birbirine eşit mi?:", c===d) // === hem veri tipini kontrol eder hemde değeri kontrol eder.

// otomatik tip dönüşümü - Type conversion
// + hariç diğerlerinde bir string ve number ifade işleme alınıyosa js insiyatif kullanır ve işlemi gerçekleştirir.
console.log(c-d)

console.log(c != d) // false sonucu vererek eşittir demiş oluyor: 
//eşit değildir =>false yani eşittir sonucunu veriyor. ikisi değer olarak eşit olduğu için eşit değildir kontrolünde (false) yani eşittir olarak veriyor. Tiplerine bakmadan kontrol ediyor

console.log(c !== d) // 2="2" eşit değil değil mi, evet bunlar eşit değil.

/* ----------------------------------------------------------------- */

console.log(5>4)
console.log(3<10)
console.log(6>=6) 
console.log(9>=6)  
console.log(12<=19)

/* ----------------------------------------------------------------- */

/* ---------------------------------- */
//        !  LOGICAL OPERATORS         */
/* ---------------------------------- */
//! AND operatoru &&  
//mükemmeliyetçidir- herşey true olmalı - bir tane false gördüğü anda orada işlem bitiyor.
// ! ********************************************************
// !JavaScript'te boş bir obje {} her zaman true olarak değerlendirilir. Bunun nedeni, JavaScript'te objelerin her zaman truthy (doğru) bir değere sahip olmasıdır.
// !  console.log(Boolean({})) true
console.log(Boolean({}), "boş object true değer döner")
//! ********************************************//


// falsy deger üretenler
console.log(Boolean(""))
console.log(Boolean([]))
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean(false))

console.log(true&& false && true)
console.log("elma" && "armut" && "portakal" && "kiraz")
/* ------------------------------------------------------------- */
//! OR operatoru ||
// mütevazi, iyi niyetli bir arkadaşımız

//? Herşey false olsa bile bir tane true değer varsa true döndürmeye yeter
//? Herşey false ise son false değerini bize döndürür

console.log(false || false ||false || true ||false || false)
console.log(null || 0 ||"" || "tr" || [] || "merhaba")

