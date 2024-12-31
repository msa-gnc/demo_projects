console.log("***Strings****");

// ?=========================================================
// ?                 STRINGLER
// ?=========================================================

//! String Tanımlama
const str1 = "Clarusway";
const str2 = `Hello5`;

console.log(typeof str2);

// String constructor ile String oluşuturma
const str3 = new String("World");
console.log(typeof str3); // object

const str4 = "😀";
//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
/* ---------------------------------- */
/*     STRING YAPISI VE INDEXLEME     */
/* ---------------------------------- */

let kelime = "Clarusway";
kelime = "Bootcamp";
console.log(kelime[0]);
console.log(kelime[1]);
console.log(kelime[8]);

for (let i = 0; i<8; i++){
    console.log(kelime[i]);
}


// Stringler, parça olarak değiştiremezsiniz
//immutable
kelime[0]="H"
console.log(kelime);

//! ************STRING PROPERTY ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir
//parantez açıp kapatmaya gerek yoktur

//? lenght
//Prototype
//! ************STRING METHODS ************
// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.

// *=========================================================
// *               lenght - Property
// *=========================================================

//? Lenght => Bir stringin boşluklarda dahil kaç karakterden oluştuğunu verir.

let text1="Korkma sönmez bu şafaklarda yüzen alsancak."
console.log(text1.length);

let emoji  = "😊"
console.log(emoji.length); //Emojiler 2 karakter uzunluğundadır.

for (let i = 0; i<emoji.length;i++){
    console.log(emoji[i]);
}

//! ************STRING METHODS ************
// String metodları () kullanılır. (Arkaplanda fonksiyonlardır)
//? Chaining yani zincirleme olarak birden fazla metod birlikte kullanılabilir.

// *=========================================================
// *   toLowerCase() toUpperCase() immutable=değiştirmez
// *=========================================================
//! Karakterleri küçük harfe dönüştürme => .toLowerCase()
//! Karakterleri büyük harfe dönüştürme => .toUpperCase()

// Değişim geçicidir.Tamamen değiştirmiyor değiştirp kaydetmek istiyorsak yeni bir değere atamalıyız

let text="Musa GENÇ"
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text); //orjinal metin aynı kaldı

let text3 = text.toLocaleLowerCase()
console.log(text3); //değişim için bu şekilde atama yapıyoruz


// ! toLokalLowerCase()
let sehir ="ISTANBUL IĞDIR" 
console.log(sehir.toLowerCase());
console.log(sehir.toLocaleLowerCase("tr-TR")); // I HARFİ İLE YAZDIK ıstanbul olarak döndürdü


/* ---------------------------------- */
//!    String Bİrleştirme yöntemleri   */
/* ---------------------------------- */

//* + ile birleştirme
//* concat ile birleştirme (ES6 İLE GELDİ)
//* Template literal (``) ile birleştirme

let text2 = "Merhaba"
let text4 = "nasılsın"

console.log(text2 + " " + text4 + " kardeş."); //* + ile birleştirme
console.log(text2.concat(text4)); //* concat ile birleştirme immutable=değiştirmez 
console.log(`${text2} ${text4} kardeş`); //* Template literal (``) ile birleştirme

text2+=" nasılsınız efendim"
console.log(text2); // burada artık text2 değişmiş oldu.

//!Stack Örnek
let a = 10
let b = a
console.log(b);
a = 55
console.log(b); // b şimdi 10 mu 55 mi

// Stack ve Değer Tipleri (Primitive Types):
// a ve b primitive (ilkel) değerlerdir.
// JavaScript'te primitive değerler (örneğin, number, string, boolean) Stack'te saklanır.
// b = a işlemi, a'nın değerini kopyalar. Bu nedenle a'nın daha sonra değiştirilmesi b'yi etkilemez.
// Adımlar:

// a = 10 olduğunda, Stack'te a için 10 saklanır.
// b = a olduğunda, a'nın değeri kopyalanır ve b için ayrı bir alan açılır (10).
// a = 55 olduğunda, a değişir ama b etkilenmez.

//!Heap Örnek
let x = [1, 2, 3, 4, 5]
let y = x;
console.log(x[0]);
x[0] = 55
console.log(y);  // peki x[0] 1 mi 55 mi

// 2. Heap ve Referans Tipleri (Reference Types):
// x ve y bir dizi (array) ile çalışıyor. Diziler, referans tipleri olduğundan Heap'te saklanır.
// x bir referans içerir, bu da Heap'teki diziyi işaret eder.
// y = x işlemi, x'in referansını kopyalar, yani aynı diziyi işaret eder.
// Dizinin bir elemanı değiştiğinde, değişiklik hem x hem de y üzerinden görülebilir, çünkü ikisi de aynı nesneyi işaret eder.
// Adımlar:

// x için [1, 2, 3, 4, 5] Heap'te bir dizi oluşturulur. x bu diziyi işaret eder.
// y = x yapıldığında, y de aynı diziyi işaret eder (Heap'teki aynı nesne).
// x[0] = 55 ile dizinin ilk elemanı güncellenir. Bu değişiklik, y üzerinden de görülebilir.

