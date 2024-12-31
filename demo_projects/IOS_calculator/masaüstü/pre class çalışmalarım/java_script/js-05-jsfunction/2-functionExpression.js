//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------

//**********************************************************/
//! * --------Function-Expression----------------------------*/
// 1-Fonksiyon bir değişkene tanımlanır.
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? önce fonksiyon oluşturmak şart - hoisting olmaz

const adYazdır = function () {
  console.log("musa");
};
adYazdır();
//-------------------------------------------------------------------------------
//** Parametreli function exp. */

const çarp = function (a, b) {
  console.log(a * b);
};
çarp(5, 5);

//------------------------------------------------------------------------------
const isEvenOdd = function (a) {
  let result = a % 2 === 0 ? "Even" : "Odd";
  console.log(result);
};
isEvenOdd(5);
//---------------
const isEvenOdd1 = function (a) {
  console.log(a % 2 === 0 ? "Even" : "Odd");
};
isEvenOdd1(5);
//-----------------------------------
const isEvenOdd2 = function (a) {
  let result = a % 2 === 0 ? "Even" : "Odd";
  return result;
};
isEvenOdd2(5);
//-------------
let sayı =60
isEvenOdd(sayı)
isEvenOdd1(sayı)
isEvenOdd2(sayı)

//-----------------------------------------------------------------------
// bu örnekteki amaç ne nalamadım
const isEvenOdd3=function(a){  

    let result=a%2===0 ? "Even" :"odd"
    
    if (a<10){
        return a 
    }
    else{
        return result
    }

    

}

console.log(isEvenOdd3(9));

//---------------------------------------