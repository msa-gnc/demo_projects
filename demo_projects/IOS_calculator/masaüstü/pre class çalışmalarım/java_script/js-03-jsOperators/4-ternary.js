//!  ************  TERNARY OPERATOR ************
// Şarta bağlı durumlar yazmak için başka ve daha kısa bir yöntem de ternary operator
// ES6 ile gelen bir özellik

let yas = 30;

if (yas >= 18) {
  console.log("Oy kullanabilir");
} else {
  console.log("Oy kullanamaz");
}

// 1. kullanım
yas >= 18 ? console.log("oy kullanabilir") : console.log("oy kullanamazsın");
yas > 18 ? console.log("oy kullanır") : null;

//2.kullanım  (daha yaygın)

let mesaj = yas > 18 ? "oy kullanır" : "oy kullanamaz";
console.log(mesaj);

let not = 55;

let durum = not >= 55 ? "geçer" : "kalır";
console.log(durum);

/* -------------------------------------------------------------------------- */
// yas 18den büyük sağlıklı ve erkek : askerlik yapabilir

let yaş = 30;
let sağlık = true;
let gender = "erkek";

if (yaş >= 18 && sağlık == true && gender === "erkek") {
  console.log("askerlik yapar bu çoçuk");
} else {
  console.log("çürük");
}

let sonuc =
  yaş >= 18 && sağlık == true && gender === "erkek"
    ? "arkerlik yapar"
    : "askerlik yapamaz";
console.log(sonuc);

/* -------------------------------------------------------------------------- */
// verilen sayı tek mi çift mi kontrol eden ternary ifade

let num = 5;
let tekOrÇift = num % 2 === 0 ? console.log("çift") : console.log("tek");

// Hızı 120den büyükse hızlı, 90dan büyükse normal, 90 altıyse yavaş yazan ternary ifade
let hız = 89;

if (hız > 120) {
  console.log("hızlı");
} else if (hız >= 90) {
  console.log("normal");
} else {
  console.log("yavaş");
}

let ikaz = hız > 120 ? "hızlı" : hız >= 90 ? "normal" : "yavaş gidiyor";
console.log(ikaz);

// verilen gün cumartesi yada pazar ise haftasonu yazsın değilse haftaiçi
// ternary ile yapalım

let gün = "pazartesi";

let söyle = gün === "pazar" || "cumartesi" ? "hafta sonu" : "haftaiçi";
console.log(söyle);

// 1. Sayıyı Sınıflandırma: Bir sayının pozitif, negatif veya sıfır olup olmadığını
// belirleyin ve "Pozitif", "Negatif" veya "Sıfır" olarak döndürün.

let number1 = 1;
let check1 =
  number1 === 0
    ? "The number is zero"
    : number1 < 0
    ? "The number is negative"
    : "The number is pozitive";
console.log(check1);

// 2. Kredi Başvuru Durumu: Bir kişinin kredi puanı 700 veya daha yüksekse
// "Kredi onaylandı", 500 ile 699 arasındaysa "Ek belgeler gerekli", 500'ün
// altındaysa "Kredi reddedildi" döndürün.

let krediPuanı = 500;

let başvuruDurumu =
  krediPuanı >= 700
    ? "Kredi onaylandı."
    : krediPuanı < 700 && krediPuanı >= 500
    ? "Ek belgeler gerekli"
    : "Kredi reddedildi";

console.log(başvuruDurumu);

// 3. Sıcaklık Durumu: Bir sıcaklık değerine göre "Donma noktası altında", "Oda
// sıcaklığında" veya "Kaynama noktasında" olup olmadığını belirleyin.

let sıcaklık = 27;

let sıcaklıkDurumu =
  sıcaklık === 25
    ? "Oda sıcaklığında"
    : sıcaklık === 100
    ? "Kaynama Noktasında"
    : sıcaklık < 0
    ? "Donma Noktası altında"
    : "Özel bir sıcaklık değeri değil";

console.log(sıcaklıkDurumu);

// 4. Öğrenci Başarı Durumu: Bir öğrencinin notuna göre "Harika", "İyi", "Orta",
// "Kötü" gibi başarı düzeylerini belirleyin (90-100: Harika, 80-89: İyi, 70-79:
// Orta, 0-69: Kötü)

