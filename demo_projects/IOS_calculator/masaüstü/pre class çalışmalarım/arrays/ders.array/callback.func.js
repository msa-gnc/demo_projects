// IEFF değişken kapsülleme
const veri = (function () {
  const sifre = "12345";
  return {
    sifreGoster: function () {
      return sifre;
    },
  };
})();

console.log(veri.sifreGoster());

//! callback function

// // bilgi:
// funciton deneme(a) //argument
// {
//     console.log(a);
// }

// deneme(67) //parametre

// callback funciton


function ilkfonksiyon(argü) {
  console.log("ilk fonksiyon");
  argü(45)
}

function ikincifonksiyon(sayı){
    console.log("ikinci fonksiyon");
    console.log(sayı);
}

ilkfonksiyon(ikincifonksiyon)




function matematisislemleri(sayı1,sayı2,islem){
    const sonuc = islem(sayı1,sayı2)
    console.log(sonuc);
}

function topla(a,b){
    return a+b
}

function cıkar(a,b){
    return a-b
}

console.log(topla(10,10));

matematisislemleri(23,56,topla)
matematisislemleri(100,10,cıkar)