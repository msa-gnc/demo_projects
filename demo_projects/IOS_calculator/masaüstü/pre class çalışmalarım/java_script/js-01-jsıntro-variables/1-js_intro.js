// ÇIKTI ALMA VE KULLANICI İLE ETKİLEŞİM YOLLARI
// ***** Consele Kullanımı
// console.clear(); // console ekranını temizlemek için kullanılır.
console.log("Harici Dosyadayız");
console.error("Bu bir hata mesajıdır");
console.warn("Bu bir uyarı mesajıdır");

console.table([
  { name: "harvey", age: 30 },
  { name: "Helen", age: 38 },
]);

// ********* ALERT ********
// KULLANICIYA BİR POPUP İLE UYARI MESAJI VERİR
alert("Bu size inceden bir uyarıdır");

// ***** document.write ****////

document.write("Browserda gösterebilmek için bu şekilde yazıyoruz");
document.write("<h3> HTML kolarını parantez içine yazabiliyoruz</h3>");

// ******** PROMPT ********
// input gibi Kullanıcıdan bilgi almak için kullanılıyor
prompt("Adınızı girin:"); // aldığımız bilgiyi kullanmamız lazım. onuda değişkene atayarak aşağıdaki gibi depoluyoruz.

let yaş = prompt("yaşınızı girin:"); // consoleda bu bilgiyi kullanmak
console.log(yaş);

let isim = prompt("isminizi girniz")
console.log(isim, "merhaba nasılsın" )
