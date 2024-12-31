// *** JAVASCRIPT DEĞİŞKENLER *****
// Değişken bir değer tutar ve çağrıldığı her yerde o değer işleme girer.

const degiskenAdi="Javascript"
let sayi=10
var isFalse=true

console.log(degiskenAdi)
console.log(sayi*10)

// ****** GLOBAL SCOPE VE LOCAL SCOPE ******
//? Global Scope: Program içerisinde fonksiyonların dışında tanımlanan ve her yerden erişilebilen scope tipidir.
//? Kodu yamaya bağladığımızda global scope yazarız.SAdece tek global scope var.
const x="Bu global alanda oluşturuldu"

//? Local Scope : Bir block içi (fonksiyon, if bloğu  gibi alanlar)

let ad="Sami"

{ 
    console.log("Bu kısım local alandır")
    console.log(ad)
}


{
    console.log("Bu ikinci local")
    console.log(ad)
}

//!  %%%%%%%%%%% DEĞİŞKEN TANIMLAMA  %%%%%%%%%%%%%%%%

// Değişken tanımlamak için 3 değişken tanımlama keywordü kullanılır

// let const - var
//  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

// ===================  CONST  ======================
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (constant -sabit) (non-primitive'ler (array..) hariç).
const pi = 3.14
const ad1 = "nida"
console.log(ad1);

{
    console.log(ad1);
}


// ======================  LET  ========================
//? LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//! CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//? CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let lang="Javascript"
console.log(lang)

lang="Php"
console.log(lang)

let num=300
console.log(num)

{
    console.log(num);
    num = 320

}

console.log(num);
// let num=200


 // ===================  VAR VERİ TİPİ ===============================
//? VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//? - Eğer, değişken fonksiyonların dışında tanımlandı ise tüm her yerden erişilebilir. (Global-scoped).

//! Günümüzde programcılar global değişken gerekmedikçe VAR ile değişken tanımlamayı seçmemektedir.

var kimlikNo = "111111"
console.log(kimlikNo);
kimlikNo="2222222"
console.log(kimlikNo);
var kimlikNo="33333333"

{
    console.log(kimlikNo);
}

// hoisting önce kullan sonra ödersin(tanımlarsın)
console.log(y)
var y=5;
console.log(y)
// Javascript hoisting destekleyen bir dildir.

var kimlikNo=324323
let isTrue=true

let bos;
console.log(typeof kimlikNo)
console.log(typeof isTrue)
console.log(typeof bos)