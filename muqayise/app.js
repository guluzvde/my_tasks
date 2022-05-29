let first=parseInt(prompt("Birinci ədədi daxil edin"))
let second=parseInt(prompt("İkinci ədədi daxil edin"))
if(first>second){
    alert(`Birinci (${first}) ədəd İkincidən (${second}) böyükdür`)
}
else if(first==second){
    alert("Ədədlər bərabərdir")
}
else{
    alert(`İkinci (${second}) ədəd Birincidən (${first}) böyükdür`)
}