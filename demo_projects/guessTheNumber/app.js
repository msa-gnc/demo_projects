
let rastgeleSayi = Math.ceil(Math.random() * 100 +1);
const again = document.querySelector(".again");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const message = document.querySelector(".msg");
const body = document.querySelector("body");
const life = document.querySelector(".life");
console.log("rastgeleSayi:", rastgeleSayi);

let hak = 10;
let topScore = 0;


check.addEventListener("click", () => {
  const tahmin = guess.value;




  if (!tahmin) {
    message.textContent = "Lütfen bir tahmin giriniz";
  }
  else if (tahmin < 0 || tahmin > 100) {
    message.textContent = "1-100 arasında bir değer giriniz";
  }
  else if (tahmin == rastgeleSayi) {
    message.textContent = "🌻Tebrikler Bildiniz...🌻";
    body.style.backgroundColor = "green";
    document.querySelector(".number").textContent = rastgeleSayi;
    check.disabled = true;
    if (hak > topScore) {
      topScore = hak;
      document.querySelector(".topScore").textContent = topScore;
    }
  }
 
  else {
    if (hak > 1) {
      hak--;
      life.textContent = hak;

      tahmin > rastgeleSayi
        ? (message.textContent = "Azalt")
        : (message.textContent = "Arttır");
    }
    else{
        body.style.backgroundColor="red"
        message.textContent="Oyunu Kaybetiniz"
        check.disabled=true
        life.textContent=0
    }
  }
});


again.addEventListener("click",()=>{
    const rastgeleSayi = Math.ceil(Math.random() * 100 + 1);
    message.textContent="Oyun yeni oyuncu için hazırlanıyor."
    body.style.backgroundColor="#22BF13";
    document.querySelector(".number").textContent="?";
    check.disabled=false;
    life.textContent=10
    hak=10
    guess.value=""

})