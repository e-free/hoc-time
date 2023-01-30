import GetNoun from "./GetNoun";

function DateTimePrettyChanger(date) {
  let prettyTimetoText, diffDays, diffHrs;
  let today = new Date();
  let publishDate = new Date(String(date));
  let diffMinuts = Math.round((today.getTime() - publishDate.getTime()) / (1000 * 60));

  if (diffMinuts < 60) {
    prettyTimetoText = diffMinuts + GetNoun(diffMinuts, " минута", " минуты", " минут");
  }
  else if (diffMinuts < 60 * 24) {
    diffHrs = diffMinuts / 60
    prettyTimetoText = diffHrs + GetNoun(diffHrs, " час", " часа", " часов");
  }
  else if (diffMinuts >= 60 * 24) {
    diffDays = Math.round(diffMinuts / 60 / 24);
    prettyTimetoText = diffDays + GetNoun(diffDays, " день", " дня", " дней");
  }

  return <>
    {prettyTimetoText + " назад"}
  </>
}

export default DateTimePrettyChanger