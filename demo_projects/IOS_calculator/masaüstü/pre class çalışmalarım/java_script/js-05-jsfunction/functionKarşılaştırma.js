//! * --------Function-Declaration----------------------------*/
function yazdır() {
  console.log("Function Decleration");
}

yazdır();

//? sadece function declerationda hoisting yapılıyor

topla(5, 5);
function topla(x, y) {
  console.log("Parametreli funcition declaration", x + y);
}

//! * --------Function-Expression----------------------------*/

const yazdır2 = function () {
  console.log("Function Expression");
};
yazdır2();

const topla2 = function (x, y) {
  console.log("parametreli Function Expression", x + y);
};
topla2(5, 5);
//! * ------------Arrow Function----------------------------------*/
//? Tek satırlık bir kod olacaksa {} ve return gerekmez
const yazdır3 = () => console.log("Arrow Functıon tek satır");
yazdır3();

const topla3 = (x, y) => {
  console.log("Parametreli Arrow Functınon", x + y);
};
topla3(5, 5);
//! * ------------Recursive Function----------------------------------*/
const topla4 = (n) => {
  if (n < 1) {
    return n;
  } else {
    return topla4(n - 1) + n;
  }
};

console.log("recursive function", topla4(9));
//! * -------------------------------IIFE----------------------------------*/
(function () {
  console.log("IIFE");
})();

(function (x, y) {
  console.log("Parametreli IIFE", x + y);
})(5, 5);

console.clear();


const check = function(x,y){
  if (x===y){
    console.log("Kare");
  }
  else{console.log("Dikdörtgen");}
}

check(5,6)
check(5,5)

const hacim=(r,h)=>{
  return Math.floor(Math.PI)*r**2*h
}
console.log(hacim(2,4));



let yüzYıkama="evet"
let dişFırçalama="evet"
let kahvaltı="evet"

const check1 = ()=>{
return (yüzYıkama === "evet" &&  dişFırçalama==="evet" && kahvaltı==="evet" ) ? "Başarıyla Tamamlandı" :"eksik"
  
}


console.log(check1());




const kontrol1 = () =>{
  for(let i = 0 ; i<3; i++){

    let username= prompt("İminizi Giriniz")
    let password = +prompt("şifrenizi Giriniz")
    
      if (username === "ALİ" && password===1234){
        console.log("Hoşgeldin Ali");
        break
      }
      else{console.log("hatalı giriş");}
     
    }
    
}

// kontrol1()
console.clear()


let sentence = "Korkma sönmez bu şafaklarda yüzen al sancak"

const findLetter = ()=> sentence.split("a").length-1;


console.log(findLetter());