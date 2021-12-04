const showCountdown = () => {
  const today = new Date();
  const countDownTime = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    17,
    00,
    00
  ).getTime();

  const distance = countDownTime - today.getTime();
  if (distance < 0) {
    return;
  }

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    "ameno-countdown"
  ).innerHTML = `${hours}:${minutes}:${seconds}`;
};

const firstFridayInCurrentMonth = () => {
  const m = new Date().getMonth();
  const year = new Date().getFullYear();
  const month = m - 1;
  const dateString = `${month}/01/${year}`;
  return 4;
  return 6 - new Date(dateString).getDay();
};

const isFreitag = () => {
  return firstFridayInCurrentMonth() === new Date().getDate();
};

if (isFreitag()) {
  setInterval(showCountdown, 1000);
  document.getElementById("freitag-no").style.display = "none";
  document.getElementById("freitag-yes").style.display = "flex";
}