//! String Parçalama Metodları
// split()
// substring()
// substr()
// slice()

// *=========================================================
//! split() immutable
// *=========================================================
// Stringi belirtilen şekilde parçalara ayırır ve parçalarını bir diziye aktarır
// str.split(seperator)

let text6 = "To be or not to be "
console.log(text6.split()); // tek elemanlı oldu
console.log(text6.split("")); // her harfi her boşluğu bir eleman yaptı
console.log(text6.split(" ")) // boşluklardan ayırdı boşlukları kaldırdı
console.log(text6.split("t")) // t harfleri gitti

let text7 = "Clarusway IT Bootcamp"
text8 = text7.split(" ")
for(let i = 0; i<text7.length; i++){
    if (text8[i] === "IT"){
        console.log("Bu cümlede IT kelimesi geçiyor");
    }
}

// Verilen tarih bilgisini gün ay ve yıl oalrak ayırma
let date = "18.11.2024"
let newdate = date.split(".")
console.log(newdate);
let gun = newdate[0]
let ay = newdate[1]
let yıl = newdate[2]
console.log(`Gün ${gun} ay ${ay} yıl ${yıl}`);

let months =
  "Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec";

  let newMonths = months.split("/")
  console.log(newMonths);


  /* -------------------------------------------------------------------------- */
/*                               //? Join metodu                              */
/* -------------------------------------------------------------------------- */
// String metodu değildir
// Javascript dilinde join metodu, bir dizi elemanı string olarak birleştirir. Join metodu dizi (array) alarak bunu virgül gibi bir karakter ile ayırarak string'e dönüştürür.

console.log(newMonths.join()); // diziyi virgülle stringe dönüştürür.
console.log(newMonths.join(" ")); // boşlukla dönüştürdü
console.log(newMonths.join("-")); // - ile dönüştürdü

/* -------------------------------------------------------------------------- */
//?                               Reverse Metodu                              */
/* -------------------------------------------------------------------------- */
// String metodu değildir
// reverse methodu ile bir diziyi tersine çevirebilmekteyiz. Dizi içerisindeki ilk değeri son, Son değeri ise ilk sıraya şeklinde sıralayabilmekteyiz.

//kelimeyi tersten yazdırmak için önce kelimeyi diziye çevir

numbers = [1,2,3,4,5,6,7,8,9]
console.log(numbers);
console.log(numbers.reverse());

let alfabe ="abcdefgğhıijklmnoöprsştuüvyz"
console.log(alfabe);

let ArrayAlfabe = alfabe.split("")
console.log(ArrayAlfabe); 

let tersArrayAlfebe = ArrayAlfabe.reverse()
console.log(tersArrayAlfebe);

let tersStringAlfebe = tersArrayAlfebe.join("")
console.log(tersStringAlfebe);

// kısayol chaining method


console.log(alfabe.split("").reverse().join(""));

// Polindrom kelimeyi bulma

function polindrom(x){
    x.split("").reverse().join("") === x ? console.log("Polindromdur") : console.log("Polindrom değildir");
}
polindrom("madam")
polindrom("merhaba")

let kelime2 = "madam"

let mesaj = kelime2===kelime2.split("").reverse().join("") ? "Polindromdur" : "Polindrom değildir"

console.log(mesaj)


/* ---------------------------------- */
/*                Slice               */
/* ---------------------------------- */
//! Slice Metodu
//? String içinde bir bölümü almak için kullanılır.
// Slice(başlangıç index numarası, bitiş index numarası(bu numara dahil değildir))

let sentence = "Merhaba chort 18"
console.log(sentence.slice(0)); //Merhaba chort 18
console.log(sentence.slice(7));//  chort 18
console.log(sentence.slice(0,8)); //Merhaba
console.log(sentence.slice(-4,)); // t 18
console.log(sentence.slice(-9,-3)) //  chort

//Girilen sayının tersini bulan fonsiyon 

let sayı=(x)=>{
   let ters= Number(String(x).split("").reverse().join(""))
   return ters;
};

console.log(sayı(1234));

/* ---------------------------------- */
/*              Substring             */
/* ---------------------------------- */
//! substring(başlangıç index numarası,bitiş index numarası) 
//Slicedan farkı negatif sayı kullanılmaz

console.log(sentence.substring(0));
console.log(sentence.substring(7));
console.log(sentence.substring(0,8));

/* ---------------------------------- */
/*               Substr               */
/* ---------------------------------- */
//! substr(başlangıç index numarası,kaç adet karakter alınacağı)
console.log(sentence.substr(0,6)); // üstü çizili çıkıyor yakında tedavülden kalkar

/* ---------------------------------- */
/*!   String içinde arama işlemleri   */
/* ---------------------------------- */

// includes, indexOf, search ,match  metodlarını kullanabiliriz

