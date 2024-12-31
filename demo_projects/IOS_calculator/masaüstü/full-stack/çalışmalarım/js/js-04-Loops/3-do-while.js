// JavaScript'te do...while döngüsü, bir koşul doğru olduğu sürece kod bloğunu tekrar tekrar çalıştıran bir döngü yapısıdır. while döngüsünden farkı, kod bloğunu koşuldan bağımsız olarak en az bir kez çalıştırmasıdır.do: Döngünün gövdesini ifade eder. Buradaki kod, döngüye girildiğinde mutlaka bir kez çalıştırılır.
// while (koşul): Döngünün devam edip etmeyeceğine karar veren koşuldur. Koşul doğruysa döngü tekrar eder.

// do{yapılacak işlemler}
// while(şart)

let i = 0;

do {
  console.log(i); // İlk çalışmada i'nin değeri yazdırılır.
  i++; // i'yi 1 artırır.
} while (i < 5); // i 5'ten küçük olduğu sürece döngü devam eder.

let j = 10;

do {
  console.log(j); // Bu kod koşula bakılmadan bir kez çalışır.
  j++;
} while (j < 5); // Koşul yanlış, döngü bir kez çalışır ve sona erer.

// Bu örnek, kullanıcıdan sürekli giriş alır ve doğru şifre girilene kadar döngüyü çalıştırır.
let password;

do {
  password = prompt("lütfen şifre giriniz");
} while (password !== "1234");

console.log("Doğru şifre!");
