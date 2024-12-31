/* https://api.tvmaze.com/search/shows?q=girls */

fetch("https://api.tvmaze.com/search/shows?q=girls ")
.then((veri)=>console.log(veri))

// -------------------------------------------------------------------------

fetch("https://api.tvmaze.com/search/shows?q=girls ")
.then((cevap)=>cevap.json())
.then((veri)=>console.log(veri))

// -------------------------------------------------------------------------


fetch("https://api.github.com/users") //database e istek attık
.then((c)=>{ //hata kontrolü yaptık
    if (!c.ok){
        throw new Error ("urlde hata ver")
    }
    return c.json() //gelen verileri js ye uygun hale getirdik
})
.then((veri)=>ekranaBastir(veri)) //veriler hatasız ise çalışacak kod
.catch((error)=>console.log(error)) //veriler hatalı ise çalışacak kod
// -------------------------------------------------------------------------


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
 











































