import Vue from 'vue';

Vue.filter('convertDate', function (value) {
  if (value) {
    const months = [
      'янв',
      'фев',
      'мар',
      'апр',
      'мая',
      'июн',
      'июл',
      'авг',
      'сен',
      'окт',
      'ноя',
      'дек',
    ];
    const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    const time = new Date(value);
    const date = time.getDate();
    const month = time.getMonth();
    const day = time.getDay();
    const dayName = days[day];
    const monthName = months[month];
    return `${date} ${monthName}, ${dayName}`;
  }
});
