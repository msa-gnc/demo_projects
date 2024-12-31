//* ======================================================================
//*                          2- Promises
//* =======================================================================

//? Promise, asenkron bir islemin basariyla ve basarisizlikla bittigini gosteren
//? ve ayni zamanda basariyla bittiginde sonuc verilerini temsil eden bir nesne yapisidir.

//? SYTNAX
//?----------
//* 1- Ilk olarak new Promise() constructor'i ile yeni bir promise nesnesi olusturulur,
//* 2- constructor'a asil islemin yapilmasini saglayan bir executor fonksiyon verilir.
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fonksiyonlari
//* 4- resolve fonksiyonu promise'in basariyla bittiginde, reject ise
//*    basarisizlikla bittiginde isletilirler.

// new Promise((resolve, reject) => {
    
// })

// veya   

// new Promise(

//     function(resolve,reject){

//     }
// )

//? Bir Promise asagidaki state(durumlari) icerebilir:
// Pending (Beklemede): Başlangıç durumu, işlem henüz tamamlanmamış.
//Fulfilled (Tamamlandı): İşlemin  başarıyla tamamlandigini gosteren state.
//Rejected (Reddedildi): İşlem başarısız oldu islemin basarisizlikla tamamlandigini gosteren state


//!Promise Oluşturma
// Bir Promise oluşturmak için new Promise yapısı kullanılır. Promise iki parametre alır:

//?resolve: İşlem başarıyla tamamlandığında çağrılır.
//?reject: İşlem başarısız olduğunda çağrılır.

const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if(success){
        resolve("işlem başarılı") // İşlem başarılı olduğunda
    } else{
        reject("Bir hata oluştu") // İşlem başarısız olduğunda
    }
})


// !Promise Kullanımı
// Promise'ler genellikle then ve catch metodlarıyla kullanılır:

// then: İşlem başarılı olduğunda yapılacakları belirtir.
// catch: İşlem başarısız olduğunda yapılacakları belirtir.
// finally: İşlem başarıyla tamamlansa da, reddedilse de yapılacakları belirtir.

.then((result)=>{
    console.log(result); // işlem başarılı
})
.catch((error)=>{
    console.log(error); //bir hata oluştu
})
.finally(()=>{
    console.log("işlem tamamlandı"); // her durumda çalıştı.
})



//! Bir promise le degerler tamamlanabilir yada bir sebeple (hata) iptal edilebilir.
//! Bu durumlar then() ve catch() metotlari ile yakalanabilir.
//? then() ve catch() metotlari promise dondururler.
//? Zincirleme (chain) olarak kullanilabilirler.

const person = { name: "kağan", surname: "bilir" };

new Promise((resolve,reject)=>{
    //if(false){ 
    if(true){ // databaseden veriler düzgün geldiyse
        resolve(person) // person yerinde databasein url si olur
    } else{
        reject(new Error("promise başarısız"))
    }
})
.then((response)=> console.log(response))
.catch((error)=>console.log(error))