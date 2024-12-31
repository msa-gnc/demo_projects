//* ===========================================================
//*                3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamiza ve cevaplari yonetebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.
//?! Bu baglamda syntatic sugar benzetmesi yapilabilir.

//!throw ile hata fırlatırsak kodumuz o satırda durur. kodumuzu durdurmak istemezsek diğer sayfadaki kodları kullanırız

// Informational responses (100 – 199) bilgi mesajı
// Successful responses (200 – 299) başarılı bir dönüş
// Redirection messages (300 – 399) başka bir siteye yönlendirme
// Client error responses (400 – 499) kullanıcı hatası
// Server error responses (500 – 599) data base de olan bir hata


// tek satırlık kodlarda {} gerekmiyordu burada süslü koymadık ama varmış gibi oluyor. süslünün içinde olan süslünün içinde kalır. (yani fonsiyon içinde olan fonsiyon içinde kalıyor)

// chain (zincir then)

// fetch("https://api.github.com/users").then((res)=>res.json()).then((veri)=>console.log(veri))

//fetch("https://api.github.com/users") //data base'e istek attık
//.then((res)=>res.json())             // gelen verilerin json kısmını istiyorum  js ye uyun hale getirdik                 
//.then((veri)=>ekranaBastır(veri))   // veriye ne yapmak istiyorsan yap ama fonksiyon içinde olan fonksiyon içinde kalıyor  verileri fonksiyon yardımıyla dışarı çıkardık verileri fonksiyona yolladık.

fetch("https://api.github.com/users") 
.then((res)=>{
    // if (res.ok == false){
    //     throw new Error("url de hata var")
    // }
    if (!res.ok){
        throw new Error("url de hata var")
    }

return res.json()
})                          
.then((veri)=>ekranaBastır(veri)).catch((error)=>console.log("urlde hata var")) 




// const ekranaBastır = (data) => {
//     // console.log(data);
// data.forEach((kisi)=>{
// document.querySelector("section").innerHTML += `

// <h1>${kisi.login}</h1>
// <img  width ="300px" src=${kisi.avatar_url}/>
// <h3>${kisi.node_id}</h3>
// `
// })

// }

// //! havada destructing ile yaptık 


const ekranaBastir = (data) => {
    console.log(data);
 
   data.forEach(({ login, avatar_url, node_id }) => {
     document.querySelector("section").innerHTML += `
    
    <h1>${login} </h1>
    <img width="300px" src=${avatar_url}/>
    <h3>${node_id} </h3>
    `;
   });
 };










