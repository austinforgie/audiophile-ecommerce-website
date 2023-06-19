const FORMAT_CASE = (str: string, caseType: string): string => {
  const words = str.split(" ");

  const capitalize = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  switch (caseType) {
    case "start":
      return words.map((word) => capitalize(word)).join(" ");

    case "sentence":
      return words
        .map((word, index) => {
          if (index === 0) return capitalize(word);

          return word.toLowerCase();
        })
        .join(" ");

    default:
      return str;
  }
};

export default FORMAT_CASE;
