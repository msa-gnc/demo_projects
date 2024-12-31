// https://digi-api.com/api/v1/digimon/169
// https://api.pokemontcg.io/v2/cards

const ekranaBastır = (pokemon)=>{
    console.log(pokemon);
    pokemon.forEach((veri)=>{
        document.getElementById("section").innerHTML+=`
        <div style="margin:1rem; background-color:yellow; padding:1rem; border-radius:5px;">
        <h3>${veri.name}</h3>
        <img src="${veri.images.small}"/>
        </div>
        `
    })


}

const getData = async () => {
  const res = await fetch("https://api.pokemontcg.io/v2/cards")
  const data = await res.json()

  console.log(data.data);
  ekranaBastır(data.data)
}
getData()


