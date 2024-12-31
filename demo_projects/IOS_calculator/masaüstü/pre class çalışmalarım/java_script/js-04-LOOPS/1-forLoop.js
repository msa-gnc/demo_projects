// for (statement 1; statement 2; statement 3)
// code block

// statement1:kod bloğunun yürütülmesinden önce (bir kez) yürütülür. (i = 0) (değişken )
// statement2:kod bloğunun yürütülmesi için koşulu tanımlar. (i < 6) (koşul)
// statement3:kod bloğu yürütüldükten sonra (her seferinde) yürütülür. (i++) (arttırma azaltma)

/* -------------------------------------------------------------------------- */
//!                                 FOR LOOP                                  */
/* -------------------------------------------------------------------------- */
// for (başlangıç; koşul; artış) {     // Döngü bloğu
//   }

// Başlangıç: Döngünün başlangıcında yapılacak işlem. Bu genellikle bir sayaç değişkeni tanımlar.
// Koşul: Döngünün çalışmaya devam etmesi için gereken koşuldur. Koşul sağlanmadığında döngü sona erer.
// Artış: Her döngü sonunda sayaç değişkeninin nasıl değişeceğini belirler.

// console.clear();
// for (let i = 0; i < 6; i++) {
//   console.log(i);
// }
// -------------------------------------------
//i=i+2 demek i+=2   burada iki iki artıracak
// for (let i = 0; i < 10; i = i + 2) {
//   console.log(i);
// }
// --------------------------------------------------------------------
// for (let i = 1; i < 10; i += 2) {
//   console.log(i);
// }
// --------------------------------------------------------------------

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     console.log("çift");
//   } else {
//     console.log("tek");
//   }
// }
// --------------------------------------------------------------------

// for (let i = 15; i >= 0; i--) {
//   console.log(i);
// }
// --------------------------------------------------------------------

//
// --------------------------------------------------------------------

// let çıkarma = 0;

// for (let i = 25; i > 1; i--) {
//   çıkarma -= i;
// }
// console.log(çıkarma);
// --------------------------------------------------------------------
// let tplam = 0;

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
//   tplam += i;
//   console.log("toplam", tplam);
// }

// --------------------------------------------------------------------
// let sum = 0;
// for (let i = 1; i <= 3; i++) {
//   let not1 = +prompt("1.notu giriniz");
//   let not2 = +prompt("2.notu giriniz");
//   let ort = (not1 + not2) / 2;
//   console.log(`${i} ortalama:${ort}`);
// }

// for (let i = 0; i < 5; i++) {
// i zorunluluk değil istersen ğ kullan
//   console.log(i);
// }

//! YAPMAMANIZ GEREKEN DURUMLAR
// //!1-döngünün çalışmamaısı örneği
// Bir döngünün çalışmamasına neden olan durumlardan biri başlangıç koşulunun koşulu sağlamamasıdır:
// for (let i=1; i===50; i++){ // i bire eşit i 50ye eşit diyorsun şart durumu yok
//     console.log(i);
// } //döngüye girmiyor hiç

// //! sonsuz döngü örneği
// Bir döngü, koşul sağlanmaya devam ettikçe çalışır. Eğer koşul hiç sağlanmazsa, döngü sonsuz döngüye girer ve program donabilir.
// for (let i=1; i!50; i=i*2){
// console.log(i)}
// //!---------------------------------------------------------------------------------

// //! geriye doğru döngü kullanılabilir
// for (let i=50; i>=0; i--){
//     console.log(i);
// }

// //! BREAK VE CONTINUE keywordleri kullanımı
console.clear();

// for (let i = 0; i <= 10; i++) {
//   if (i % 3) {
//     continue;
//   }
//   if (i === 6) {
//     break;
//   }

//   console.log(i);
// }
// //? loop içinde olmayan if de contınue ve break çalışmaz yukarıda loop içinde
// //! continue ve break loop içinde kullanılır if yapısınnda kullanılmaz.
// //! if  yapısı içinde contınue ve break kullanılmaz
// //? loop içinde olmayan if de contınue ve break çalışmaz
// Örnek - Hatalı Kullanım:
// let number = 5;

// if (number === 5) {
//     break;  // Hata verir çünkü break sadece döngülerde kullanılabilir.
// }

// if (number % 2 === 0) {
//     continue;  // Hata verir çünkü continue sadece döngülerde kullanılabilir.
// }

//!-----------------------------chatgbt örnekler------------------------------------------------//
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
//!---------------------------------------------------------------------------------------------------//
// for (let i = 10; i>= 0; i--) {
//   console.log(i);
// }
//!---------------------------------------------------------------------------------------------------//
// let toplam = 0;
// for (let i = -1; i <= 10; i = i + 2) {
//   toplam += i;
//   console.log(i);
// }
// console.log(toplam);
//!---------------------------------------------------------------------------------------------------//

// for (let i = 2; i <= 20; i = i + 2) {
//   console.log(i);
// }

//!---------------------------------------------------------------------------------------------------//
// for (let i = 1; i < 20; i = i + 2) {
//   console.log(i);
// }
//!---------------------------------------------------------------------------------------------------//
// for (let i = 1; i <= 5; i++) {
//   console.log(i ** 2);
// }
//!---------------------------------------------------------------------------------------------------//
//!bir strindeki karakterleri sırasıyla yazdırın
// const text = "JavaScript";
// for (let i = 0; i < text.length; i++) {
//   console.log(text[i]);
// }
//!---------------------------------------------------------------------------------------------------//
//! 10! 'i bulunuz
// let product = 1;
// for (let i = 1; i <= 10; i++) {
//   product *= i;
// }
// console.log(product);

// let onfakt = 1;
// for (let i = 1; i <= 10; i++) {
//   onfakt = onfakt * i;
// }
// console.log(onfakt);
//!---------------------------------------------------------------------------------------------------//
// 1'den N'e kadar olan sayıların toplamını ve ortalamasını hesaplayan bir
// program yazın.

let toplam = 0;
let ortalama = 0;
for (let i = 1; i <= 100; i++) {
  toplam += i;
  ortalama = toplam / i;
}

console.log(toplam);
console.log(ortalama);
