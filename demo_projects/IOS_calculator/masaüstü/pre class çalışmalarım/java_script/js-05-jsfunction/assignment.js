//?Sayının Tek mi Çift mi Olduğunu Bulma

function isEvenOdd1(number){
    if(number%2 === 0){
        console.log("sayı çiftir");
    }
    
    else( console.log("sayı tektir"))
    
}
isEvenOdd1(1)
isEvenOdd1(2)

const isEvenOdd2 = function(x){
   let sonuc = x%2 === 0 ? "Even":"Odd"
   console.log(sonuc);
}
isEvenOdd2(1)
isEvenOdd2(2)

const isEvenOdd2a = function(x){
    if (x%2 === 0){
        console.log("sayı tektir");
        
    }
    else{console.log("sayı çiftir");}
}
isEvenOdd2a(5)


const isEvenOdd3 = (x) => {
    let sonuc = x%2 === 0 ? "even" :"odd"
    console.log(sonuc);
}

isEvenOdd3(1);
isEvenOdd3(2);

(function(x){
    let sonuc = x%2 === 0 ? "even" :"odd"
    console.log(sonuc);
})(5);


//?Sayı 5'in Katı mı?

function beşinKatımı(x){
   let sonuc = x%5 === 0 ? "sayı beşin katı" :"sayı beşin katı değil"
    console.log(sonuc);
}
beşinKatımı(5)
beşinKatımı(6)

const beşinKatımı2 = function(x){
    let sonuc = x%5 === 0 ? "sayı beşin katı" :"sayı beşin katı değil"
    console.log(sonuc);
}
beşinKatımı2(5)
beşinKatımı(6)

const beşinKatımı3 = (x) => {
    if (x%5 === 0){
        console.log("sayı beşin katı");
    }
    else{console.log("sayı beşin katı değil");}

    
}

beşinKatımı3(5) 
beşinKatımı3(6);


(function(x){
   if (x===0){
    console.log("sayı beşin katı değil");
   }
   else if (x%5 === 0){
    console.log("sayı beşin katı");
   }
   else{ console.log("sayı beşin katı değil");}
})(0)

//?Pozitif mi Negatif mi?:

function isPztNgt(x){
   let result = x===0 ?  "nötr" : x<0 ? "negatif" : "pozitif"
   console.log(result);
}
isPztNgt(5)
isPztNgt(-1)
isPztNgt(0);



const isPztNgt2 = function(x){
    let result = x===0 ?  "nötr" : x<0 ? "negatif" : "pozitif"
    console.log(result);
}

isPztNgt2(0)
isPztNgt2(0)
isPztNgt2(-1)
isPztNgt2(3)