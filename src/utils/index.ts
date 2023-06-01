export const timeFormart = () => {
  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();

  return (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min);
};
