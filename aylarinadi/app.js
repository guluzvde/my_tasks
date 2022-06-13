let tarix = prompt("Tarixi daxil et","(məsələn 05.09.1999)");


ayIndex = ()=>{


  let aylar = {
    01: "Yanvar",
    02: "Fevral",
    03: "Mart",
    04: "Aprel",
    05: "May",
    06: "İyun",
    07: "İyul",
    08: "Avqust",
    09: "Sentyabr",
    10: "Oktyabr",
    11: "Noyabr",
    12: "Dekabr",
  };


  let index=tarix.split('.');
  let ay= parseInt(index[1]);

  
  if(ay<1 || ay>12){
    alert("Yanlış Daxil edilmiş məlumat");
  }else{
    alert(aylar[ay]);;
  }
 
}
ayIndex();




