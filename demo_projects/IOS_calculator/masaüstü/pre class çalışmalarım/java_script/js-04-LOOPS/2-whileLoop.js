// while(şart){
//     yapılacak işlemler
// }

// let i=0;
// while(i<=10)0
//     console.log(i);
// } sonsuz döngüye girer

//!-----------------------------------------------------------------------------------------------------------------------
// 1 ile 10 arasındaki tüm sayıları ekrana yazdıran bir program yazın.
// let sayı = 0;
// while (sayı <= 10) {
//   sayı++;
//   console.log(sayı);
// }

//!-----------------------------------------------------------------------------------------------------------------------
// benzin 100 tl olduğunda dursun
// let depo = 0;
// let benzin = 0;
// while (benzin <= 100) {
//   benzin++;
//   depo = benzin;
//   console.log(depo);
// }

//!-----------------------------------------------------------------------------------------------------------------------
// Soru 2: Kullanıcıdan bir sayı alın ve bu sayıya kadar olan sayıları ekrana yazdırın.

// let sayi = +prompt("bir sayı giriniz");

// let i = 1;
// while (i <= sayi) {
//   console.log(i);
//   i++;
// }

//!-----------------------------------------------------------------------------------------------------------------------
// Soru 3: 1 ile 10 arasındaki çift sayıları ekrana yazdıran bir program yazın.
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i += 2;
// }

//!-----------------------------------------------------------------------------------------------------------------------

// 1 ile 10 arasındaki sayılardan yalnızca tek olanları yazdırın.
// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i += 2;
// }3

//!-----------------------------------------------------------------------------------------------------------------------
// Soru 5: Kullanıcıdan bir sayı alın ve bu sayının faktöriyelini hesaplayıp ekrana yazdırın.
// let sayi = 3;
// let faktöriyel = 1;
// let i = 1;
// while (i <= sayi) {
//   faktöriyel = faktöriyel * i;
//   console.log(i);
//   i++;
// }
// console.log(faktöriyel);
//!-----------------------------------------------------------------------------------------------------------------------
// Soru 6: 0'dan başlayarak 100'e kadar olan sayıları 5'er 5'er artırarak ekrana yazdırın.
// let i = 0;
// while (i <= 100) {
//   console.log(i);
//   i += 5;
// }
// console.log(i);

//!-----------------------------------------------------------------------------------------------------------------------
// Soru 7: Bir kullanıcıdan pozitif bir sayı alın ve bu sayıya kadar olan sayıları ekrana yazdırın. Kullanıcı negatif bir sayı girerse, "Geçersiz giriş" mesajı verin.

// sayı = -1;
// let i = 1;
// if (sayı < 0) {
//   console.log("Geçersiz giriş yaptınız");
// } else {
//   while (i <= sayı) {
//     console.log(i);
//     i++;
//   }
// }

//!-----------------------------------------------------------------------------------------------------------------------
// Kullanıcıdan bir sayı alın. Eğer sayı 0'dan büyükse, sayı kadar sayıyı ekrana yazdırın. Eğer 0'dan küçükse, program "Negatif sayı girdiniz!" mesajı versin.
// sayı = 5;
// if (sayı > 0) {
//   let i = 1;
//   while (i <= sayı) {
//     console.log(i);
//     i++;
//   }
// } else {
//   console.log("negatif sayı girdiniz");
// }

//!-----------------------------------------------------------------------------------------------------------------------
// 10'dan başlayıp 1'e kadar geriye doğru sayan bir program yazın
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!-----------------------------------------------------------------------------------------------------------------------

//!-----------------------------------------------------------------------------------------------------------------------
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let password;a1

// while (password !== a1) {
//   password = prompt("şifre giriniz");
// }
//!-----------------------------------------------------------------------------------------------------------------------
//! ******************* çoooooooooooooook öenmli *******************""""""
// Kullanıcıdan sürekli olarak sayı alarak bu sayıların toplamını hesaplayın. Kullanıcı 0 girerse, toplamı ekrana yazdırın ve program sonlansın.
// let toplam = 0;

// while (true) {
//   let sayı = +prompt("sayı gir");
//   if (sayı === 0) {
//     break;
//   }
//   toplam += sayı;
//   console.log(toplam);
// }
// console.log(toplam);

//! ******************* çoooooooooooooook öenmli *******************""""""
//!-----------------------------------------------------------------------------------------------------------------------
// 1'den 100'e kadar olan sayılardan 3'e tam bölünebilen sayıları ekrana yazdırın.
// let i = 3;
// while (i < 100) {
//   console.log(i);
//   i += 3;
// }

//!-----------------------------------------------------------------------------------------------------------------------
// Kullanıcıdan bir sayı alın ve bu sayının 2 katına kadar olan sayıları yazdırın. (Örneğin, kullanıcı 5 girerse, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 olacak.)
// let sayı = +prompt("sayı gir");
// let i = 1;
// while (i <= sayı * 2) {
//   console.log(i);
//   i++;
// }

//!-----------------------------------------------------------------------------------------------------------------------
// Kullanıcıdan bir sayı alın ve bu sayıya kadar olan sayıların karelerini ekrana yazdırın.
// let sayı = +prompt("sayı gir");
// let i = 1;
// while (i <= sayı) {
//   console.log(i ** 2);
//   i++;
// }

//!-----------------------------------------------------------------------------------------------------------------------
// 1 ile 50 arasında rastgele bir sayı girin ve kullanıcıdan bu sayıyı tahmin etmesini isteyin. Kullanıcı doğru tahmin edene kadar tekrar tekrar tahmin alacak bir program yazın.

// let sayı = Math.trunc(Math.random() * 100 + 1);
// let tahmin;

// while (true) {
//   tahmin = +prompt("sayı gir");
//   if (tahmin === sayı) {
//     console.log("tebrik");
//     break;
//   } else if (tahmin < sayı) {
//     console.log("daha büyük gir");
//   } else {
//     console.log("daha küçük gir");
//   }
// }

//!-----------------------------------------------------------------------------------------------------------------------
