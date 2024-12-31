// **** JAVASCRİPT DEĞİŞKENLER*****
// Değişken bir değer tutar ve çağrıldığı zaman her yerde o değeri işlem alır.

const değişkenAdı = "Değer";
var değişken_adı = "Değer";
let değişken_Adı = "Değer";

const isimm = "Musa";
var ad = "musa";
let nick = "musa";

const öğrenciNo = 805;
var No = 805;
let öğrno = 805;

let sayi = 10;
var isFalse = true;

console.log(isimm);
console.log(ad);
console.log(nick);

console.log(öğrenciNo);
//******GLOBOL SCOPE VE LOCAL SCOPE*****

// Global Scope: Program içerisinde fonsiyonların dışında tanımlan ve her yerden erişilebilen scope tipidir. Kodu yamay bağladığımızda global scope yazarız. Sadece tk global scope var.
const y = "bu global alanda oluturuldu";
//** öerneğin 1 den 28 e kadar burası hep global alan. */ global alan herkesin ulaşabildiği alan görebildiği alan.

//? Local Scope: Bu bir blok içi ( fonksiyon, if bloğu gibi alanlar)

{
  console.log("Bu kısım local alandır");
}

{
}

// %%%%%%% DEĞİŞKEN TANIMLAMA %%%%%%%%%

// DeĞİŞKEN TANIMLAMAK İÇİN 3 DEĞŞKEN TANIMLAMA KEYWORDÜ KULLANILIR: let, const, var

// ======= const ==========
// Const: sadece başlangıçta değer atanabilir sonradan değeri değiştirilmez(non-primitive'ler (array..) hariç )
console.clear();
const pi = 3.14;
const ad1 = "Nida";
console.log(ad1);
// ad1="sema" yazarsam hata verir değiştiremem.

{
  console.log(ad1);
}

// ========= let =========
//  const tan farkı istenildiği zaman değeri değiştirilebilir.

let dil = "javascript";
console.log(dil);

dil = "python"; //değiştirdim
console.log(dil);

let num = 300;
console.log(num);

num = 100;
console.log(num * 10);

{
  console.log(num);
}

//======= var =======
// kural vs pek yok özgürdür ve fazla özgürdür sıktı çıkarabilir. let gibi değiştirilebilir.

var kimlikno = 5555;
console.log(kimlikno);

kimlikno = 4444; //değiştirdim

// fakat let ile tanımlasaydım tekrardan kilikno değişkenine atama yapamazdım fakat varda bu mümkün

let isim = "ahmet";
// let isim="" yazarsam hata verir (bu tekrar atama değitirme değil)
isim = "mehmet"; //burda değiştirme yaptık sorun yok

var sokak = "inegöl";
var sokak = "incitaş"; // burada sokak değişkenini iki kez kullandım ama hata vermedi bu varın sotunlarından biri.
{
  console.log(sokak);
}

sokak = "şahinler"; // burada değiştirme yaptık bunda sorun yok

console.clear();
//hoisting önce kullan sonra ödersin (tanımlarsın)

console.log(armut); //yazdığımızda hata verdi

var armut = 5; // daha sonra burayı yazınca üstekine konsolda undefined dedi

console.log(armut); // burayı yazınca konsolda 5 dedi d

//let ve const ile yapsaydık bu olmazdı.






