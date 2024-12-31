//? ====================================================
// ?              FONKSİYONLAR - IIFE
// ? ====================================================

//**Immediately Invoked Function Expression (IIFE) yani "Hemen(ANINDA) Çağrılan Fonksiyon İfadesi" */
// (function(){
//     kodlar buraya yazılır

// })();

// veya 
// (function(){

//     kodlar buraya yazılır
// }());


// Değişkenleri İzole Etmek: IIFE'nin içinde tanımlanan değişkenler, fonksiyonun dışında erişilemez. Böylece global değişkenlerin kirlenmesi veya beklenmeyen değişiklikler önlenir.

// Kodun Hemen Çalışmasını Sağlamak: IIFE tanımlandığı anda çağrılır, bu nedenle IIFE'nin içindeki kod, dosyanın geri kalanını çalıştırmadan önce çalıştırılabilir.

// Modüler Kod Yazmak: IIFE, modüler bir yapıya sahip olup, farklı işlevleri veya bileşenleri birbirinden bağımsız hale getirmek için kullanılabilir.

//! çok önemli eğer fonsiyonun sonuna ; koymazsan olmaz bir sonraki fonkisyonda hata verir. sona parantez () koymayıda unutma. 

(function(){
    console.log("Hello IIEF () içeride");
}());

(function(){
    console.log("Hello IIEF () dışarıda");
})();  //! ; unutma
//---------------------------------------------------------------------------

(function(){
    let mesaj = "merhaba"
    console.log("Merhaba IIFE");

}()); //! ; unutma

//---------------------------------------------------------------------------
(function(x){
    console.log(x**2);

}(5)); 
//---------------------------------------------------------------------------
(function(x,y){
    console.log(Math.pow(x,y));

}(2,3));
//---------------------------------------------------------------------------
(function(x,y){
console.log(Math.floor(x) + Math.ceil(y));

})(3.6,3.6);
//---------------------------------------------------------------------------


let çarpma = (function(x,y){
    return x*y
}(5,6));

console.log(çarpma);

