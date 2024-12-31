// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir. Hoisting desteklenmez
// //! Aksi takdirde hata alırsiniz.

const isim = () => {
  console.log("musa");
};
isim();

const selamla = () => {
  console.log("merhaba");
};
selamla();

//! Tek satırlık bir kod olacaksa {} ve return gerekmez
const ad = () => console.log("Ebru");
ad();

const selamVer = () => console.log("Selamünaleyküm");
selamVer();

/* -------------------------------------------------------------------------- */
//**Parametereli fonksiyon kullanımı
// sayının3 e bölünüp bölünmediğini kontrol eden kod bloğu

const mod3 = (sayı) => sayı % 3 === 0 ? "üçe bölünür" : "üçe bölünmez"
console.log(mod3(9));



document.write(mod3(10))

//------------------------
const mod4 = (sayı) => {
    let result
    if(sayı%4===0){
        result ="4'e bölünür"
    }
    else{
        result="4'e bölünmez"
    }
    return result
    
}

console.log(mod4(44));



document.write(mod4(15))

//------------------------

//Silindirin hacmini bulduran arrow function yazın
// Pi r kare * h 


const sHacim =(r,h)=>Math.floor(Math.PI)*r**2*h
console.log(sHacim(2,4));

// return kullnılacksa {} olmalı
const hacim=(r,h)=>{
    return Math.floor(Math.PI)*r**2*h
}
console.log(hacim(2,4));











//------------------------

const asal=(num)=>{
    if (num<2){
        console.log("Bu değere kadar asal sayı yok")
        return
    }

    for (let i=2; i<num; i++){
        if (i===2){
            console.log(i)
        }
        else{
            let asal=true;
            // asal mı kontrolü
            for (let j=2; j<i;j++){
                if (i % j===0 ){
                    asal=false;
                    break;
                }
            }

            asal ? console.log(i) : "";

        }
    }
}

asal(4)