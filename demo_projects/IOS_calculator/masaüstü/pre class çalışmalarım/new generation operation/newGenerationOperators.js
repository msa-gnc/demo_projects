console.log("**** NEW GEN OPERATORS *****");

//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================

const product = {
  id: "12345",
  brand: "Apple",
  type: "smart phone",
  price: 30000,
};

const product1 = {
  id: "6789",
  brand: "Samsung",
  type: "mobile phone",
  price: 50000,
};

//? .notasyonu ile erişim mümkün
console.log(product.price);
console.log(product.type);

// let proPrice = product.price
// console.log(proPrice)
// proPrice += 5000
// console.log(proPrice)
// console.log(product.price)

//? square bracket
console.log(product["id"]);

//? DESTRUCTURING yöntemi
//?DEğişken isimleri objedeki keylerle aynı olmalıdır

let { id, brand, type, price } = product;

console.log("ID", id);
console.log("brand", brand);
console.log("price", price);
price += 5000;
console.log(price);
console.log(product.price);

let { id: proID, brand: ProBrand, type: proType, price: proPrice } = product1;
console.log(proID, proPrice, proType, ProBrand);
proPrice += 300;
console.log(proPrice);

//? NESTED DESTR
const insanlar = {
  kisi1: {
    kimlikNo: "1234567890",
    adi: "Ahmet",
    soyadi: "Can",
    meslek: "Mimar",
    maas: 30000,
  },
  kisi2: {
    kimlikNo: "44234567890",
    adi: "Canan",
    soyadi: "Can",
    meslek: "Sosyal Gelişim Uzmanı",
    maas: 25000,
  },
};

//   Level 1 Destr
// const { kisi1, kisi2 } = insanlar;
// console.log(kisi1.meslek, kisi2.meslek);
//   Level 2 Destr
// const { adi, meslek } = kisi1;
// console.log(adi);
// let { adi: kisi2Ad, maas } = kisi2;
// console.log(kisi2Ad);

//?iki seviyeli destr

const {
  kisi1: { adi, soyadi, meslek },
  kisi2: { adi: kisi2Ad, soyadi: kisi2Soyad, meslek: kisi2Meslek },
} = insanlar;

console.log(kisi2Soyad);
console.log(meslek);

//* Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "John",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

console.log("******************************");
team.forEach((person) => {
  console.log("Name", person.name);
  console.log("Surname", person.surname);
  console.log("Job", person.job);
  console.log("age", person.age);
});

console.log("******************************");

team.forEach((person) => {
  const { name, surname, job, age } = person;
  console.log("Name", name);
  console.log("Surname", surname);
  console.log("Job", job);
  console.log("age", age);
});
console.log("******************************");

team.forEach(({ name, surname, job, age }) => {
  console.log("Name", name);
  console.log("Surname", surname);
  console.log("Job", job);
  console.log("age", age);
});

//!----  FUNCTIONLARDA DESTRUC. KULLANIMI ----

const objGoster = function () {
  return {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  };
};

console.log(objGoster());
let { name, surname, job, age } = objGoster();
console.log("Age func",++age);

//?Fonksiyon Parametresi
console.log("******************")

const veri = {
    id:"123",
    desc:"This is top secret information",
    createdTime:"1980"
}

const printData = (data) => {
    console.log(`${data.id} -${data.desc} - ${data.createdTime}`)
}
const printDataDestr = (data) => {
    const {id, desc, createdTime} = data
    console.log(`${id} -${desc} - ${createdTime}`)
}


const printDataAir = (id,desc,createdTime) => {
 
    console.log(`${id} -${desc} - ${createdTime}`)
}

printData(veri)
printDataDestr(veri)
printDataAir(veri)


console.clear();
//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================

const people = ["Ali","Veli","Harvey","Helen"]
//dizilerde sıra önemlidir objelerde önemli değildir çünkü orda key var zaten istersen keyleri sırasına göre yazma değişen birşey olmaz 
console.log(people[0]);
let ali = people[0]
console.log(ali);

const [kişi1,kişi2,kişi3] = people
console.log(kişi3);

// const [kişi1,kişi2,kişi9,kişi4] = people
// console.log(kişi9);

// const [kişi1,kişi2, ,kişi3] = people
// console.log(kişi3);


