const tarix = new Date();
let gun = () => {
  let day = tarix.getDate();
  return day;
};
let ay = () => {
  let month = tarix.getMonth();
  return month;
};
let il = () => {
  let year = tarix.getFullYear();
  return year;
};
let saat = () => {
  let hours = tarix.getHours();
  return hours;
};
let deq = () => {
  let mins = tarix.getMinutes();
  return mins;
};

const aylar = {
  0: "Yanvar",
  1: "Fevral",
  2: "Mart",
  3: "Aprel",
  4: "May",
  5: "İyun",
  6: "İyul",
  7: "Avqust",
  8: "Sentyabr",
  9: "Oktyabr",
  10: "Noyabr",
  11: "Dekabr",
};

alert(`Hal-hazırda: ${gun()} ${aylar[ay()]} ${il()}-ci il saat ${saat()}:${deq()}`);
