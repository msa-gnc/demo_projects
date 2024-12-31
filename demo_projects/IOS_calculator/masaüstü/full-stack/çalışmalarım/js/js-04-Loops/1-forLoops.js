/* -------------------------------------------------------------------------- */
//!                                 FOR LOOP                                  */
/* -------------------------------------------------------------------------- */
// for (başlangıç; koşul; artış) {
//     // Döngü bloğu
//   }

// Başlangıç: Döngünün başlangıcında yapılacak işlem. Bu genellikle bir sayaç değişkeni tanımlar.
// Koşul: Döngünün çalışmaya devam etmesi için gereken koşuldur. Koşul sağlanmadığında döngü sona erer.
// Artış: Her döngü sonunda sayaç değişkeninin nasıl değişeceğini belirler.
for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  /* -------------------------------------------------------------------------- */
// 3 kişinin iki notunu alan ve ortalmasını(herbirinin ve hepsinin) bulan programı yazın

// let sum=0;
// for (let t=1; t<=3; t++){
//     const no1=+prompt("1.notu girin:")
//     const no2=+prompt("2.notu girin:")
//     let ort=(no1+no2)/2
//     console.log(`${t}. öprencinin ortalaması:${ort}`)
//     sum=sum+ort;

// }
// let genelOrtalama=sum/3
// console.log(`Genel ortalama:${genelOrtalama}`)
/* -------------------------------------------------------------------------- */
  let sum =0
  for (let i = 1; i<=3; i++){
    let not1=80
    let not2=80
    let ortalama = (not1 + not2)/2

    console.log(`${i}. öğrencinin ortalaması ${ortalama}`);
    sum = sum + ortalama
    

  }

 let genelortalama = sum/3
 console.log(genelortalama);

 //! YAPMAMANIZ GEREKEN DURUMLAR
//!   1. Döngünün Çalışmaması Örneği
// Bir döngünün çalışmamasına neden olan durumlardan biri başlangıç koşulunun koşulu sağlamamasıdır:  

for (let i=1; i===50; i++){
    console.log(i)
}
console.log("döngüden girmedim ki")

  //! 2. Sonsuz Döngü Örneği
  // Bir döngü, koşul sağlanmaya devam ettikçe çalışır. Eğer koşul hiç sağlanmazsa, döngü sonsuz döngüye girer ve program donabilir.
//   for (let i=1; i!=50; i=i*2){
//     console.log(i)
// }
/* -------------------------------------------------------------------------- */
//! geri doğru döngü kullanılabilir
// for ( let i=50;i>=0; i--){
//     console.log(i)
// }
//! BREAK ve CONTINUE keywordleri kullanımı

console.clear()
for (let i=0; i<=10; i++){
    if (i%3){
        continue;
    }

    if (i===6){
        break;
    }

    console.log(i)
}

//!continue ve break loop içinde kullanılır if yapısında kulanılmaz.
//! if yapısı içinde continue ve break kullanılmaz
//? loop  içindeolmayan if de continue ve break çalışmaz
// Örnek - Hatalı Kullanım:
// let number = 5;

// if (number === 5) {
//     break;  // Hata verir çünkü break sadece döngülerde kullanılabilir.
// }

// if (number % 2 === 0) {
//     continue;  // Hata verir çünkü continue sadece döngülerde kullanılabilir.
// }

//? örnek :1'den 10'a kadar olan sayıların toplamını bulan bir program yazın.


let sum1 = 0

for (let i = 1; i<=10; i++){
    sum1 += i
    console.log(sum1);
}


//? örnek :1'den 50'ye kadar olan çift sayıları ekrana yazdıran bir program yazın.
for(let i = 1; i<=50; i++){
    if(i%2===0){
        console.log(i);
    }
}

//? örnek :Faktöriyel Hesaplama
let number4=5
let factorial=1

for(let i = 1; i<=number4; i++){
 factorial*=i
    
}
console.log(factorial);
console.log(`${number4}!=${factorial}`);





//? örnek : Bir listenin elemanlarını for döngüsü kullanarak 2 katına çıkarın.Örneğin: [1, 2, 3] → [2, 4, 6] */

let myList = [1,2,3]
let newList = []


for (let i = 0; i<= myList.length-1 ; i++){
    newList.push(myList[i]*2)

}
console.log(newList);

//? örnek :Bir kelime içinde kaç tane "a" harfi olduğunu sayan bir program yazın.
let myString = `
Korkma! Sönmez bu şafaklarda yüzen al sancak,
Sönmeden yurdumun üstünde tüten en son ocak.
O benim milletimin yıldızıdır, parlayacak;
O benimdir, o benim milletimindir ancak.
Arkadaş yurdumu alçaklara uğratma sakın`
let counter =0

for(let i = 0; i<=myString.length; i++){
    if(myString.toLowerCase()[i] === "a"){
        counter++
    }

}
console.log(` a harfi sayısı ${counter}`);


//? örnek :İlk 10 Fibonacci sayısını ekrana yazdıran bir program yazın.(Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, ...)

let a = 0
let b = 1
let c;
console.log(a);
console.log(b);

for(let i = 0; i<8; ++i){
  c = a + b;
  console.log(c);
  a = b
  b = c
}
//? örnek : Kullanıcının girdiği bir sayının asal olup olmadığını kontrol eden bir program yazın.

sayi1 = 234
let asal = true

if (sayi1<2){
    asal = false
}
else{
    for(let i = 2; i<sayi1; i++){
        if(sayi1%i ===0){
            asal=false;
         break
        }
    }

}
 console.log((asal? "asaldır" : "asal değildir"));

//? örnek :1'den 10'a kadar olan sayıların çarpım tablosunu ekrana yazdıran bir program yazın.

for  (let i=1;i<=10;i++){
    for (let t = 1; t<=10; t++){
        console.log(i*t);
    }
}

//? örnek :Yıldız (*) karakteri kullanarak  bir ters üçgen desen oluşturan bir program yazın:
hashtag ="*"
for (let i=5;i>=1;i--){
    console.log(hashtag.repeat(i));
    
}



//? örnek :Bir listenin içinde belirli bir sayının olup olmadığını kontrol eden bir program yazın.
 let myList1 = [1,2,3,4,5,6,7,8]
 let number=9
 let sayıVar= false


 for(let i =0; i<myList1.length; i++){
    if(myList1[i]===number){
      sayıVar =true
      break
    }
    

 }

 console.log(sayıVar?"sayı listede var":"sayı listede yok");

