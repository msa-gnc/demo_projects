//array property
// length: bir array'in kaç elemandan oluştuğunu verir
const number = [3, 5, 2, "4", "bes", "dort", 3, 6, "bes", 5]
console.log(number.length);
//eleman sayısını veriyor 1 den başlıyor
// parantez varsa method yoksa property 

// ! includes (... içeriyormu) **** çok kullanılacak
console.log(number.includes("Dort")); //number dizisi Dort stringini içeriyor mu
console.log(number.includes("dort")); //number dizisi dort stringini içeriyor mu

const userList=[ "Helen" , "Musagenc01", "sivasli19","kelalka","guldurmebeni","excalibur17" ]
// const guest=prompt("Kullanıcı adı giriniz")

// userList.includes(guest) ? console.log("kayıtlı kullanıcı lütfen giriş yapın"):console.log("kayıt olabilirsiniz");


// ! indexOf() , lastİndexOf---------------------------------------

// !index
// ilk eşleşen indeksi döndürür
// bir array içinde aradığımız elemanı ilk gördüğü anda gördüğünün indeksini döndürür.
console.log(number);
console.log(number.indexOf("bes")); // bes elemanının index numarasını döndürdü
console.log(number.indexOf("yedi")); //Array içinde bu eleman yok ise -1 döndürür. yani bunlada arama yapabilirim.

if (number.indexOf("bes")<0){
    console.log("aranan öğe yok")
}
    else{
        console.log( `aradığınız öğenin sıra numarası ${number.indexOf("bes")}`);
    }


    //! lastIndexof sondan başlayarak arar ilk gördüğünün numarasını verir 
    console.log(number.indexOf(5));
    console.log(number.lastIndexOf(5));


    //!--------------------join---- array'i stringe dönüştürür------------

    // birleştirme için işarek vermezsek virgülle birleştirir. 

    const statement =["oku","da","adam","ol"]
    console.log(statement.join());
    console.log(statement.join(""));
    console.log(statement.join(" "));
    console.log(statement.join("/"));

