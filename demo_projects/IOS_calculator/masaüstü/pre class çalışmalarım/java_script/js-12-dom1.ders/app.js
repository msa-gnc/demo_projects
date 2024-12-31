
// ! web sayfasını başlığını buradan da değitirebilirsin
document.title ="dom"

// !Methods

//! write()
//  ?verilen stringi html sayfasına yazar  innerHTML, appendChild() veya createElement() gibi yöntemler daha güvenli ve esnek alternatiflerdir.
document.write("document.write ('') verilen stringi html sayfasına yazar ");

// !getElementById() Element nesnesi olarak döner.
// ? Seçtiği öğeyi bir Element nesnesi olarak döner. Bu metot, doğrudan ve hızlı bir şekilde öğelere erişmek için kullanılır.
console.log("---------getElementById()----------------------------------");

console.log(document.getElementById("header"));
document.getElementById("header").style.color = "red" //! stil verme
document.getElementById("header").style.border = "2px solid red"
const headerText = document.getElementById("header")
headerText.style.backgroundColor = "yellow" //! stil verme böyle daha kısa oluyor
headerText.style.padding = "1rem"




// ! yukarıda ne yaptık yukarıda  seçtiğimiz elementlerin style propertylerini manipule ettik yani değişiklik yaptık
//! NOTE: propertylerde (örn:bacgrounColor) kebap-case değil camelCase kullanılır.



//?Kebap-case Kelimeler küçük harflerle yazılır ve kelimeler arasında tire (-) kullanılır.
//?camelCase İlk kelime küçük harfle başlar, sonraki kelimelerin ilk harfleri büyük olur. Kelimeler arasında boşluk veya ayraç kullanılmaz.

console.log(document.getElementById("add-new-item"));
document.getElementById("add-new-item").style.backgroundColor = "yellow"
console.log(document.getElementById("input"));


// ! inputların değerinin okunması/yazılması/değiştirilmesi
const myInput = document.getElementById("input")
console.log(myInput.value);

myInput.btn ="Gönder"

myInput.value ="value değiştirildi"



console.log("---------getElementById()----------------------------------");

//! getElementsByName()  NodeList döner
// ? metodu, bir HTML belgesinde belirli bir name özelliğine sahip öğeleri seçmek için kullanılır. Bu metot, bir NodeList döner ve dönen liste dinamik bir koleksiyon olduğundan, belgedeki değişiklikler listeye otomatik olarak yansır.HTMLCollection döner ve bu koleksiyon bir diziye benzese de dizi metotlarının tamamını desteklemez. document.querySelectorAll("[name='username']") gibi daha esnek seçim yöntemleri kullanılabilir.
console.log("---------getElementsByName() ----------------------------------");

console.log(document.getElementsByName("kullanıcıAdı"));

console.log("---------getElementsByName() ----------------------------------");

// !getElementsByTagName() Metodu  HTMLCollection olarak döner.

// ?etiket_adı: Seçmek istediğiniz HTML etiketinin adı (örneğin: div, p, input) , belirli bir etiket adı (tag name) ile tüm HTML öğelerini seçmek için kullanılan bir DOM metodudur. Seçilen öğeler, bir HTMLCollection olarak döner. Bu koleksiyon, canlıdır (live), yani DOM’da yapılan değişiklikler bu koleksiyona otomatik olarak yansır. Büyük/küçük harf duyarlılığı yoktur: "DIV" ile "div" aynı sonucu döner.document. document.querySelectorAll("p") kullanarak bir NodeList dönebilirsiniz.  Bu yöntem daha esnek seçimlere olanak tanır ve modern tarayıcılarda sıkça tercih edilir.querySelectorAll statik bir koleksiyon döner, yani DOM değişiklikleri bu koleksiyona yansımaz.
console.log("---------getElementsByTagName() -------------------------------");
console.log(document.getElementsByTagName("h2"));
console.log(document.getElementsByTagName("li")); // tüm liler

const tümliler = document.getElementsByTagName("li")
console.log(tümliler);

