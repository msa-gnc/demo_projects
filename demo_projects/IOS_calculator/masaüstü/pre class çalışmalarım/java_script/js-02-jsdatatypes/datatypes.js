// *************** DATA TYPES **********

//!--------------------------------------
//! PRIMITIVE DATA TYPES
//!--------------------------------------

//! *********** NUMBER DATA TYPES *******
// Number : Tamsayılar ve ondalıklı sayıları tutar.

const age=40
console.log(typeof age)

//? MATH objesi  matematiksel işlemler için gerekli metodlar barındırır.


let pi=Math.PI
console.log(pi)
console.log(Math.PI)

const r=8
console.log(pi*r*r);

console.log(Math.pow(r,2));
console.log(Math.pow(9,3));


console.log(Math.round(pi))
console.log(Math.ceil(pi))
console.log(Math.floor(pi))

let sayı1=1.54
console.log(Math.trunc(sayı1));
console.log(Math.round(sayı1));
console.log(Math.ceil(sayı1));
console.log(Math.floor(sayı1));

console.log(sayı1.toFixed(5));

console.log(Math.max(1,2,3,4,5,6,12,13,89,21,54));
console.log(Math.min(1,2,3,4,5,6,-12,13,89,21,54));

console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.random()*100)


console.log(Math.sqrt(81));
console.log(Math.sqrt(16))

//! ********** STRING DATA TYPE********

let text1="bu 1 stringdir"
console.log(text1);

let text2='Musa\'ın kardeşi.'
console.log(text2);


let text3="bir al satıra geçmek için \n ters slash n işaretini kullanıyoruz"
console.log(text3);

let text4="satır başına geçmek için\r escape karakterlerden ters slash r kullanılır ama inmedi anlamadım"
console.log(text4);

let text5="dikey tab kaççış karakteri \v ne işe yarıyor bilmiyorum"
console.log(text5);

let text6="sayfa ilerlee kaçış karakteri \f ne işe yarıyor anlamadım"
console.log(text6);

//! String Birleştirme
//?1- + işareti ile birleştirme

let text7="merhaba "
let text8="nasılsın"
console.log(text7 + text8);

//? 2- concat metodu

let text9=text7 + text8
console.log(text9);
 console.log(text7.concat(text8));

 let text10=text7.concat(text8)
 console.log(text10);

 
//! Temlate Literal - String Template -ES6 
//? Backtik işareti `` 

 console.log(`tırnak yerine backtik işareti 
    kyarsam
    bu şekilde
    yazabilirim`);

    console.log(`beck tik işareti ile ${text7}`)
let ad="musa"
let soyad="genç"

console.log(`benim adım ${ad}, soyadım ${soyad}`);

let ad2="Sema"
let soyad2="Güven"
let meslek="Developer"

let text11=`Personelimiz ${ad2} ${soyad2}, firmamızda ${meslek} olarak çalışmaktadır.`
console.log(text11)


//! ********** BOOLEAN DATA TYPE********

// true yada false değerlerini tutar.
// Daha çok mantıksal karşılaştırmalarda kullanıyoruz.
let değişken1=true
console.log(değişken1);
console.log(typeof değişken1);
let değişken2=0

//Falsy Values

//false: Boolean değeri.
// 0: Sayı sıfır.
// -0: Negatif sıfır.
// 0n: BigInt sıfır.
// "" veya '': Boş string (dize).
// null: Değer yok.
// undefined: Tanımsız değer.
// NaN: Sayı değil (Not-a-Number).

// Truthy values - Falsy değer üretenler dışındaki herşey
// sayılar,karakterler,işaretler .....
console.clear()

//! ********** UNDEFINED DATA TYPE********
// Js de bir değişkenin türü ilk atanan değere göre belirliniyor. İlk değer atanmadığında değişken undefined olarak tanımlanır.


let değer1=10
let değer2="10"
let değer3

console.log(typeof değer1);
console.log(typeof değer2);
console.log(typeof değer3);

// değer göndermeyen bir fonksiyon undefined dönebilir
function example(){
    let sum=45435+6456;
}

console.log(example())


//! ********** NULL DATA TYPE********
// boş bir değişken üretmek için kullanılır.

let değişken5=null
console.log(değişken5);
console.log(typeof değişken5);

//!--------------------------------------
//! NONPRIMITIVE DATA TYPES -REFERENCE BASED
//!--------------------------------------

//! *********** ARRAY *******
//Birden fazla değer tutabilen değişkenlere array(dizi) denir
// sıralı şekilde tutulan verilerdir.



let siniftakiOgrenciYaslari=[23,24,22,21,25,21]
console.log(siniftakiOgrenciYaslari);
console.log(siniftakiOgrenciYaslari[3]);

//! *********** OBJECT *******

let obj={
    name:"Helen",
    lastname:"güven",
    age:40
}
console.log(obj);

//!--------------------------------------
//! TYPE CONVERSION
//!--------------------------------------

//? Kullanıcıdan alınan bilgi yapılarından(input,prompt...) bilgi her zaman string olarak gelir. Sayısal bir ifade bile olsa.

//! Automatically type conversion

let deger4=40
let deger5="14"

console.log(deger4+deger5) // + işareti stringlerde kullandığımız concatanation işlemi olabilir siye matematiksel toplama yapmaz string toplaması yapıyor(yan yana yazıyor)

console.log(deger4-deger5) //  Automatically type conversion : Sevgili js motoru çıkarma,çapma bölmede Automatically type conversiona göre davranıyor

console.log(deger4*deger5) 
console.log(deger4/deger5) 

console.clear()
//? STRING TO NUMBER
// Number
// parseInt
// parseFloat
// başına + işareti koyularak

let m = "13.50" // string

let m1 = Number(m) //! Number ile
console.log(m1);
console.log(typeof m1);

let m2 =parseInt(m) //! parseInt ile tam kısım alındı ondalık kısım alınmadı
console.log(m2);
console.log(typeof m2);

let m3 =parseFloat(m) //! parseFloat ondalık kısımla birlikte alındı
console.log(m3);
console.log(typeof m3);

let m4 =+(m)
console.log(m4);


//! DATE OBJECT

console.log(new Date);

console.log((new Date).getFullYear());
console.log((new Date).getMonth());


const tarih=new Date 

console.log(tarih.getFullYear());
console.log(tarih.getMonth());
console.log(tarih.getDay()); 
console.log(tarih.getHours());
console.log(tarih.getMinutes());
console.log(tarih.getSeconds());

console.log(`${tarih.getHours()}:${tarih.getMinutes()}:${tarih.getSeconds()}`);
