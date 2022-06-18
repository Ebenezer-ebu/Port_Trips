export const formatDate = (dat: string) => {
  const date = new Date(dat);
  // Day,Time
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = date.getMonth() + 1; // month
  const dt = date.getDate(); // date
  const time = date.getHours();
  const mins = date.getMinutes();
  const day = date.getDay();
  let timeOfDay = Number(time) < 12 ? "AM" : "PM";
  const obj = {
    day: `${days[6]}, ${dt} ${months[month]}`,
    time: time + ":" + mins + "0" + timeOfDay,
  };
  return obj;
};
