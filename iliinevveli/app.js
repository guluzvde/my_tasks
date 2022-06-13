let ilinEvveli = new Date('01/01/2022')
let cariTarix= new Date();
const days = (ilinEvveli, cariTarix)=>{
    let ferq=cariTarix.getTime()-ilinEvveli.getTime();
    let umumiGun=Math.ceil(ferq/86400000);
    return umumiGun;
}
alert(`Bu gün ilin ${days(ilinEvveli,cariTarix)}-cü günüdür`);