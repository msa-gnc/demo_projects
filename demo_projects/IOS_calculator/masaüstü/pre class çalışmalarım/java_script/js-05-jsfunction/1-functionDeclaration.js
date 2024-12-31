// function fonk.ismi (x,y vs parametreler){
//     statement(ifadelar)
// }

// function name(parameters){
//     statements
//   }

// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================
//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır

//! * --------Function-Declaration----------------------------*/
// ? parametresiz /////////////////////////////
// /JavaScript'te function declaration (fonksiyon bildirimi), bir fonksiyonun ismini ve içeriğini önceden belirleyerek tanımlamanın temel yoludur.
// Function declaration, function anahtar kelimesi kullanılarak yapılır
//? Bir fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.

// ? parametresiz /////////////////////////////

function yazdır() {
  console.log("Merhaba nasılsınız ");
}

yazdır();

// --------------------------------------------------------------------------------
// Hoisting : yukarı kaldırma
//! sadece function declerationda hoisting yapılıyor
// Hoisting: Function declaration ile tanımlanan fonksiyonlar, JavaScript tarafından kodun en başına "yükseltilir" (hoist edilir), bu nedenle fonksiyon tanımlanmadan önce bile çağrılabilir.

// consola baktığımızda fonksiyonu çağırdığımız yerlerde hem fonksiyonun tanımlandığı  satır numarasını gösteriyor
/* -------------------------------------------------------------------------- */

function yazdir2() {
  console.log("Merhaba");
}
console.log("Fonksiyondan önceyim");
yazdir2();
console.log("Fonksiyondan sonrayım");
/* -------------------------------------------------------------------------- */

neredeyim(); // önce fonksiyonu çağırdık sonra tanımladık
neredeyim();
neredeyim();
neredeyim();
neredeyim();
neredeyim();
neredeyim();

function neredeyim() {
  console.log("buradasın");
}

/* -------------------------------------------------------------------------- */
topla();

function topla() {
  console.log(12 + 1);
}
/* -------------------------------------------------------------------------- */
// Js Motoru kodu aşağıdaki şekilde gördüğü için hoisting olabiliyor.

function topla() {
  console.log(12 + 1);
}

topla();

// ? parametreli----------------------------
// Parametreli fonksiyonlar, belirli girdilerle işlem yapabilen fonksiyonlardır.
//?Parametreler, fonksiyon tanımlanırken parantez içinde belirtilir ve fonksiyon çağrıldığında değerler gönderilerek (argüman olarak) kullanılır.
//* Fonksiyon tanımlanırken verilen değerlere arguments denir

/* -------------------------------------------------------------------------- */
function toplam(a, b, c) {
  //arguments
  // console.log(a+b+c);
  let result = a + b + c;
  console.log(result);
}
toplam(8, 8, 8);
/* -------------------------------------------------------------------------- */
function bol(a, b) {
  console.log(a / b);
}

bol(10, 10);
bol(8, 8);

/* -------------------------------------------------------------------------- */
function adSoyad(ad, soyad) {
  console.log(ad + " " + soyad);
}

adSoyad("musa", "genç");
adSoyad("ebru", "genç");
/* -------------------------------------------------------------------------- */
function cube(x) {
  console.log(x * x * x);
}

cube(3);
/* -------------------------------------------------------------------------- */

function kontrolEt(yas) {
  let kontrol = yas >= 18 ? "Ehliyet alabilir" : "Ehliyet alamaz";
  console.log(kontrol);
}

kontrolEt(19);

/* -------------------------------------------------------------------------- */
function enBüyük(x, y, z) {
  if (x > y && x > z) {
    console.log(`En büyük sayı  ${x}`);
  } else if (y > x && y > z) {
    console.log(`En büyük sayı   ${y}`);
  } else {
    console.log(`En büyük sayı  ${z}`);
  }
}

console.clear();
/* -------------------------------------------------------------------------- */
// fonksiyonlarda değişkenin değeri gönderilir.değişkenin kendi gitmez
// başlangıç değeri,varsayılan değer tanımlanabilir.
function selamla(ad, yas = 34, meslek = "developer") {
  console.log(ad);
  console.log(yas);
  console.log(meslek);
}
selamla("musa");

//!-------------------------------------------------------------
function information(isim, nasıb = 2013, rütbe = "Astsubay Çavuş") {
  console.log(isim, nasıb, rütbe);
}
information("musa");

//!!! BURADA BİRİNCİ PARAMETRE YERİNE İSİM YAZDIK AŞAĞIDA SONA YAZDIK FARKA BAK

function bilgiler(nasıb = 2013, rütbe = "Astsubay Çavuş", isim) {
  console.log(nasıb, rütbe, isim);
}

bilgiler(undefined, undefined, "Musa");
//!-------------------------------------------------------------
//! birçok deger gönderilecekse arguments keyword faydalanılabilir.

function çok() {
  console.log(arguments);
}
çok("musa", 12, 13, 15, 55, "elma");

function degerler(a, b) {
  console.log(a);
  console.log(b);
  console.log(arguments);
}

degerler(
  1111,
  2222,
  9999,

  999,
  53,
  783432,
  798,
  67,
  6557652,
  213,
  8678,
  345435
);

//! return keyword */

function yasHesapla(tarih){
    console.log(2024-tarih);
}
yasHesapla(1993)

// !-----------------1-) return değer dönderme amacıyla kullanılır--------------------------- 



function küp(a){
    return a**3
}

let küpAlma=küp(3)
console.log(küpAlma);
// -------------------------------------------------------------------
function yasHesapla2(tarih){
    let yasBul =2024-tarih
    return yasBul 
}

let yas = yasHesapla2(1993)
console.log(yas);



// artık bu yaşı buradada kullanabilirim yani 31 değerini
if(yas>30){
    console.log("Yaş otuzdan büyüktür");
}
else{
    console.log("yaş otuzdan küçüktür");
}

//---------------- karenin alanı

function kareninAlanı(x){
    return x**2
}

const alan = kareninAlanı(2)
console.log(alan);

//----------dairenin alanı işlemi birşeye atayım atadağım değeride return edebilrim

function daireninAlanı(r){
    hesapla = Math.trunc(Math.PI*r**2)
    return hesapla
}
console.log(daireninAlanı(1));
console.log(daireninAlanı(2));

const dAlanı = daireninAlanı(3)
console.log(dAlanı);

let dAlanı2 =daireninAlanı(5)
console.log(dAlanı2);


// !-----------------1-) return  Fonksiyonu Sonlandırma: Belirli bir koşul sağlandığında fonksiyondan çıkmak için return kullanılabilir:

//fonsiyon sonlandırma
function yaşKontrol(yas){
    if (yas>=18){
        return "Giriş Serbest"
    }
    return "Giriş Yasak"
    console.log(musa); // unreachable code silik görünüyor çünkü returnden sonra yazdığımız için ulaşılamaz çalışmaz

}
console.log(yaşKontrol(15));
console.log(yaşKontrol(19));


// değer dönderme
let kontrol = yaşKontrol(25)
console.log(kontrol);