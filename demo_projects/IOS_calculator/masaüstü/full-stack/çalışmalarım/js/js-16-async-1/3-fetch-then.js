// !JavaScript'te fetch fonksiyonu;
//  modern tarayıcılarda kullanılan bir API'dir ve HTTP istekleri yapmayı kolaylaştırır. fetch, genellikle veri almak (GET) veya veri göndermek (POST) gibi işlemler için kullanılır. Asenkron bir yapıya sahiptir ve bir Promise döner.

//? Temel Kullanımı

// fetch(url,options)

// .then(response=>{
//     if(!response.ok){
//         throw new Error("HTTP hatası:" + response.status)
//     }
//     return response.json() // veya response.text(), response.blob() vb.

// })

// .then(data=>{
//     console.log(data); // API'den dönen veriyi işler
// })

// .catch(error =>{
//     console.error("Hata", error)
// })

//?Basit GET İsteği

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error=>console.error("Hata",error))

// ! eğer json() olan yerde süsülü parantez kullanılacaksa return ifadesi kullanılmak zorunda yoksa undifened olarak çıkar consoleda

// fetch("https://api.github.com/users")    // database 2 istek attık
// .then((yanıt)=>{return yanıt.json()}) // gelen verileri js'e uygun hale getirdik
// .then((veri)=>{console.log(veri)}) // gelen verileri konsola yazdırdık
// .catch((hata)=>{console.log(hata)})


// fetch("https://reqres.in/api/users?page=2")
// .then(yanıt=>yanıt.json())
// .then(veri=>console.log(veri))
// .catch(hata=>console.log(hata))


// fetch("https://dog.ceo/api/breeds/image/random")
// .then((res)=>{ return res.json()})
// .then((data)=>{console.log(data)})
// .catch((error)=>{console.error("Hata", error)})

// fetch("https://catfact.ninja/fact")
// .then((res)=>{return res.json()})
// .then((data)=>{console.log(data)})
// .catch((error)=>{console.error("Hata",error)})



// fetch("https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&hourly=temperature_2m")
// .then((res)=>{
//     if(!res.ok){
//         throw new Error ("HTTP Hatası" + response.status)
//     }

//     return res.json()
// })
// .then((data)=>{console.log(data)})
// .catch((error)=>{console.log(error)})



// fetch("https://restcountries.com/v3.1/all")
// .then((res)=>{
//     if(!res.ok){
//         throw new Error ("HTTP Hatası, yani urlde hata var")
//     }
//     return res.json()
// })
// .then((data)=>{console.log(data)})
// .catch((error)=>{console.log(error)})


// -----------------------------------------------------------------------------
// fetch("https://www.freepublicapis.com/api/apis?limit=10&sort=best")
// .then((res)=>console.log(res.json())) // önce bunu yazdım gelen response'u inceledim

// fetch("https://www.freepublicapis.com/api/apis?limit=10&sort=best")
// .then((res)=>{
//     if(!res.ok){
//         throw new Error ("HTTP Hatası")
//     }
//     return res.json()
// })
// .then((veri)=>ekranaBastır(veri))
// .catch((error)=>console.log(error))



// const ekranaBastır = (x)=>{
//     x.forEach(({emoji,description,source,title})=>{
//         const section = document.querySelector(".mySection")
//         section.innerHTML += `
//         <h1>${emoji}</h1>
//         <h1>${description}</h1>
//         <p> ${title}</p>
//         <p>  ${source}</p>
//         `
//     })
// }





fetch("https://api.imgflip.com/get_memes")
.then((res)=>console.log(res.json()))


fetch("https://api.imgflip.com/get_memes")
.then((res)=>{
    if(!res.ok){
        throw new Error ("HTTP hatası")
    }
    return res.json()
})
.then((data)=>yazdir(data.data.memes))
.catch((error)=>console.log(error))



const yazdir = (x) =>{
    x.forEach(({name})=>{
                 const myDiv = document.querySelector("div")
                 myDiv.innerHTML += `
                 <h1>${name}</h1>
                
                `
            })
}