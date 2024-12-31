console.log("//! ARRAY DEFİNİTİON-------------------------------");


let names = ["Abdurrahman" , "Gülaçan", "Mustafa", "Mevlüt Enes", ]
let names2 =["Musa","Ebru","Furkan","Hayal"]
let ages=[59,55,36,26,31,31,23,3]

let kedi = names2[3]

console.log(names);
console.log(names2);
console.log(ages);
console.log(kedi);


console.log("//! CHANGE AN ELEMENT OF THE ARRAY--------------");

names2[3]="zeynep"
console.log(names2);

//! Arrayler belirli bir object türüdür. JavaScript type operatörü arrayler için "object" döndürür.

console.log(typeof names);

// ! bir object örneği
let namess = {firstname:"Musa",lastname:"GENÇ",age:"31"}
console.log(namess);
// ! length property : eleman sayısını döndürür.
console.log(names2.length);

let numberOfElement = names2.length;
console.log(numberOfElement);


console.log("//! METHODS --------------------------------------------------");
// ?concat() birleştir
// ?sort() sırala
// ?push() sonuna ekle
// ?pop()  sonundan çıkar
// ?unshift() başına ekle
// ?shift() başından çıkar
// ?splice() 
// ?slice() 
// ?indexOf() 
// ?lastIndexOf() 


console.log("//! concat() birleştirme----------------------------------------");
//atama yapmadan direk consolelog concat yaptım
console.log(names.concat(names2));


let names3 = names.concat(names2)
let names4 = names2.concat(names)
//sıralama farklı olur 
//names3 için names concat names2 yapıldı.
//names4 için names2 concat names yapıldı.
console.log(names3);
console.log(names4);


// kendisiylede concat edilebilir.
let names5 = names.concat(names)
console.log(names4);

console.log("//! sort() (sorts alphabetically)-------------------------------");

let sorted = names.sort()
console.log(sorted);

// ! sayı sıralarken ilk rakama göre sıralar 


let numbers = [9000,800,50,2] //? çıktısı  [2, 50, 800, 9000]
console.log(numbers.sort());

console.log("//! push() ----------------------------------------------");

// ?  The push() method adds a new element to the end of an array. sonuna eleman ekler

names2.push("Ali","Songül")
console.log(names2);

//! ******warning***** böyle birşey denedim ama olmadı consolelog(names6) diyince sadece 7 sayısını döndürdü.
let names6 = names2.push("lokman")
console.log(names2);
console.log(names6);

console.log("//! pop()----------------------------------------------------");
//?The pop() method allows you to remove the last element from an array. sondaki elemanı siler


console.log(names2);
names2.pop()
console.log(names2);



console.log("//!unshift()---------------------------------------------------");
// ? başına eleman ekler

console.log(names2);
names2.unshift("Elif","Fatma")
console.log(names2);


console.log(" //! shift() -------------------------------------");
// ? baştaki elemanı siler

console.log(names2);
names2.shift()
console.log(names2);


console.log("//! splice()---------------------------");
 // ? eskilerden sil yenileri onların yerine ekle

 console.log(names2);
 //? 1)splice ile silme 1.indexten itibaren iki eleman sil 
  names2.splice(1,2)
 console.log(names2);

//  let splice1 = names2.splice(2,5) sil ve silinenlerle yeni bir array oluştur

 //? 2) splice ile sil ve ekle yada silmeye 0 yaz silmeden ekle
 names2.splice(1,0, "Ayşe", "Fatma") // birinci indeksten itibaren silmeden ekle
 console.log(names2);

 names2.splice(0,2, "Ebru", "Musa", "Hayal") // 0dan başla iki tane sil yenileri ekle
 console.log(names2); 

 //? bir tane silip yerine bir tane ekleme dolaylı olarak değiştirme

 console.log(names2);
 names2.splice(3,1,"Mevlüt") //3den başladık bir tane sildik silinenin yerine mevlütü ekledik yani değiştirdik

 //? deletecount belirtilmemişse kaçtan başlarsa geriye kalan hepsini siler

 console.log(names2);
 names2.splice(3)
 console.log(names2);


 console.log("//! slice-------------------------------------------------");
//  bir diziden belirli bir kısmı almak için kullanılır orjinel dizi değişmez
 console.log(names);
let names_1 = names.slice(1,2) //end dahil değildir 1 den başla ikiye kadar al iki dahil değil
console.log(names_1);

let names_2 = names.slice(1) // 1den başla hepsini al
console.log(names_2);
 