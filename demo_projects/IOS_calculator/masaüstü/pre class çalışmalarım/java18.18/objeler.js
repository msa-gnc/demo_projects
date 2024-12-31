/* -------------------------------------------------------------------------- */
/*                                   OBJECTS                                  */
/* -------------------------------------------------------------------------- */

//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ama daha karmaşık veriler için Object kullanılır

//! Objectlerde key-value ( Property-value) değerlerini içerir. Bu o nesnenin özelliklerini belirtir.

//! Herhangi bir veriye erişim için property (key) adı kullanılır.

const isim =["Ali","Veli","Ahmet"]
const soyad=["Güven","Yıldırım","Cengiz"]

console.log(`${isim[1]} ${soyad[1]} ${isim[2]} ${soyad[2]}`);

const isimSoyisim ={ad:"ali",soyad:"Güven"}
console.log(isimSoyisim.ad,isimSoyisim.soyad);

//*               Object Oluşturma Yöntemleri                    */
//* --------------------------------------------------------------*/
//! 3 farkli yöntem ile Object oluşturulabilir.
//? 1. Object() class'ından türetme
// Bu yöntem, JavaScript'teki Object sınıfını kullanarak bir nesne oluşturmayı içerir. 
// Bunun için new Object() yazılır ve sonradan nesneye özellikler atanır.
// pek kullanılmaz ama eski kodları yenilemek için  lazım olabilir.
const car=new Object()
car.marka="BMW"
car.model="2024"
car.horsePower=180
console.log(car);


const car1= new Object()
car1.marka="Scoda"
car1.model=2024
car1.carsPower=200
console.log(car1);
//? constructor metodu ile object oluşturmak
//! oop(object oriented programing)


function PersonelList(id,ad,maas){
    this.id=id;
    this.ad=ad;
    this.maas=maas
}

const personel1=new PersonelList(100,"ali",5000)
console.log(personel1);
const personel2=new PersonelList(1001,"seda",45000)
console.log(personel2);

// pek kullanılmaz ama eski kodları yenilemek için  lazım olabilir.

//? Object Literal en cok kullanacağımız ve tercih eilen yöntem)

const icecek={
    ad:"çay",
    hazirlikSüresi:"Yarım Saat",
    tercihler:["Açık","Demli","Paşa Çayı"],
    mensei:"Rize"
}


console.log("-----------------------------------------------------------");
let myObject = {
    Ad:"Musa",
    Soyad:"Genç",
    Meslek: "Full Stack Devoloper",
    Yaş:null,
    Notları:[90,95,80],
    takım:{takım:"galatasaray"}
}

console.log(myObject);

//!Boş object içini doldurma veya dolu olana ekleme
const house={}
house.room=5
house.heating="air conditioner"
house.pool=true
console.log(house);

//* ------------------------------------------------------------------- */

let personel={
    name:"Musa",
    lastName:"Genç",
    birth:1993,
    horoscope:"taurus",
    isMaried:true,
    children:["sena","yeşim"],
    dateOfDeath:null,
    

    address:{city:"Ankara",Street:"inegöl sokak",no:5},
    calculateAge:function(){
        return new Date().getFullYear()-this.birth
    },
    selamla:()=>{
        return "merhaba"

    },
//! object içinde arrow function kullanılıyorsa this keywordu window nesnesine karşılık gelir. zaten arrow functionın ortaya çıkma sebebi thislerden kurtulmaktır.
    arrowFunction: ()=>{
        // console.log(this.isMaried);
        // return this.İsMarried
        // console.log(personel.isMaried);
        return personel.isMarried
    }
}
console.log(personel);

console.log(personel.calculateAge());

//! okuma/erişme
//! 1- .(dot) notation ile erişim

console.log(personel.name);
console.log(personel.birth);
console.log(personel.children.forEach((child)=>console.log(child)));
console.log(personel.horoscope);
console.log(personel.address.city);
console.log(personel.address.mahalle);
console.log(personel.selamla());



//! 1- square brcets, özellik yöntemi
console.log(personel["name"]);
console.log(personel["horoscope"]);
console.log(personel["address"]["city"]);

// dinamik değerlere erişim için avanatajlıdır

const keyWord="birth"
console.log(personel[keyWord]);
/* ---------------------------------------------------------------- */
//? yeni bir özellik (property) ekleme
personel.phone="342-456-246"
personel[keyWord]=1990
console.log(personel);

/*--------------------------------------------------------------------*/
//? Bir objeyi kopyalama
//! 1-Shallow Copy (sığ) Kopyalama
personel.name="Hatice"
const firmapersoneli=personel
firmapersoneli.name ="fatma"
console.log(`Personle: ${personel.name}`);
console.log(`firmapersonlei: ${firmapersoneli.name}`);

// isim ikisinde de değişti kopyada da orjinalde de
// personel olan objecti değiştirdiğimizde her ikisi değişti
//firma personeli olan kopyada değitirdiğimizde yine ikiside değişti
// ikisi birbirinden etkileniyor

//! 2 Deep copy yöntemi

// ! JSON.stringify() , JSON.parse()

const deepCopyPersonel= JSON.parse(JSON.stringify(personel)) 
console.log(deepCopyPersonel);
deepCopyPersonel.name="Zehra"
console.log(personel);
console.log(deepCopyPersonel);

//burada isim değişti deepcopypersonel de ama personel olan objecti etkilemedi.


// ! 3 - Object assign
// ! 4 - Spread Operatoru // bunlar daha sonra işlenecek


// *************************OBJECT METHODS*********************************
//? İÇİÇE (NESTED) OBJECT KULLANIMI

const employeeList={
    ad:"musa",
    personel1:{name:"Salih",lastname:"sina",age:45},
    personel2:{name:"Saliha",lastname:"sinan",age:20},
    personel3:{name:"serap",lastname:"yıldırım",age:35},
}


console.log(employeeList.personel2.lastname);
console.log(employeeList["personel2"]["lastname"]);

// ! objectlerde "for -of -in" yapısının kullanımı

// for (let i of employeeList){
//     console.log(i);
// } // not iterabal olarak hata verdi çünkü sıralı değil dizi değil, for...of döngüsüyle üzerinde gezilemez.

for (i in employeeList){
    console.log(i);
}

for (i in personel){
    console.log(i);
}
/******************************************************************* */
// for in yada for of yerine objecti arraye çeviren yöntemler var 
// bir object key - value çiflerinden oluşur

//? KEY lere erişim sağlamak için Object.keys methodu kullanılır
console.clear();
console.log("console.clear();" );

const keys =Object.keys(personel)

console.log(keys);


//? Values lara erişim sağlamak için Object.values methodu kullanılır

const values = Object.values(personel)
console.log(values);

//? OBJECT.ENTRIES

const degerler=Object.entries(personel)
console.log(degerler);





// json






































