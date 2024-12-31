//* ============================================
//*                FOR LOOP
//* ============================================

const maaslar = [10,20,30,40,50,60,70,80]
let sum = 0

for (let i =0; i<maaslar.length;i++){
    sum+=maaslar[i]
}

console.log(sum);

//  50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.
const ellidenKucuk = []
const ellidenBuyuk = []
for (let i = 0; i<maaslar.length;i++){
    if(maaslar[i]<50){
        ellidenKucuk.push(maaslar[i])
    }else{
        ellidenBuyuk.push(maaslar[i])
    }
}
console.log(ellidenBuyuk);
console.log(ellidenKucuk);

//!-------------- FOR IN -------------------
// for...in, bir nesnenin (object) ya da dizinin (array) özelliklerini veya indislerini döngüyle döner.
// Bir String üzerinde çalıştığında, stringin her bir karakterinin indisini (0, 1, 2, ...) döner.
let sum1 = 0

for(let i in maaslar){
    sum1+=maaslar[i]

}
console.log(sum1);





const ellidenKucuk1 = []
const ellidenBuyuk1 = []
for (let i in maaslar){
    if(maaslar[i]<50){
        ellidenKucuk1.push(maaslar[i])
    }else{
        ellidenBuyuk1.push(maaslar[i])
    }
}
console.log(ellidenBuyuk1);
console.log(ellidenKucuk1);

//!-------------- FOR OF -------------------
//? for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. 
//? Bu dongude dizi icindeki veriye erisirken indisleme kullanmaya gerek yoktur.

let sum2 = 0
for (let i of maaslar){
    sum2+=i
}
console.log(sum2);


const ellidenKucuk2 = []
const ellidenBuyuk2 = []

for(let i of maaslar){
    if(i<50){
    ellidenKucuk2.push(i)
}else{
    ellidenBuyuk2.push(i)
}


}
console.log(ellidenBuyuk2);