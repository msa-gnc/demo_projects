// Bu kodlama yarışmasının amacı, verilen TC Kimlik Numarasına göre geçerli veya geçersiz sonuç döndüren bir kod yazmaktır.
// Geçerli TC Kimlik Numarası aşağıdaki kurallara uygun olmalıdır:
// TC Kimlik Numarası aslında 9 haneden oluşmakta olup, son 2 hanesi kontrol/doğrulama amaçlı eklenmiştir.
// Kimlik numarası 0 ile başlayamaz
// 10. rakam ilk 9 rakam kullanılarak, 11. rakam ise ilk 10 rakam kullanılarak elde edilir.
// 1., 3., 5., 7. ve 9. basamaktaki rakamları toplayıp 7 ile çarpıp 2., 4., 6. ve 8. basamaktaki rakamların toplamını çıkarın.
// Elde edilen sonucun birler basamağı (mod 10) ID numarasının 10. basamağını verir.
// Kimlik numarasının ilk 9 rakamı ile yukarıdaki yöntemle elde edilen 10. rakamı topladığımızda birler basamağı (mod 10) 11. rakamı verir.

// 34444185856
// 10880383988
// 14702551364
// 90091059698
// 32413045316
// 12835718432
// 53963153566
// 11111111110

const input = document.querySelector("#idNumber");
const btn = document.querySelector("#btn");
const note =document.querySelector("#note");

btn.addEventListener("click", (e) => {
    const id = input.value.split("")
    // console.log(id);
    // console.log(id[0]);
      
    const sumOdd = Number(id[0]) + Number(id[2]) + Number(id[4]) + Number(id[6])  + Number(id[8])
    const sumEven= Number(id[1]) + Number(id[3]) + Number(id[5]) + Number(id[7])
    const tenthDigit= ((sumOdd*7)-sumEven)%10
    // console.log(tenthDigit);
    const eleventhDigit = (sumOdd + sumEven + tenthDigit)%10
    // console.log(eleventhDigit);

  

    if(id.length !== 9 || id[0]=== "0"){
       note.textContent ="Your ID should be 9 digits and first digit should not be 0"
    }else {note.textContent = `${id.join("")}${tenthDigit}${eleventhDigit}is a valid TR ID Number`}



    // console.log(id.join(""));


  
});

