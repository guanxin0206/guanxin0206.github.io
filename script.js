const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const dd = String(today.getDate()).padStart(2, '0');
const formattedDate = `${yyyy}-${mm}-${dd}`;

document.getElementById('today').innerText = formattedDate;

function getDaysSinceBirthday() {
  const birthday = new Date(1990, 1, 6); // 月份是从0开始的，1代表2月
  const today = new Date();

  // 只保留年月日，忽略时间部分
  birthday.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = today - birthday;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  document.getElementById('days').innerText = `${diffDays} 天`;
}

getDaysSinceBirthday();
