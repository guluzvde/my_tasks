var buGun = new Date();
var dunen = new Date(buGun.setDate(buGun.getDate() - 1));
alert(`Dünən ${dunen.getDate()}.${dunen.getMonth()}.${dunen.getFullYear()}-ci il idi`);