// üç nokta operatoru (...) kullanıldığı yere göre isim alır

//* ==============================================
//* (...)  REST 
//* =============================================
// !1-bir dizi veya objecte bazılarından geri kalanları 


const araclar = ["kamyon","tır","kamyonet","motosiklet","Araba","taxi"]

const [arac1, ,arac2,arac3,...binekaraçalar] = araclar  // ... operatoru burada kalanlar (rest) anlamına geliyor
console.log(arac1);
console.log(arac2); // virgül koyup birşey yazmadığımız için tır boşta kalmış oldu
console.log(arac3);
console.log(binekaraçalar);
console.log(arac2);


// objecte kullanımı
const person = {
    ad: "Hazel",
    soyad: "Nut",
    is: "team lead",
    yas: 40,
  };

  const {yas,ad, ...geriKalan} = person // sıraya göre yazmadık burda object olduğu için gerek yok.
  console.log("geriye kalanlar:" ,geriKalan);


  //!2-bir fonksiyonun argumanını diziye çevirmek için kullanılıyor 

  const topla = (a,b) => a+b

  console.log(topla(1,5,9,8,7)); // 9 8 7 yi fazladan yazdık ama hata vermedi


  const topla1 = (a,b, ...kalan) => {
    console.log(kalan);
    return a+b
  }
console.log(topla(4,4,9,8,7));


const toplam = (sayılar) =>{
    return sayılar
}
console.log(toplam(0,9,8,7)); //sayılar 1 tane parametre olduğu için sadece 0rı aldı




const toplam2 = (...sayılar) =>{
    return sayılar.reduce((a,b)=> a+b)
}
console.log(toplam2(0,9,8,7));

//! REST ( ile non-iterable olan sayıları iterable hale (diziye) çevirmiş olduk. //diziye çevirdiğimiz için dizi methodu kullandık. aslında amaç diziye çevirmekti zaten 







//* =============================================
//*  (...) SPREAD 
//* =============================================Şß


// spread operatoru ise iterables olan bir elamanı biresysel hale geltirrir.

const ucanAraçlar  = ["helikopter", "drone","ucak","fuze"]

const karaAraçları = [ "araba","bisiklet","scooter","motosiklet"]

const tasıtlar = [ucanAraçlar, karaAraçları];
const flatTasitlar = [...ucanAraçlar, ...karaAraçları] // iterable olanı none iterable yapıp dizinin içine atmış olduk

console.log(tasıtlar);
console.log(flatTasitlar); 


// örnek 
const cumle = "Uzun ince bir yoldayım"

const cumleDizisi = [cumle]
console.log(cumleDizisi);

const cumleDizisi1 = [...cumle]
console.log(cumleDizisi1);

// örnek
console.log(Math.max(1,2,3,4,8,9)); // dizi değil
console.log(Math.max[1,2,3,4,8,9]); // dizi ve undifend verdi

const numbers = [1,2,3,4,8,9]
console.log(Math.max(...numbers));


//? nested
const sahislar = {
    sahis1: {
      name: "Can",
      surname: "Canan",
      dob: "1990",
      job: "developer",
      salary: "140000",
      drivingLicense: true,
    },
    sahis2: {
      name: "John",
      surname: "Sweet",
      dob: "1990",
      job: "tester",
      salary: "110000",
      drivingLicense: false,
    },
    sahis3: {
      name: "Steve",
      surname: "Job",
      dob: "2000",
      job: "developer",
      salary: "90000",
      drivingLicense: true,
    },
  };


  //! FOR IN
  for (const s in sahislar) {
    console.log(s);
    console.log(sahislar[s]);
    console.log(sahislar[s].salary);
  }

//   console.log(sahislar["sahis1"]);


// ? kullanışlı object methodları
console.log(Object.keys(sahislar));
console.log(Object.values(sahislar));
console.log(Object.values(sahislar.sahis2));
console.log(Object.entries(sahislar.sahis1));

//! FOR OF

// for (const x of sahislar) {
    // TypeError: sahislar is not iterable
// }

for (const x of Object.keys(sahislar)){
    console.log(sahislar[x].salary);
}

for (const v of Object.values(sahislar)){
    console.log(v.name);
}

