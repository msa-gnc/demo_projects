console.log("calculate.js den selamlar");

let myName = "ipek"
console.log(myName);

const calculate=(dizi)=>{
// products dizisindeki priceları topla
return dizi.reduce((sum,product)=> sum+product.price,0)

}