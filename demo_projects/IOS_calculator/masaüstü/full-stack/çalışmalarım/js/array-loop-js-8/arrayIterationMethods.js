//* =======================================
//*          ARRAY ITERATIONS
//* =======================================

//? Array iteration: bir arayın içindeki her bir elemana tek tek ulaşıp  grekli işlemlerin, karşılaştırmaların, filtlerin gibi işlemlerin yapılmasıdır

//! forEach
//! map
//! filter
//! reduce
//! every
//! some
//! find

//* =======================================
//*           FOREACH METHOD
//* =======================================
//! forEach, bir dizinin elemanlarını teker teker işlemek veya belirli bir işlemden geçirmek için oldukça kullanışlıdır.
//? 1-Void bir metottur: Herhangi bir değer döndürmez. (Yani işlemin sonucu undefined olur.)
//? 2-Diziyi değiştirmez: Orijinal dizi üzerinde değişiklik yapmaz, yalnızca her bir eleman üzerinde işlem yapar.
//? 3-Callback fonksiyonu alır: Dizinin her bir öğesi için çalıştırılacak bir fonksiyon alır.

const sayilar = [1,2,3,4,5];

// for (let sayi of sayilar){
//     console.log(sayi);
// }


sayilar.forEach((item)=>console.log(item)) // inline arrow function
//? Tek satırlı işlemlerde { } gerek yoktur

const fruits = ["Elma", "Armut", "Çilek"];


fruits.forEach((item)=>console.log(item.toUpperCase())) 

const ages = [12,15,17,18,20,21]


ages.forEach((item)=>{
    item<18 ? console.log("Reşit Değil"): console.log("reşit");
})

//!------------------------ fonksiyon ile kullanımının ikinci yolu
ages.forEach(yasYazdir);

function yasYazdir(item){
    console.log(item);
}

//!------------------------ fonksiyon ile kullanımının üçüncü yolu

ages.forEach(function(item){
    console.log(item);
})

// !---------------------------------------------------------------
//! ForEach 3 parametre alır. 1.zorunlu gibi diğerleri ihtiyaç olduğunda kullanılabilir
// !---------------------------------------------------------------

//? ikinci parametresi index dir.

const sebzeler = ["pırasa", "havuç", "ıspanak", "lahana", "kabak"];
sebzeler.forEach((sebze,index)=>
console.log(index,sebze)
// console.log(index+1,sebze)
// console.log(`${index + 1} numaralı sebze ${sebze}`)


)

//? üç parametreli
//3.parametre Döngü yapılan orijinal diziyi (örneğin, array) temsil eder.
// forEach((item,index,arr) forEach((x,y,z) istersen item index arr yerine başka birşeyde yazılır console log yaparken sırasını farklı yazabilirsin örneğin console.log(arr,item,index) ama 

sebzeler.forEach((item,index,arr)=>
console.log(item,index,arr)
)


// console log yaparken sırasını farklı yazabilirsin örneğin console.log(arr,item,index) 
sebzeler.forEach((item,index,arr)=>
    console.log(arr,item,index)
    )

// tek satırdan fazla olanlarda süslü parantez gerekir
// !Aşağıdaki örneği inceleyelim önce birincinin itemını yazdırdı sonra birincinin indexsini yazdırdı sonrada birinci için arrayı yazdırdı daha sonra ikinciye geçti. ne isteniyorsa önce hepsini birinci iten için yapıp sonra ikici  itema geçtiyor. yani şu nu yapmıyor tüm elemanların itemi sonra tüm elelmanların indexsi sonra tüm elemanlar için array bunu yapmıyor.  Yapılacak ne varsa önce birinci için hepsini yapıyor snra ikinci elemana geçiyor.

    sebzeler.forEach((item,index,arr)=>{
        console.log(item);
        console.log(index);
        console.log(arr);
    })

    sebzeler.forEach((item,index,arr)=>{
        console.log(`${arr} içindeki ${index}. indexse sahip sebze:${item}`);
    })


    sebzeler.forEach((item,index,arr)=>console.log(arr))
    sebzeler.forEach((item,index,arr)=>console.log(`${arr}`))

    sebzeler.forEach((item,index,arr)=>{
        const dizi = `${arr}`
        console.log(dizi);
        console.log(typeof dizi);
    }) // tabikide string tırnak içinde yazdık çünkü


    sebzeler.forEach((item, i, arr) => (i % 2 === 0 ? console.log(item) : null));

    //!--- Hayati öneme sahip bilgi ----
//! forEach return yapmaz(void function)
const numbers = [45, 243, 123, 78, 23, 56];
let kare = []
kare = numbers.forEach((num) => num * num);
 console.log(kare);

 const isimler=["Tuğba","Nur","Recep","Celal","Bahar","Helen"]