let öğrenciNotu = 71;
let başarıDurumu =
  öğrenciNotu >= 90 && öğrenciNotu <= 100
    ? " Öğrenci Başarı Durumu Harika."
    : öğrenciNotu >= 80 && öğrenciNotu < 90
    ? "Öğrenci Başarı Durumu İyi."
    : öğrenciNotu >= 70 && öğrenciNotu < 79
    ? "Öğrenci Başarı Durumu Orta."
    : öğrenciNotu < 70 && öğrenciNotu >= 0
    ? "Öğrenci Başarı Durumu Kötü"
    : "0-100 aralığında bir sayı giriniz";

console.log(başarıDurumu);

// 5. Yaş Grubu: Bir kişinin yaşına göre "Çocuk", "Genç", "Yetişkin", "Yaşlı"
// olarak kategorize edin (0-12: Çocuk, 13-24: Genç, 25-64: Yetişkin, 65 ve
// üstü: Yaşlı).

let yas1 = 121;

let yaşGurubu =
  yas1 > 120
    ? "Dünyada o kadar yaşlı insan yok"
    : yas1 >= 65 && yas1 <= 120
    ? "Yaşlı"
    : yas1 < 65 && yas1 >= 25
    ? "Yetişkin"
    : yas1 < 25 && yas1 >= 13
    ? "Genç"
    : yas1 < 13 && yas1 >= 0
    ? "Çocuk"
    : "Sıfırdan büyük bir sayı giriniz";
console.log(yaşGurubu);

// 6. Bir Ürünün İndirim Durumu: Bir ürün fiyatı 100 TL veya üzerindeyse %20
// indirim, 50-99 TL arasında ise %10 indirim, altındaysa indirim yok olarak
// yeni fiyatı hesaplayın.

let fiyat = 70;
let yeniFiyat =
  fiyat >= 100
    ? `İndirimli fiyat: ${fiyat * 0.8} TL`
    : fiyat < 100 && fiyat >= 50
    ? `İndirimli fiyat: ${fiyat * 0.9} TL`
    : "indirim yok";

console.log(yeniFiyat);

// 7. Bir Kullanıcının Üyelik Durumu: Bir kullanıcı üye ise "Üye girişi yapıldı",
// değilse "Misafir girişi" mesajı verin. Ek olarak, kullanıcı üye ise aktif veya
// pasif durumunu kontrol edin.

let üyelik = true;
let aktif = true;

let üyelikDurumu =
  üyelik == true
    ? aktif == true
      ? "Aktif üye girişi yapıldı"
      : "Pasif üye girişi yapıldı"
    : "misafir girişi yapıldı";
console.log(üyelikDurumu);

// 8. iki Değer Karşılaştırması: İki sayıyı karşılaştırarak "İkisi de eşit", "Birinci
// daha büyük", "İkinci daha büyük" olarak sonuç döndürün.

let sayi1 = Math.random();
let sayi2 = Math.random();

let karşılaştır =
  sayi1 > sayi2
    ? "Birinci sayı büyüktür"
    : sayi1 < sayi2
    ? "ikinci sayı küçüktür"
    : "Sayılar eşittir";
console.log(karşılaştır);

// 9. Ders Seçimi: Bir öğrencinin ders seçimine göre "Temel", "Orta", "İleri"
// seviyesinde olduğunu belirleyin (Başlangıç: 1-3, Orta: 4-6, İleri: 7-10).

let seçim = 11;

let seviye =
  seçim > 0 && seçim < 4
    ? "Başlangıç"
    : seçim > 3 && seçim < 7
    ? "orta"
    : seçim > 7 && seçim < 11
    ? "ileri"
    : "En az 1 en fazla 10 ders seçilebilir.";
console.log(seviye);

// 10. Bölüm Seçimi: Bir öğrencinin notuna göre hangi bölümde okuyabileceğini
// belirleyin: "Mühendislik" (80 ve üstü), "İktisat" (60-79), "Sosyal Bilimler" (0-59).

let puan = -1;
let bölüm =
  puan >= 80 && puan <= 100? "Mühendislik": puan >= 60 && puan < 80? "İktisat": puan < 60 && puan >= 0? "Sosyal Bilimler": "0-100 arası puan girilmelidir";
console.log(bölüm); 
