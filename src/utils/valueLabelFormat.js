export const valueLabelFormat = (value) => {
  switch (value) {
    case 0:
      return "Least Importance";

    case 2:
      return "Very Weak Importance";

    case 4:
      return "Weak Importance";

    case 6:
      return "Moderately Less Importance";

    case 8:
      return "Equal Importance";

    case 10:
      return "Moderately High Importance";

    case 12:
      return "Strong Importance";

    case 14:
      return "Very Strong Importance";

    case 16:
      return "Extreme Importance";
    default:
      return "";
  }
};
