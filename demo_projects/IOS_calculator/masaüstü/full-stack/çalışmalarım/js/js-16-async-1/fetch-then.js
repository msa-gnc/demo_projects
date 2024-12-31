

fetch("https://api.github.com/users")
.then((res)=>{
    if(!res.ok){
        throw new Error("url de hata var")
    }
    
 return res.json()
  
})
.then((veri)=>ekranaBastir(veri))
.catch((error) => console.log(error))



const ekranaBastir = (x) => {
    x.forEach(({login})=>{
        document.querySelector(".myclass").innerHTML+=`
        <h1>${login} </h1>
        `
    })
}