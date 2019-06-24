// DATE METHOD



 // display month

 displayMonth: function () {
    var now, year, month, months;

    now = new Date();
    //var christmas = new Date(2016, 11, 25)

    year = now.getFullYear();

    months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Septmeber",
      "October",
      "November",
      "December"
    ];
    month = now.getMonth();

    document.querySelector(DOMStrings.dateLabel).textContent =
      months[month] + " " + year;
  }


