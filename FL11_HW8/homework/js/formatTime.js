function formatTime(minutes) {
  const minutesInDay = 1440;
  const minutesInHour = 60;
  let days = Math.trunc(minutes / minutesInDay);
  let hours = Math.trunc((minutes % minutesInDay) / minutesInHour)
  let mins = minutes % minutesInHour;

  return '' + days + ' day(s) ' + hours +' hour(s) ' + mins + ' minute(s)';
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(1441));