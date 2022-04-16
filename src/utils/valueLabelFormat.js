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

export const formatData = (value) => {
  switch (value) {
    case 0:
      return 1 / 9;
    case 1:
      return 1 / 8;
    case 2:
      return 1 / 7;
    case 3:
      return 1 / 6;
    case 4:
      return 1 / 5;
    case 5:
      return 1 / 4;
    case 6:
      return 1 / 3;
    case 7:
      return 1 / 2;
    case 8:
      return 1;
    case 9:
      return 2;
    case 10:
      return 3;
    case 11:
      return 4;
    case 12:
      return 5;
    case 13:
      return 6;
    case 14:
      return 7;
    case 15:
      return 8;
    case 16:
      return 9;
  }
};
