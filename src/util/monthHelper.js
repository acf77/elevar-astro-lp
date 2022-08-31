export const monthHelper = (date) => {
  const stringMonth = (month) => {
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";

      default:
        return "Month";
    }
  };
  if (date !== null || undefined) {
    const month = new Date(date).getUTCMonth() + 1;
    return stringMonth(month);
  }
};

export const yearHelper = (date) => {
  if (date === null || undefined) {
    return "current";
  } else {
    new Date(date).getFullYear();
  }
};

export const dayHelper = (date) => {
  const day = new Date(date).getUTCDay();

  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 0:
      return "Sunday";

    default:
      return "Month";
  }
};
