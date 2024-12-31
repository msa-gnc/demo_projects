// * ============================================
//!            WHILE LOOP
// * ============================================
// JavaScript'te while döngüsü, bir koşul doğru olduğu sürece belirli bir kod bloğunu tekrar tekrar çalıştırmak için kullanılır.

// while (şart){
//     yapılacak işlemler
// }
/* 


/ for sayısı belli bir döngü için idealdir. 
/ Belli bir şarta göre sayısı sürekli devam edecekse.Kullanıcıya devam etmek istermisin sorusu gibi soru ile
-------------------------------------------------------------------------- */
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
/* -------------------------------------------------------------------------- */
// kullanıcı şifreyi bulana kadar sorsun

// let password;
// while (password!=="123" ){
//     password=prompt("Şifreyi giriniz:")
// }

// let number =+prompt("Bir sayı giriniz:")
// if (number<0 || number >100){
//     alert("Sayı 0-100 arasında girilmelidir")
// }

//! Tek başına karar yapıları ile tekrarlama işlemi yapılamaz.
//! Tekrar varsa döngu var demektir.
//! karar yapısı kontrol eder ve duruma gore programın akışını yönlendirir ama tekrar yaptırmaz

// 0-100 arasında değer girilene kadar değer girilmesini isteyen kod bloğu
// let number1 =+prompt("Bir sayı giriniz:")

// while(number1<0 || number1>100){
//     console.log("Sayı 0-100 arasında olmalıdır.")
//     number1=prompt("0-100 arasında bir sayı giriniz veya çıkmak için q tuşuna basınız.")

//     if (number1==="q"){
//         break;
//     }
// }
//! flag mechanism:
//flag (bayrak) mekanizması, belirli bir durumun kontrol edilmesi gerektiğinde kullanılır. Flag, genellikle true veya false gibi boolean değerler alır ve koşulun sağlanıp sağlanmadığını belirtir. Bu mekanizma, programın akışını kontrol etmek için yaygın olarak kullanılır.

// let number1 =+prompt("Bir sayı giriniz:")
// exit=false;

// while(number1<0 || number1>100){
//     console.log("Sayı 0-100 arasında olmalıdır.")
//     number1=prompt("0-100 arasında bir sayı giriniz veya çıkmak için q tuşuna basınız.")

//     if (number1==="q"){
//         exit=true;
//         break;
//     }
// }

// exit ? console.log("çıkış yapıldı") : console.log("girilen sayı:",number1)

//* Flag Mekanizmasının Avantajları
// //? Kodun Akışını Kolay Kontrol Etme: Flag sayesinde, kullanıcı belirli bir eylemi gerçekleştirdiğinde (örneğin, çıkmak istediğinde) programın nasıl davranacağı netleşir.
// //? Esneklik Sağlama: Flag değişkeni kullanarak farklı durumlarda farklı işlemler yapılabilir. Örneğin, bir koşul sağlandığında belirli bir işlemi durdurabilir veya değiştirebilirsiniz.
// //? Kodun Okunabilirliğini Artırma: Flag değişkenlerinin anlamlı isimlerle tanımlanması, kodu okuyan kişinin programın amacını daha iyi anlamasına yardımcı olur.
// //!SAYI TAHMİN OYUNU
// const RastgeleSayi=Math.trunc(Math.random()*100+1);
// console.log(RastgeleSayi)
// exit=false;// Çıkış durumu için flag kullanımı

// while(true){
//     let tahmin=prompt("1-100 arasında bir sayı girin veya çıkış için q harfine basın:")

//     //çıkış kontrolü
//     if (tahmin==="q"){
//         exit=true;
//         break;
//     }

//     tahmin=Number(tahmin)

//     if (isNaN(tahmin)){
//         console.log("Lütfen geçerli bir sayı girin yada çıkış için q harfine basın")
//         continue;
//     }

//     // tahmini kontrol edelim
//     if (tahmin<RastgeleSayi){
//         console.log("Daha büyük bir sayı girin...")
//     }else if(tahmin>RastgeleSayi){
//         console.log("Daha küçük bir sayı girin...")
//     }else{
//         console.log("Tebrikler! Doğru tahmin")
//         break;
//     }
// }

// exit ? console.log("Oyundan çıktınız..") : console.log("Oyun sona erdi.")

//? örnek:Kullanıcıdan bir sayı al. Bu sayıdan başlayarak 1'e kadar geri sayan bir program yaz.

let number3 = 3;

while (number3 >= 1) {
  console.log(number3);
  number3--;
}

//? örnek:1 ile 20 arasındaki çift sayıları ekrana yazdırın.

let i1 = 1;
while (i1 <= 20) {
  if (i1 % 2 == 0) {
    console.log(i1);
  }
  i1++;
}

//? örnek:1'den kullanıcı tarafından girilen sayıya kadar olan sayıların toplamını hesaplayın.
let number2 = 10;
let sum = 0;
let i3 = 1;

while (i3 <= number2) {
  sum += i3;
  i3++;
}
console.log(sum);
console.clear();

//? örnek:Bilgisayarın rastgele seçtiği bir sayıyı kullanıcı tahmin etmeye çalışır.

// let rastgeleSayi = Math.trunc(Math.random() * 100 + 1);
// let tahmin;

// while (tahmin != rastgeleSayi) {
//   tahmin = parseInt(prompt("lütfen bir sayı giriniz"));

//   if (tahmin > rastgeleSayi) {
//     console.log("Daha küçük bir sayı girin.");
//   } else if (tahmin < rastgeleSayi) {
//     console.log("Daha büyük bir sayı girin.");
//   } else {
//     console.log("Tebrikler, doğru tahmin!");
//   }
// }

//? örnek: Negatif bir sayı girilene kadar, tek ve çift sayıları ayırın.

// let number5;
// let oddList = [];
// let evenList = [];

// while (true) {
//   number5 = parseInt(prompt("lütfen bir sayı giriniz"));
//   if (number5 < 0) break; //Negatif bir sayı girildiğinde döngüyü bitir

//   if (isNaN(number5)) {
//     console.log("Lütfen geçerli bir sayı giriniz");
//     continue; // Geçersiz bir giriş yapıldıysa döngüyü başa al
//   }

//   if (number5 % 2 === 0) {
//     evenList.push(number5);
//   } else oddList.push(number5);
// }

// console.log("tek sayılar listesi", oddList);
// console.log("çift sayılar listesi", evenList);

//? örnek: Kullanıcıdan bir sayı alarak faktöriyelini hesaplayın.
// let n = parseInt(prompt("lütfen bir sayı giriniz"));
// let faktoriyel = 1;

// while (n > 0) {
//   faktoriyel *= n;
//   n--;
// }
// console.log(faktoriyel);

//? örnek:Kullanıcının girdiği bir sayının rakamlarının toplamını hesaplayın.
// let sayi = parseInt(prompt("lütfen bir sayı giriniz"));
// let toplam = 0;

// while (sayi > 0) {
//   toplam += sayi % 10;
//   sayi = Math.floor(sayi / 10);
// }
// console.log(toplam);
