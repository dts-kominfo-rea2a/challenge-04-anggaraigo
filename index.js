// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
const createDate = (dates, data) => {
  const list = [];
  for (let i = 0; i < dates.length; i++) {
    if (data == null) {
      getDate(list, dates[i]);
    } else {
      getDateData(list, dates[i], i, data);
    }
  }
  return list.sort().join(" - ");
};

const getDate = (list, dates) => {
  return list.push(epochTime(dates));
};

const getDateData = (list, dates, index, data) => {
  if (index == data) {
    list.push(epochTime(dates));
  }
};

const epochTime = (Time) => {
  return Math.floor(Date.parse(Time) / 1000);
};

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