console.log(tümliler[0]);
console.log(tümliler[0].textContent);
tümliler[2].textContent ="javaScrip" // HTML di javaScript olarak değiştirdik

console.log("---------getElementsByTagName() -------------------------------");

// !getElementsByClassName()  HTMLCollection döner 
// ? getElementsByClassName(), sınıf tabanlı hızlı seçimler yapmak için idealdir.Dinamik değişikliklerin anında yansıması gerektiğinde tercih edilir.Birden fazla sınıfı ayrı ayrı belirtemezsiniz, ancak CSS sınıf seçicilerini destekleyen querySelectorAll() ile yapabilirsiniz:
console.log("---------getElementsByClassName()------------------------------");
console.log(document.getElementsByClassName("js-li"));
const  listem = document.getElementsByClassName("list")
listem[0].innerText = "Html dersleri"

console.log("---------getElementsByClassName()------------------------------");

console.log("----------innertext ,textContent-----------------------");
//  ! innertext ,textContent

const yazı = document.getElementById("paragraf")
console.log(yazı);
console.log(yazı.innerText);
yazı.innerText =" bu yazı innerText ile değiştiridi"
console.log(yazı);
console.log(yazı.innerText);

let yazı2= document.getElementById("paragraf")
console.log(yazı2);
console.log(yazı2.textContent);
yazı2.textContent = "bu yazı textContent ile değiştirildi"
console.log(yazı2);
console.log(yazı2.textContent);

console.log("----------innertext ,textContent-----------------------");

// !innerHTML (içeriği alma/değiştirme/okuma/yazma) 
//! JavaScript Kod Enjeksiyonu Tehlikesi (XSS): (Cross-Site Scripting) saldırılarına açık olabilirsiniz.***
// ?innerHTML özelliği, yalnızca tek bir HTML elementini temsil eden nesnelerle kullanılabilir. Bu yüzden yalnızca getElementById() ve querySelector() gibi tek bir öğe döndüren metotlarla kullanılabilir.  innerHTML Alternatifleri: textContent ,innerText: 
const başlık6 = document.querySelector("başlık6")
başlık6.innerHTML = <div>
    <p>innerHtml kullanarak bu şekilde etiketlerle istediğimizi ekleyebiliriz o yüzdden innerHTML tehlikelidir fakat textContent ve innerText ile bu şelilde yazamayazız sadece içerik yazabiliriz. Tıpkı HTML sayfasına yazıyormuş gibi yazabilirirz.</p>
</div>
// ?Birden Fazla Eleman Döndüren Metotlar:
// getElementsByName()
// getElementsByTagName()
// getElementsByClassName()
// querySelectorAll()
// Bu metotlar bir koleksiyon döndürüldüğü için innerHTML doğrudan kullanılamaz. Ancak, dönen koleksiyonun içindeki öğelere tek tek erişerek innerHTML kullanılabilir:

console.log("---------innerHTML------------------------------");
console.log(document.getElementById("baslık1").innerHTML);

// içeriği alma
let content = document.getElementById("baslık1").innerHTML
console.log(content);

let content1 = document.getElementById("baslık1")
content1.innerHTML = "inner html kullanımı yazınının değiştirilmiş hali" 
console.log(content1);

let element = document.querySelector(".baslık");
// element.innerHTML = "CSS ile seçilen içerik";

// ?Birden Fazla Eleman Döndüren Metotlar:
let baslık = document.getElementsByTagName("h3")
baslık[1].innerHTML ="hello innerhtml ile değiştitildi "

// getElementsByName()
// getElementsByTagName()
// getElementsByClassName()
// querySelectorAll() bunlarla bu şekilde dğiştiriliyor

console.log("---------innerHTML------------------------------");



console.log("---------document.forms ------------------------------");
// ! document.forms 
// ? document.forms, HTML belgesinde bulunan tüm form elemanlarını (formları) temsil eden bir koleksiyon döndüren bir özelliktir. Bu özellik, sayfadaki tüm <form> etiketlerini içerir ve HTMLCollection türünde bir nesne döner. Ayrıca her formu, name veya id özelliğine göre erişilebilir hale getirir.
// document.forms;  Tüm form elemanlarını döner
// document.forms[index];  Belirli bir formu döner (index veya form adıyla)
// document.forms["formName"];  form adıyla erişim
// document.forms["ıd"];  ıd ile erişim

