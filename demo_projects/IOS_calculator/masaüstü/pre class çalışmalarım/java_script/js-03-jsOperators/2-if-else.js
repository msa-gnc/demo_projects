/* -------------------------------------------------------------------------- */
//!                                CONDITONALS                             */
/* -------------------------------------------------------------------------- */
//! ******* IF -  ELSE
/*if ( şart )
{ 
    şart durumu doğru ise bu blok çalıştırılır
}
else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/

// Kullancıdan alınan sayının tek mi çift olduğuna karar veren kod bloğu

// let sayı=+prompt("lütfen bir sayı giriniz")

let sayı = 3
let kalan = (sayı%2)
 if (kalan===0){
    console.log("sayı çiftir");
 }
 else{
    console.log("sayı tektir");
 }
 //! ******* IF - ELSE IF - ELSE
/* if ( şart1 )
{ 
    şart1 durumu doğru ise bu blok çalıştırılır
} 

else if (şart2 ){
    şart1 durumu doğru değil şart2 durumu doğru ise bu blok çalıştırılır
}

else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/

/* -------------------------------------------------------------------------- */
// Kulllanıcıalan alınan iki sayı ve bir operator bilgisine göre işlem yapan programı yazınız


const sayı1= +prompt("birinci sayıyı giriniz")
const sayı2= +prompt("ikinci sayıyı giriniz")
const operator = prompt("+,-,*,/ işaretlerinden birini giriniz")
let sonuc

if (operator == "+"){
    sonuc = sayı1 + sayı2
}
else if(operator == "-"){
    sonuc = sayı1 - sayı2
}
else if(operator == "/"){
    sonuc = sayı1 / sayı2
}
else if (operator == "*"){
    if (operator =! 0){
        sonuc = sayı1 / sayı2
    }
    else{
        sonuc="Infinity"
    } 
} 
else{
    console.log("geçersiz operator girişi yaptınız");
}

 //! burası çok önemli dikkatli incele----------------////
//1. kısayol
if (sonuc){
    console.log(sonuc)
}
else{
    console.log("Bir sonuç bile elde edemediniz")
}

//2. kısayol short circuit - kısa devre
// && ve ||

console.log(sonuc || "Bir sonuç bile elde edemediniz")

//!-------------------------------------------------------------------//