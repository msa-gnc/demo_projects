const school="Barbaros"

const names=["Ahmet", "Mehmet" ,12,21,34,"Ali", "Veli", ["Musa","Ahmet"],true,null,undefined, NaN,school]
console.log(names);

console.log(names[1]);
console.log(names[7]);
console.log(names[-3]); // eksili ile ulaşamıyoruz
console.log(names[names.length-1]); // yani 13 -1 = 12 yazdık length 13 ama sıra 0dan başlıyor.

names[0] =names[0].toUpperCase()
console.log(names[0]);

const newArray= new Array("Javacript","HTML","React")
const sayılar=Array.of(4,5,"musa")
console.log(sayılar);


const cars=["BMW","Audi","Mercedes","Scoda","Porche","Tesla"]
console.log(cars);
console.log(cars[4]);


// !push---------------------------------
cars.push("Tofas")
console.log(cars);

// ! Pop-----------------------------------
cars.pop()
console.log(cars);

const deletedCar = cars.pop()
console.log(cars);
console.log(deletedCar);
//!unshıft--------------------------------------

const sayıdoner = cars.unshift("Tofas")
console.log(cars);
console.log(sayıdoner);

//! ***************silme işlemlerinde yeni diziyide dondurur atama yaparsan ekleme işlemlerinde sayıyı dondururu*/

//!shıft--------------------------------------------------
const shifted = cars.shift()
console.log(cars);
console.log(shifted);


//! splice ---------------------------------------------------------
cars.splice(0,0,"Brodway") // sıfırdan başla, sıfır sil, ekle
console.log(cars);

cars.splice(1,1) //birden başla bir sil
console.log(cars);

cars.splice(3,1,"mercedes")
console.log("cars");

cars.splice(-2,1)
console.log(cars);
cars.push("doğan","e30","range rover" )


//! reverse-----------------------------------------------------
console.log(cars);
cars.reverse()
console.log(cars);
console.log(cars[2]);

//! Sort
cars.sort()
console.log(cars);
//! sayılarda ilk rakama göre sıralıyor
numbers = [1,10,100,2,20,200,550,5,9000,900,90,9]
numbers.sort()
console.log(numbers);

//! ****************************************************************/
// sort methodu  sayılarda hatalı bir sıralama yapar bunun için aşağıdaki karşılaştırma algoritmasını ile çalıştırırız.sırayla hepsini birbirinden çıkarıyor ve küçük olanı öne alıyor.
numbers.sort((a,b)=>a-b)
console.log(numbers);
//! ***************************************************************/
//?küçükten büyüğe
numbers1=[-1,-10,-20,55,987,3,27,-89]
numbers1.sort((a,b)=>a-b)
//?Büyükten küçüğe
//!tam tersi içinde b-a
numbers1.sort((a,b)=>b-a)
console.log(numbers1);