/* ---------------------------------- */
/*              includes              */
/* ---------------------------------- */

//? includes()   ... yı içeriyor mu -> true yada false bir değer döndürür.
//? caseSensitive bir özelliktir.

let kelime3 = "Bir varmış bir yokmuş"

console.log(kelime3.includes("Bir varmış")); //true
console.log(kelime3.includes("bir varmış")); // false
console.log(kelime3.toLowerCase().includes("bir varmış")); //true

let url = "https://clarusway.com"

let mesage = url.includes("https") ? "Bu site güvenlidir":"güvenli değildir"
console.log(mesage);

/* ---------------------------------- */
/*               İndexOf              */
/* ---------------------------------- */
//? indexOf (aranacak metin, konum) Bir karakter yada karakter grubumun kaçıncı sırada olduğunu yani index numarasını verir. Eğer o karakter yoksa olmadığını -1 değeri vererek gösterir. Büyük küçük harfe duyarlıdır. Sadece ilk gördüğünün index numarasını verir 
// ! regex (regular experession) desteklemez yani Sadece düz metin aramaları için kullanılabilir.

let kelime4 ="To be or not to be"

console.log(kelime4.indexOf("be")); // 3 döndü ilk gördüğünü verir
console.log(kelime4.indexOf("musa")); // -1 döndü çünkü yok

// Bir başlangıç noktası belirtebilirsiniz. Bu, belirli bir indeksten sonra arama yapmak için faydalıdır.

let kelime5 = "Sana merhaba dedim ama sen neden bana merhaba demedin"
console.log(kelime5.indexOf("merhaba")); // 5 döndü
console.log(kelime5.indexOf("merhaba",6)); // 5den sonrasını ara dedik 38 döndü

//? search() bir string içindeki aranan elemanın ilk index numarsını yazar. Bulamazsa -1 dönderir.
// Büyük küçük harfe duyarlıdır. 
// ! regex'i destekler indeof dan farkı budur

let metin1 = "Bir ben vardır benden içeri"
console.log(metin1.search("bir"));
console.log(metin1.search("Bir"));



// ! Regex nedir
//  (Regular Expression), belirli bir desenle metin eşleşmeleri yapmak için kullanılan bir dildir. 
// ?Regex Ne İşe Yarar?
// Regex, özellikle şu görevler için kullanılır:

// Belirli bir metni veya deseni aramak.
// Metin içinde bir desene uyan yerleri değiştirmek.
// Metin doğrulama (örneğin, e-posta adresi, telefon numarası doğrulama).
// Metni parçalara ayırmak.

let metin2 = "to be or not To be, 15 That is The questions" 
console.log(metin2.search(/[A-Z]/)); // ilk gördüğü büyk harf

let metin3 ="ANKARA AYDIN İZMİR çOK HOŞTUR AMA BENANA"
console.log(metin3.search(/[a-z]/)); //! ilk gördüğü küçük harf  ama türkçe karakter olunca yok saydı

let metin4 ="ANKARA AYDIN İZMİR cOK HOŞTUR AMA BENANA"
console.log(metin4.search(/[a-z]/)); //! c harfi türkçe karakter olmadığı için 19 döndü

console.log(metin2.search(/[0-9]/)); // 15 sayısındaki 1 sayısının indexi ilk gördüğü sayıyı dndürdü

console.log(metin4.search(/[^A-Z]/)); //! ^ olmayan demek boşluğun indexi 6

/* ---------------------------------- */
/*                 match              */
/* ---------------------------------- */

//?match metodu, bir dize içindeki bir düzenli ifadeye (RegEx) uyan kısımları bulur ve bir dizi olarak döner.
//! Bir dizi dönderir

console.log(metin2.match("be"));

let phone= "My phone number is 123-456-7890";
console.log(phone.match(/\d+/g));

let text31 = "Contact us at support@example.com or sales@example.com";
let emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
let emails = text31.match(emailPattern);
console.log(emails)
  

/* ---------------------------------- */
/* startsWith(), endsWith() -- case sensitive */
/* ---------------------------------- */

// startsWith :.. ile başlıyormu (True , false)
// endsWith :.. ile bitiyormu (True , false)

console.log(phone.startsWith("M"))
console.log(phone.endsWith("0"))

//!Stringde Değişiklik yapma 

/* ---------------------------------- */
/*         Replace -immutable         */
/* ---------------------------------- */

let asılMetin = "Hello World, Who are You World" 
let yeniMetin = asılMetin.replace("World" , "Jvascript")
console.log(yeniMetin);

// ! replaceAll 
let tümYeniMetin = asılMetin.replaceAll("World" , "Javascript")
console.log(tümYeniMetin);


/* ---------------------------------- */
/*                Trim                */
/* ---------------------------------- */
//? baş ve sondaki boşlukları kaldırmak için => trim

let bosluklu = "                Musa Genç              "
console.log(bosluklu);
console.log(bosluklu.trim()); // BAŞTAKİ VE SONDAKİ BOŞLUKLAR GİTTİ