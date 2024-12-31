
const input=document.querySelector("#input")
const btn=document.querySelector("#btn")
const note=document.querySelector(".not")
btn.addEventListener("click", (e) =>{
    const deger=input.value
    const first = Number(deger.slice(0, 3));
    const second = Number(deger.slice(4, 6));
    const third = Number(deger.slice(7, 11));
    // console.log(first)
    // console.log(second)
    // console.log(three)
     if(deger.length !==11 || deger[3] !=="-" || deger[6] !=="-" ){
         note.innerText="Should have 9 digits. Example: 522-82-5151"
        input.value=""
     }else if (first === 0 || first === 666 || first >= 900) {
        input.value=""
        note.innerText="The first part should have 3 digits and should not be 000, 666, or between 900 and 999.";}
        else if(second<1) {
            note.innerText="The second part should have 2 digits and it should be from 01 to 99."
            input.value=""
        }
        else if(third<1) {
            note.innerText="The third part should have 4 digits and it should be from 0001 to 9999."
            input.value=""}
            else {
                note.innerText="This is a valid SSN number"
                input.value=""
                input.disabled = true;
            }
})