console.log("**** TRAVERSING DOM ****")

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------
//! parentElement, parentNode 
const h2 =document.getElementById("add-new-item")
console.log(h2);
console.log(h2.parentNode);
console.log(h2.parentElement);
console.log(h2.parentNode.parentNode.parentNode.parentNode.parentNode); // documente kadar çıkabilir
console.log(h2.parentElement.parentElement.parentElement.parentElement); // html'e kadar çıkabilir


//? bulunduğumuz yer
const htmlLi =document.querySelector("ul li:nth-child(1)")

console.log(htmlLi.parentNode.parentNode);

console.log(htmlLi.closest("section.item-list")); // en yakın  section.item-list
console.log(htmlLi.closest("#new-sec")); // en yakın new-sec
console.log(htmlLi.closest("main > section")); // en yakın parenttı main olan section
console.log(htmlLi.closest("section > section")); // en yakın parettı section olan section
console.log(htmlLi.closest("main > section >:not(.item-list) ")); // en yakın item-list olmayan parenttı section olan (sectionında parentı main olan)
console.log(htmlLi.closest("main").querySelector("section.add-item"));

//* 2- Asagi Yonde traverse
//*----------------------------------------------
//? Children, firstElementChild, lastElementChild

const section = document.querySelector("section.add-item")

console.log(section.firstElementChild); // sectionın ilk child'ına erişir
console.log(section.firstChild); //  sectionın ilk child'ının yazısına erişiyor

console.log(section.lastElementChild); // sectionın son elamanı
console.log(section.lastChild); // sectionın son elamanının yazısına erişir

console.log(section.children); // html collection döner yani tüm childlarına eişiyor



//* 3- Yatay Yonde traverse
//*----------------------------------------------
//! nextElementSibling ,previousElementSibling


console.log(htmlLi.nextElementSibling); //bir sonraki kardeşi
console.log(htmlLi.nextElementSibling.nextElementSibling); // iki sonraki kardeşi
console.log(htmlLi.nextElementSibling.nextElementSibling.previousElementSibling); // iki sonra bir ileri

console.log(htmlLi.nextElementSibling.innerText); //bir sonraki kardeşi yazısına erişim
console.log(htmlLi.nextElementSibling.nextElementSibling.innerText);
console.log(htmlLi.nextElementSibling.nextElementSibling.previousElementSibling.innerText);