let tümFormlar = document.forms // Sayfadaki tüm formlara erişim HTMLCollection döner
console.log(tümFormlar);

let indexİle = document.forms[0]
console.log(indexİle);

let benimform = document.forms["formum"]
console.log(benimform);




console.log("---------document.forms ------------------------------");




// ! ek bilgi
// element: HTML öğesinin adı (örneğin, <img>, <a>, <input>).
// attribute: Özelliğin adı (örneğin, src, href, id).
// value: Özelliğin değeri (örneğin, image.jpg, https://example.com, button1).
console.log("---------element.attribute ------------------------------");
// !element.attribute: Change the attribute value of an HTML element
// elemente erişim
let imgElement =document.getElementById("resmim")

// 'src' attribute'una erişim
let imgSrc = imgElement.src
console.log(imgSrc);

let imgAlt = imgElement.alt
console.log(imgAlt);
 
// Bir özelliği değiştirmek için: remi değiştirdik
imgElement.src = "./images/indir.jpg"
console.log(imgElement.src);
//? HTML özelliği almak veya değiştirmek için getAttribute ve setAttribute yöntemlerini de kullanabilirsiniz.
console.log("---------element.attribute ------------------------------");


// ***********************************************
//! Adding and Deleting Elements
console.log("---------Adding and Deleting Elements-------------------");
// ***********************************************
// !document.createElement(element) ve document.appendChild  :
// ?bir HTML öğesi oluşturmak için kullanılan bir yöntemdir.Bu yöntem, belirtilen element türünde yeni bir HTML öğesi oluşturur, ancak henüz sayfada (DOM’da) görünmez. Yeni öğeyi oluşturduktan sonra, bu öğeyi bir ebeveyn öğeye ekleyerek görünür hale getirebilirsiniz.
console.log("---------document.createElement(element) :------------------");


// Yeni bir 'div' öğesi oluştur
let newDiv = document.createElement("div");

// Yeni 'div' öğesine metin ekle
newDiv.innerText = "Bu yeni bir div öğesidir!";

// 'body' öğesine yeni 'div' ekle
document.body.appendChild(newDiv);

let newHeader = document.createElement("h6")
newHeader.innerText = "Bu yeni bir başlık öğesidir"
document.body.appendChild(newHeader)

let newDiv2 =document.createElement("div")
newDiv2.innerText = "bu ikinci bir div öğesidir"
document.body.appendChild(newDiv2)

let parentDivim=document.getElementById("parentDiv")
 let yeniDiv = document.createElement("div")
 yeniDiv.innerText = "divin içine div oluşturdum"
 parentDivim.appendChild(yeniDiv)


// ************************************************
// !QUERYSELECTOR() ilk gördüğünü seçer
// ************************************************
//? id ile seçme
console.log(document.querySelector("#btn"));

//?class ile seçme
console.log(document.querySelector(".item-list"));
//? tag ile seçme
console.log(document.querySelector("li")); // ilk gördüğünü seçer

// css vari bir seçim karışık css selektörleri burada kullanılabilir
const myH3 = document.querySelector("main section.item-list h3")
console.log(myH3);

const grirenk =document.querySelector(".item-list ul li:nth-child(3)")
grirenk.style.backgroundColor = "gray"

// ************************************************
// !QUERYSELECTORALL()
// ************************************************,,

const liste = document.querySelectorAll(".item-list .list")
console.log(liste);

// queryselectorall bir nodelist döndürür. nodelist dahili olarak forEach methodunu barındırı. ama istenirse spread veya Aray.from( ile yine Arraye dönüşüm yapılabilir)
liste.forEach((li)=>console.log(li.innerText))

const newList = [...liste]

console.log(newList.map((e)=>e.style.backgroundColor = "orange"));