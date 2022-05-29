let first=parseInt(prompt("1-ci ədədi daxil edin"))
let second=parseInt(prompt("2-ci ədədi daxil edin"))
let third=parseInt(prompt("3-cü ədədi daxil edin"))

if(first>second && first>third){
    alert(`Ən böyük ədəd ${first}`)
}
else if(second>first && second>third){
    alert(`Ən böyük ədəd ${second}`)
    
}
else if(third>first && third>second){
    alert(`Ən böyük ədəd ${third}`)

}
else if(first==second && first>third){
    alert(`Birinci və ikinci ədəd bir-birinə bərabərdir\nƏn böyük ədəd ${first}`)

}
else if(second==third && first<third){
    alert(`İkinci və üçüncü ədəd bir-birinə bərabərdir\nƏn böyük ədəd ${second}`)

}
else if(first==third && first>second){
    alert(`Birinci və üçüncü ədəd bir-birinə bərabərdir\nƏn böyük ədəd ${first}`)

}
else if(first===second && first===third){
    alert(`Bütün ədədlər bərabərdir\nƏn böyük ədəd ${first}`)

}
else{
    alert("Yanlış məlumat")
}