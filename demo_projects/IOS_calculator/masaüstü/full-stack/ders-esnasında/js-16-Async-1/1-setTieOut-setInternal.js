//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Async Programlama
//? kullanilmasi cok onemlidir.


//*Asenkron (1 seferlik çalışan ) setTimeOut

setTimeout(()=>{
    console.log("Selamun Aleyküm");
},3000)

console.log("Aleykum selam");

setTimeout(()=>{
    console.log("naber");
    // alert("merhaba")
},900)

//! ! aleyküm selam, naber, selamün aleyküm sırasıyla çalışır. 3. nün süresi 1.den azsa, 2-3-1 sırasında çalışır
//!settimeout müsait zamanda ortaya çıkar, onun sırası geçtiğinde alttaki işlemler bitince çalışır.
let sayac = 0


const interval1 = setInterval(()=>{

console.log(++sayac);

if(sayac==7){
    clearInterval(interval1)
}


},1000)
