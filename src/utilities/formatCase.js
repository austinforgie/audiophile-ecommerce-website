const FORMAT_CASE = (string, type) => {
  if (type === "start") {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  } else if (type === "sentence") {
    return string
      .split(" ")
      .map((word, index) => {
        if (index === 0) return word.charAt(0).toUpperCase() + word.slice(1);

        return word.toLowerCase();
      })
      .join(" ");
  }
};

export default FORMAT_CASE;
