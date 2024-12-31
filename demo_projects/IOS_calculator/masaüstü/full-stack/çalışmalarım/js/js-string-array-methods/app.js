const text = "Alo alo ordamısın alo"
let dizi = ["BMW","Audi","Mercedes","Scoda","Porche","Tesla","Audi"]

// !split 
// Stringi belirtilen şekilde parçalara ayırır ve parçalarını bir diziye aktarır
console.log(text.split(" "));

//! Slice Metodu string
// String içinde bir bölümü almak için kullanılır.
console.log(text.slice(4,8));

//! Slice Metodu array
console.log(dizi.slice(0,2));

//! substring
//Slicedan farkı negatif sayı kullanılmaz

//!   includes string
// includes()   ... yı içeriyor mu -> true yada false bir değer döndürür.
console.log(text.includes("alo")); //true or false
//!   includes array
console.log(dizi.includes("Tesla"));

//!    İndexOf   string
console.log(text.indexOf("alo")); // varsa  indez numarası yoksa -1
console.log(text.lastIndexOf("alo"));

//!    İndexOf   array
console.log(dizi.indexOf("Audi"));
console.log(dizi.lastIndexOf("Audi"));

//! search 
// search() bir string içindeki aranan elemanın ilk index numarsını yazar. Bulamazsa -1 dönderir.
console.log(text.search("alo"));


//!startsWith(), endsWith()
console.log(text.startsWith("A"));
console.log(text.endsWith("o"));

//! Replace
console.log(text.replace("alo", "hey"));
console.log(text.replaceAll("alo" , "hey"));
//! Trim   
let metin2= "   Clarusway    "
console.log(metin2)











//!                                 PUSH METODU  
//* push() dizinin sonuna eleman ekler.
 dizi.push("tofaş")
console.log(dizi);

//!                                 UNSHIFT METODU   
// unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
dizi.unshift("tofaş2")
console.log(dizi);

//!                                 POP METODU                                */
//** pop() son elemani siler ve sildigi elemani dondurur.
dizi.pop()
console.log(dizi);

//!                                 SHIFT METODU                            */
//* shift, dizinin 0. indeks elemanini siler ve silenen elemani dondurur.
dizi.shift()
console.log(dizi);

//!                                   SPLICE                                  */
//* Bir array içinde arada bir noktaya ekleme yapmak için kullanılır
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma yani aslında .. tane sil
//? 3.parametre: yeni eklenecek veri

dizi.splice(1,0,"e30")
console.log(dizi);


//! Join metodu   
//String metodu değildir
// Javascript dilinde join metodu, biz dizi elemanı string olarak birleştirir.  


console.log(dizi.join(" "));

//! Reverse Metodu  
// String metodu değildir
// reverse methodu ile bir diziyi tersine çevirebilmekteyiz. Dizi içerisindeki ilk değeri son, Son değeri ise ilk sıraya şeklinde sıralayabilmekteyiz.
console.log(dizi.reverse());
console.log(text.split(" ").reverse().join()); 


//!                                    SORT                                   */
//! sort metodu diziyi iterasyona ugratir ve ascii karaktere göre sıralama yapar.
//! Dolayısıyla string'le doğru şekilde sıralama yapabilir.

console.log(dizi.sort());
