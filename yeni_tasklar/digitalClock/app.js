const clockFunc = () => {
  const current = new Date();
  let currentDay = current.getDay();
  let h = current.getHours();
  let m = current.getMinutes();
  let s = current.getSeconds();

  if (h < 10) {
    hours.textContent = `0${h}`;
  } else {
    hours.textContent = `${h}`;
  }

  if (m < 10) {
    minutes.textContent = `0${m}`;
  } else {
    minutes.textContent = `${m}`;
  }

  if (s < 10) {
    seconds.textContent = `0${s}`;
  } else {
    seconds.textContent = `${s}`;
  }
  const gun =document.querySelector(".gun");
  const tarix = document.querySelector(".tarix")
  tarix.textContent = current.toLocaleDateString();
  gun.textContent = getDayName(currentDay);
};
const getDayName = (gun) =>{
    const DayNames = [
        'Bazar',
        'Bazar Ertəsi',
        'Çərşənbə Axşamı',
        'Çərşənbə',
        'Cümə Axşamı',
        'Cümə',
        'Şənbə'
    ]
    return DayNames[gun];
}
setInterval(clockFunc, 1000);
