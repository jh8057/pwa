//money
export default () => {
  const makeKoreaMoneyFormat = (num: number | bigint) => {
    let formatter = new Intl.NumberFormat("kr", {
      style: "currency",
      currency: "KRW",
    });
    return formatter.format(num);
  };

  const getNowDate = () => {
    const date = new Date();
    let formatterDate = new Intl.DateTimeFormat("kr", {
      dateStyle: "full",
      timeStyle: "short",
    });
    return formatterDate.format(date);
  };

  const getDiffDate = (nowDate: number) => {
    const rtf1 = new Intl.RelativeTimeFormat("en", { style: "long" });
    console.log(rtf1.format(nowDate, "day"));
  };

  return {
    makeKoreaMoneyFormat,
    getNowDate,
    getDiffDate,
  };
};
//timeago module
// let timeago = require("timeago.js");
// let timeDiff1 = timeago.format("2022-08-22", "en");
// let timeDiff2 = timeago.format(Date.now() - 2 * 1000 * 60 * 60, "en");
// console.log("timeDiff : ", timeDiff1, "/", timeDiff2);

// Intl
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

// timeago.js
// https://github.com/hustcc/timeago.js/blob/master/README.md
