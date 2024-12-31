const getirCountry = async() =>{

 const res= await fetch("https://restcountries.com/v3.1/all")
 const veri =await res.json()
 bastirCountry(veri)
}

getirCountry()

//!ekrana bastır

const bastirCountr=(veri)=>{

    veri.forEach((a)=>{


        document.querySelector("article").innerHTML+=`

         <div class="card text-start w-50 shadow-lg bg-light my-4" style="width: 18rem;">
  <img src="${a.flags.svg} " class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${a.name.common} </h5>
    
<ul class="list-group list-group-flush">
  <li class="list-group-item">
  ${a.capital}
  
   </li>
  <li class="list-group-item">
  
  </li>
  <li class="list-group-item">   </li>
  
</ul>
 </div>
</div> `

    })
}