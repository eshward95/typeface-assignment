const generateUniqueId = () => "id" + new Date().getTime();

const getHumanReadableTime = (date) => {
  try {
    date = date ? new Date(date) : new Date().getTime();
    const options = { year: "2-digit", month: "2-digit", day: "2-digit" };
    const format = "en-GB";
    return `${date.toLocaleTimeString(format)} ${date.toLocaleDateString(
      format,
      options
    )}`;
  } catch (err) {
    return "";
  }
};

export { generateUniqueId, getHumanReadableTime };
