//1. Write a JavaScript function to check whether an `input` is a date object or not.   
var is_date = function (input) {
    if (input instanceof Date) {
        return true;


    }
    else {
        return false;
    }



};
var arr1 = ['is_date("October 13, 2014 11:13:00")', 'is_date(new Date(86400000))', 'is_date(new Date(99,5,24,11,33,30,0))',
    'is_date([1, 2, 4, 0])'];

function example01() {

    document.getElementById("resulthead1").innerHTML = `Result of given dates : ${arr1.join()} `

    document.getElementById("result1").innerHTML = `${is_date("October 13, 2014 11:13:00")} <br/>  
          ${is_date(new Date(86400000))} <br/> ${is_date(new Date(99, 5, 24, 11, 33, 30, 0))} <br/>  
          ${is_date([1, 2, 4, 0])}`
}

//2. Write a JavaScript function to get the current date. 

// Note : Pass a separator as an argument.
// Test Data :
// console.log(curday('/'));
// console.log(curday('-'));
// Output :
// "11/13/2014"
// "11-13-2014"

var currday = function (input) {
    var date = new Date('nov 13  2014');
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //1 add due to january is at 0 and nov returns 10
    var yyyy = date.getFullYear();

    return (`${mm} ${input} ${dd} ${input} ${yyyy}`);


};
var arr2 = ['[nov 13 2014]'];
function example02() {
    document.getElementById("resulthead2").innerHTML = `Result of given currday : ${arr2.join()} `;

    document.getElementById("result2").innerHTML = `${currday('/')} <br/>  
            ${currday('-')}`;



};

// 3. Write a JavaScript function to get the number of days in a month.   

// Test Data :
// console.log(getDaysInMonth(1, 2012));
// console.log(getDaysInMonth(2, 2012));
// console.log(getDaysInMonth(9, 2012));
// console.log(getDaysInMonth(12, 2012));
// Output :
// 31
// 29
// 30
// 31
var arr3 = ['getDaysInMonth(1, 2012)', 'getDaysInMonth(2, 2012)',
    'getDaysInMonth(9, 2012)', 'getDaysInMonth(12, 2012)']
var getDaysInMonth = function (month, year) {

    return new Date(year, month, 0).getDate();

}

function example03() {

    document.getElementById("resulthead3").innerHTML = `Result of given currday : ${arr3.join()} `;

    document.getElementById("result3").innerHTML = `${getDaysInMonth(1, 2012)} <br/>  
            ${getDaysInMonth(2, 2012)} <br/> 
            ${getDaysInMonth(9, 2012)} <br/>
            ${getDaysInMonth(12, 2012)}`;


}


//    4. Write a JavaScript function to get the month name from a particular date.   
//     Test Data :
//     console.log(month_name(new Date("10/11/2009")));
//     console.log(month_name(new Date("11/13/2014")));
//     Output :
//     "October"
//     "November"
var month_array = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var arr4 = ['month_name(new Date("10/11/2009")', 'month_name(new Date("11/13/2014")'];
var month_name = function (input) {
    var newDate = new Date(input);
    var mm = newDate.getMonth();

    return month_array[mm];

}

function example04() {

    document.getElementById("resulthead4").innerHTML = `Result of given Date : ${arr4.join()} `;

    // console.log(month_name(new Date("10/11/2009")));
    // console.log(month_name(new Date("11/13/2014")));
    document.getElementById("result4").innerHTML = `${month_name(new Date("10/11/2009"))} <br/>  
            ${month_name(new Date("11/13/2014"))}`;


}

// 5. Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).   

// Test Data :
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
// Output :
// "Date1 = Date2"
// "Date1 > Date2"
// "Date2 > Date1"
var arr5 = ['compare_dates(new Date(11/14/2013 00:00), new Date(11/14/2013 00:00))', '(compare_dates(new Date(11/14/2013 00:01), new Date(11/14/2013 00:00))',
    'compare_dates(new Date(11/14/2013 00:00), new Date(11/14/2013 00:01))'];
var compare_dates = function (date1, date2) {
    if (date1 > date2) {
        return ("Date1 > Date2");
    }
    else if (date1 < date2) {
        return ("Date2 > Date1");
    }
    else {
        return ("Date1 = Date2");
    }
}
function example05() {
    document.getElementById("resulthead5").innerHTML = `Result of given Date : ${arr5.join()} `;

    document.getElementById("result5").innerHTML = `${compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'))} <br/>  
            ${compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'))} <br/>
            ${compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01'))}`;


}


// 6. Write a JavaScript function to add specified minutes to a Date object.   

// Test Data :
// console.log(add_minutes(new Date(2014,10,2), 30).toString());
// Output :
// "Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"
var arr6 = ['add_minutes(new Date(2014,10,2), 30).toString()'];

var add_minutes = function (date, minutes) {
    var newDate = new Date(date);


    return new Date(new Date(newDate.getTime() + minutes * 60000))//convert minutes to milliseconds

}


function example06() {



    document.getElementById("resulthead6").innerHTML = `Result of given Date : ${arr6.join()} `;


    document.getElementById("result6").innerHTML = `${add_minutes(new Date(2014, 10, 2), 30).toString()}`;


}

// 7. Write a JavaScript function to test whether a date is a weekend.   

// Note : Use standard Saturday/Sunday definition of a weekend.
// Test Data :
// console.log(is_weekend('Nov 15, 2014'));
// console.log(is_weekend('Nov 16, 2014'));
// console.log(is_weekend('Nov 17, 2014'));
// Output :
// "weekend"
// "weekend"
// undefined

var arr7 = ['is_weekend(Nov 15, 2014)', 'is_weekend(Nov 16, 2014)', 'is_weekend(Nov 17, 2014)'];

var is_weekend = function (input) {
    var newDate = new Date(input);

    var getDay = newDate.getDay();

    if (getDay == 6 || getDay == 0) {
        return 'weekend';

    }
    else {
        return 'undefined';
    }



}


function example07() {



    document.getElementById("resulthead7").innerHTML = `Result of given Date : ${arr7.join()} `;


    document.getElementById("result7").innerHTML = `${is_weekend('Nov 15, 2014')} <br/>
            ${is_weekend('Nov 16, 2014')} <br/>
            ${is_weekend('Nov 17, 2014')}`;


}


// 8. Write a JavaScript function to get difference between two dates in days.   

// Test Data :
// console.log(date_diff_indays('04/02/2014', '11/04/2014'));
// console.log(date_diff_indays('12/02/2014', '11/04/2014'));
// Output :
// 216
// -28
var arr8 = ['date_diff_indays(04/02/2014, 11/04/2014)', 'date_diff_indays(12/02/2014, 11/04/2014)'];
var date_diff_indays = function (date1, date2) {
    date1 = new Date(date1);
    date2 = new Date(date2);
    return ((date2 - date1) / (1000 * 60 * 60 * 24));

}

function example08() {



    document.getElementById("resulthead8").innerHTML = `Result of given Date : ${arr8.join()} `;


    document.getElementById("result8").innerHTML = `${date_diff_indays('04/02/2014', '11/04/2014')} <br/>
                    ${date_diff_indays('12/02/2014', '11/04/2014')} `;


}

// 9. Write a JavaScript function to get the last day of a month.   

// Test Data :
// console.log(lastday(2014,0));
// console.log(lastday(2014,1));
// console.log(lastday(2014,11));
// Output :
// 31
// 28
// 31
var arr9 = ['lastday(2014,0)', 'lastday(2014,1)', 'lastday(2014,11)'];

var lastday = function (year, mon) {
    return new Date(year, mon + 1, 0).getDate();
}


function example09() {



    document.getElementById("resulthead9").innerHTML = `Result of given Date : ${arr9.join()} `;


    document.getElementById("result9").innerHTML = `${lastday(2014, 0)} <br/>
                    ${lastday(2014, 1)} <br/> 
                    ${lastday(2014, 11)}`;


}
// 10. Write a JavaScript function to calculate 'yesterday day'.   

// Test Data :
// console.log(yesterday('Nov 15, 2014'));
// console.log(yesterday('Nov 16, 2015'));
// console.log(yesterday('Nov 17, 2016'));
// Output :
// "Fri Nov 14 2014 00:00:00 GMT+0530 (India Standard Time)"
// "Sun Nov 15 2015 00:00:00 GMT+0530 (India Standard Time)"
// "Wed Nov 16 2016 00:00:00 GMT+0530 (India Standard Time)"

var arr10 = ['(yesterday(Nov 15, 2014)', 'yesterday(Nov 16, 2015)', 'yesterday(Nov 17, 2016)'];
var yesterday = function (date1) {
    var dt = new Date(date1);
    return new Date(dt.setDate((dt.getDate() - 1)));
}
function example10() {



    document.getElementById("resulthead10").innerHTML = `Result of given Date : ${arr10.join()} `;


    document.getElementById("result10").innerHTML = `${yesterday('Nov 15, 2014')} <br/>
                    ${yesterday('Nov 16, 2015')} <br/> 
                    ${yesterday('Nov 17, 2016')}`;


}
// 11. Write a JavaScript function to get the maximum date from an array of dates.   

// Test Data :
// console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
// Output :
// "2015/02/02"

//var arr11 = ['max_date([2015/02/01, 2015/02/02, 2015/01/03])'];
var arr11 = ['2015/02/01', '2015/02/02', '2015/01/03'];

function parseDate(input) {

    var date = new Date(input);
    return date;



}
function max_date(inputArray) {
    var max_dt;
    var dateArray = parseDate(inputArray[0]);//consider the first Element to this array

    inputArray.forEach(function (date) {
        if (parseDate(date) > dateArray) {
            max_dt = date;

        }
    });
    return max_dt;
}

function example11() {


    document.getElementById("resulthead11").innerHTML = `Result of given Date : ${arr11.join()} `;
    document.getElementById("result11").innerHTML = `${max_date(['2015/02/01', '2015/02/02', '2015/01/03'])}`;


}

// 12. Write a JavaScript function to get the minimum date from an array of dates.   

// Test Data :
// console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
// Output :
// "2015/01/03"
var arr12 = ['2015/02/01', '2015/02/02', '2015/01/03'];


function min_date(inputArray) {
    var min_dt;
    var dateArray = parseDate(inputArray[0]);//consider the first Element to this array

    inputArray.forEach(function (date) {
        if (parseDate(date) < dateArray) {
            min_dt = date;

        }
    });
    return min_dt;
}

function example12() {


    document.getElementById("resulthead12").innerHTML = `Result of given Date : ${arr12.join()} `;
    document.getElementById("result12").innerHTML = `${min_date(['2015/02/01', '2015/02/02', '2015/01/03'])}`;


}


//     13. Write a JavaScript function that will return the number of minutes in hours and minutes.   
//     Test Data :
//     console.log(timeConvert(200));
//     Output :
//     "200 minutes = 3 hour(s) and 20 minute(s)."

function timeConvert(input) {
    var hours = Math.floor(input / 60);
    var minutes = input % 60;

    return `${hours} hours(s) and ${minutes} minute(s)`;

}

function example13() {


    document.getElementById("resulthead13").innerHTML = `Result : `;
    document.getElementById("result13").innerHTML = `${timeConvert(200)}`;


}

// 14. Write a JavaScript function to get the amount of days of a year.   

//     Test Data :
//     console.log(days_of_a_year(2015));
//     365
//     console.log(days_of_a_year(2016));
//     366
var arr14 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


function days_of_a_year(year) {
    var sumDays = 0;

    arr14.forEach(element => {

        var date = new Date(year, arr14[element] + 1, 0);
        date = date.getDate();


        sumDays = sumDays + date;






    })

    return sumDays;


}
function example14() {


    document.getElementById("resulthead14").innerHTML = `Result of given days (2015,2016) `;
    document.getElementById("result14").innerHTML = `${days_of_a_year(2015)} <br/>
                        ${days_of_a_year(2016)}`;


}
// 15. Write a JavaScript function to get the quarter (1 to 4) of the year.   

// Test Data :
// console.log(quarter_of_the_year(new Date(2015, 1, 21)));
// 2
// console.log(quarter_of_the_year(new Date(2015, 10, 18)));
// 4
var arr15 = ['quarter_of_the_year(new Date(2015, 1, 21))', 'quarter_of_the_year(new Date(2015, 10, 18))'];

function quarter_of_the_year(input) {
    var month = input.getMonth() + 1;
    month = (Math.ceil(month / 3));
    return month;
}

function example15() {


    document.getElementById("resulthead15").innerHTML = `Result : `;
    document.getElementById("result15").innerHTML = `${quarter_of_the_year(new Date(2015, 1, 21))} <br/>
                                ${quarter_of_the_year(new Date(2015, 10, 18))}`;


}


// 16. Write a JavaScript function to count the number of days passed since beginning of the year.   

// Test Data :
// console.log(days_passed(new Date(2015, 0, 15)));
// 15
// console.log(days_passed(new Date(2015, 11, 14)));
// 348
var arr16 = ['days_passed(new Date(2015, 0, 15))', 'days_passed(new Date(2015, 11, 14))'];
function getFirstMonth(input) {
    var year = new Date(input).getFullYear();

    var date = new Date(year, 0);

    return date;

}

function days_passed(input) {


    return ((input - getFirstMonth(input)) / (1000 * 60 * 60 * 24)) + 1;


}

function example16() {
    // console.log(days_passed(new Date(2015, 0, 15)));
    // console.log(days_passed(new Date(2015, 11, 14)));


    document.getElementById("resulthead16").innerHTML = `Result of given dates : ${arr16} `;
    document.getElementById("result16").innerHTML = `${days_passed(new Date(2015, 0, 15))} <br/>
                                  ${days_passed(new Date(2015, 11, 14))}`;


}

//17. Write a JavaScript function to convert a Unix timestamp to time.


function example17() {
    var input = document.getElementById("unixVal").value;

    date = new Date(input * 1000);

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    document.getElementById("resulthead17").innerHTML = `Result of given dates : ${input} `;
    document.getElementById("result17").innerHTML = `${hours}:${minutes}:${seconds}`;

    return true;

}
// 18. Write a JavaScript program to calculate age.   

// Test Data :
// console.log(calculate_age(new Date(1982, 11, 4)));
// 32
// console.log(calculate_age(new Date(1962, 1, 1)));
// 53
var arr18 = ['calculate_age(new Date(1982, 11, 4))', 'calculate_age(new Date(1962, 1, 1))'];
function calculate_age(input) {


    var today = new Date();
    var birthDate = new Date(input);
    var age = today.getFullYear() - birthDate.getFullYear();


    return age;


}
function example18() {
    document.getElementById("resulthead18").innerHTML = `Result of given dates : ${arr18} `;
    document.getElementById("result18").innerHTML = `${calculate_age(new Date(1982, 11, 4))} <br/>
                                ${calculate_age(new Date(1962, 1, 1))}`;

    // console.log(calculate_age(new Date(1982, 11, 4)));
    // console.log(calculate_age(new Date(1962, 1, 1)));
}

// 19. Write a JavaScript function to get the day of the month, 2 digits with leading zeros.   
// Test Data :
// d= new Date(2015, 10, 1);
// console.log(day_of_the_month(d));
// "01"
function day_of_the_month(input) {
    var day = input.getDay() + 1;
    if (day < 9 && day > 0) {
        return `0${day}`;
    }
    else {
        return day;
    }

}
function example19() {
    var d = new Date(2015, 10, 1);


    document.getElementById("resulthead19").innerHTML = `Result of given Date (25,10,1)`;
    document.getElementById("result19").innerHTML = `${day_of_the_month(new Date(2015, 10, 1))}`;


}
// 20. Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun).   
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(short_Days(dt));
// "Sun"

var dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function short_Days(input) {
    var day = input.getDay();

    return dayArray[day];

}
function example20() {
    var dt = new Date(2015, 10, 1);

    document.getElementById("resulthead20").innerHTML = `Result of given Date (25,10,1)`;
    document.getElementById("result20").innerHTML = `${short_Days(dt)}`;


}

// 21. Write a JavaScript function to get a full textual representation of the day of the week (Sunday through Saturday).   
//     Test Data :
//     dt = new Date(2015, 10, 1);
//     console.log(long_Days(dt));
//     "Sunday"

var dayArray2 = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];

function long_Days(input) {
    var day = input.getDay();

    return dayArray2[day];

}
function example21() {
    var dt = new Date(2015, 10, 1);

    document.getElementById("resulthead21").innerHTML = `Result of given Date (25,10,1)`;
    document.getElementById("result21").innerHTML = `${long_Days(dt)}`;


}
// 22. Write a JavaScript function to get ISO-8601 numeric representation of the day of the week (1 (for Monday) to 7 (for Sunday)).   
//         Test Data :
//         dt = new Date(2015, 10, 1);
//         console.log(ISO_numeric_date(dt));
//         7


function ISO_numeric_date(input) {

    var day = input.getDay();
    return (day === 0 ? 7 : day);

}

function example22() {
    var dt = new Date(2015, 10, 1);

    document.getElementById("resulthead22").innerHTML = `Result of given Date (25,10,1)`;
    document.getElementById("result22").innerHTML = `${ISO_numeric_date(dt)}`;


}
//   23. Write a JavaScript function to get English ordinal suffix for the day of the month, 2 characters (st, nd, rd or th.).   
//     Test Data :
//         dt = new Date(2015, 10, 1);
//         console.log(english_ordinal_suffix(dt));
//         "1st"

function english_ordinal_suffix(input) {
    var weekday = input.getDay() + 1;


    if (weekday === 1) {
        return '1st';

    }
    else if (weekday === 2) {
        return '2nd';

    }
    else if (weekday === 3) {
        return '3rd';

    }
    else {
        return `${weekday}th`;
    }

}
function example23() {
    var dt = new Date(2015, 10, 8);

    document.getElementById("resulthead23").innerHTML = `Result of given Date (25,10,1)`;
    document.getElementById("result23").innerHTML = `${english_ordinal_suffix(dt)}`;


}


// 24. Write a JavaScript function to get ISO-8601 week number of year, weeks starting on Monday.   
// Example : 42 (the 42nd week in the year)
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(ISO8601_week_no(dt));
// 44
function ISO8601_week_no(input) {

    var yearStartDate = new Date(input.getFullYear(), 0, 1);
    var weekNumber = Math.floor(input - yearStartDate) / (86400000);// miliseconds convert into days 
    weekNumber = Math.ceil((input.getDate() + 1 + weekNumber) / 7);// add 1 for Monday

    return weekNumber;


}


function example24() {
    var dt = new Date(2015, 10, 1);

    document.getElementById("resulthead24").innerHTML = `Result of given Date (25,10,1)`;
    document.getElementById("result24").innerHTML = `${ISO8601_week_no(dt)}`;


}

// 25. Write a JavaScript function to get a full textual representation of a month, such as January or June.   
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(full_month(dt));
// "November"
var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function full_month(input) {
    var month = input.getMonth();

    return monthArray[month];

}

function example25() {
    var dt = new Date(2015, 10, 1);

    document.getElementById("resulthead25").innerHTML = `Result of given Date (25,10,1)`;
    document.getElementById("result25").innerHTML = `${full_month(dt)}`;


}

// 26. Write a JavaScript function to get a numeric representation of a month, with leading zeros (01 through 12).   
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(numeric_month(dt));
// "11"

function numeric_month(input) {
    var month = input.getMonth() + 1;
    if (month < 10) {
        return `0${month}`
    }
    else {
        return month;
    }

}
function example26() {
    var dt = new Date(2015, 10, 1);

    document.getElementById("resulthead26").innerHTML = `Result of given Date (25,10,1)`;
    document.getElementById("result26").innerHTML = `${numeric_month(dt)}`;


}
// 27. Write a JavaScript function to get a short textual representation of a month, three letters (Jan through Dec).   
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(short_months(dt));
// "Nov"

var monthArray2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function short_months(input) {
    var month = input.getMonth();

    return monthArray2[month];
}

function example27() {
    var dt = new Date(2015, 10, 1);

    document.getElementById("resulthead27").innerHTML = `Result of given Date (25,10,1)`;
    document.getElementById("result27").innerHTML = `${short_months(dt)}`;


}

// 28. Write a JavaScript function to get a full numeric representation of a year (4 digits).   
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(full_year(dt));
// 2015
function full_year(input) {

    year = input.getFullYear();

    return year;

}

function example28() {
    var dt = new Date(2015, 10, 1);

    document.getElementById("resulthead28").innerHTML = `Result of given Date (25,10,1)`;
    document.getElementById("result28").innerHTML = `${full_year(dt)}`;


}

// 29. Write a JavaScript function to get a two digit representation of a year.   
// Examples : 79 or 04
// Test Data :
// dt = new Date(1989, 10, 1);
// console.log(sort_year(dt));
// "89"
function sort_year(input) {
    input = input.getFullYear().toString().substring(2);
    return input;
}

function example29() {
    var dt = new Date(1989, 10, 1);

    document.getElementById("resulthead29").innerHTML = `Result of given Date (1989, 10, 1)`;
    document.getElementById("result29").innerHTML = `${sort_year(dt)}`;


}

//30. Write a JavaScript function to get lowercase Ante meridiem and Post meridiem.

function getLowerAnte() {
    var date = new Date();
    return date.getHours() < 12 ? 'am' : 'pm';


}

function example30() {
    document.getElementById("resulthead30").innerHTML = `Result of Lower AM/PM :`;
    document.getElementById("result30").innerHTML = `${getLowerAnte()}`;
}
//31. Write a JavaScript function to get uppercase Ante meridiem and Post meridiem.   

function getUpperAnte() {
    var date = new Date();
    return date.getHours() < 12 ? 'AM' : 'PM';


}

function example31() {
    document.getElementById("resulthead31").innerHTML = `Result of Upper AM/PM :`;
    document.getElementById("result31").innerHTML = `${getUpperAnte()}`;
}

// 32. Write a JavaScript function to swatch Internet time (000 through 999).   
// Test Data :
// dt = new Date(1989, 10, 1);
// console.log(internet_time(dt));
// 812



function internet_time(dt) {
    return Math.floor((((dt.getUTCHours() + 1) % 24) + dt.getUTCMinutes() / 60 + dt.getUTCSeconds() / 3600) * 1000 / 24);

}


function example32() {
    dt = new Date(1989, 10, 1);
    document.getElementById("resulthead32").innerHTML = `Result :`;
    document.getElementById("result32").innerHTML = `${internet_time(dt)}`;

}
// 33. Write a JavaScript function to get 12-hour format of an hour with leading zeros.   
// Test Data :
// dt = new Date(1989, 10, 1);
// console.log(hours_with_zeroes(dt));
// "12"
function hours_with_zeroes(input) {

    return ((input.getHours() % 12 || 12) < 10 ? '0' : '') + (input.getHours() % 12 || 12)


}

function example33() {
    dt = new Date(1989, 10, 1);


    document.getElementById("resulthead33").innerHTML = `Result :`;
    document.getElementById("result33").innerHTML = `${hours_with_zeroes(dt)}`;

}

// 34. Write a JavaScript function to get 24-hour format of an hour without leading zeros.   
//     Test Data :
//     dt = new Date(1989, 10, 1);
//     console.log(hours_without_zeroes(dt));
//     0

function hours_without_zeroes(input) {

    //return ((input.getHours()%12||12) < 10 ? '0' : '')+ (input.getHours()%12||12)
    return input.getHours() % 24;

}

function example34() {
    dt = new Date(1989, 10, 1);


    document.getElementById("resulthead34").innerHTML = `Result :`;
    document.getElementById("result34").innerHTML = `${hours_without_zeroes(dt)}`;

}

// 35. Write a JavaScript function to get minutes with leading zeros (00 to 59).   
// Test Data :
// dt = new Date(1989, 10, 1);
// console.log(minutes_with_leading_zeros(dt));
// "00"
function minutes_with_leading_zeros(input) {


    return ((input.getMinutes() < 10 ? '0' : '') + input.getMinutes());

}

function example35() {
    dt = new Date(1989, 10, 1);


    document.getElementById("resulthead35").innerHTML = `Result :`;
    document.getElementById("result35").innerHTML = `${minutes_with_leading_zeros(dt)}`;

}

// 36. Write a JavaScript function to get seconds with leading zeros (00 through 59).   
//     Test Data :
//     dt = new Date(1989, 10, 1);
//     console.log(seconds_with_leading_zeros(dt));
//     "00"

function seconds_with_leading_zeros(input) {


    return ((input.getSeconds() < 10 ? '0' : '') + input.getSeconds());

}

function example36() {
    dt = new Date(1989, 10, 1);


    document.getElementById("resulthead36").innerHTML = `Result :`;
    document.getElementById("result36").innerHTML = `${seconds_with_leading_zeros(dt)}`;

}

// 37. Write a JavaScript function to get Timezone.   
// Test Data :
// dt = new Date();
// console.log(seconds_with_leading_zeros(dt));
// "India Standard Time"

function getTimeZone(input) {


    return /\((.*)\)/.exec(input.toString())[0];

}

function example37() {
    dt = new Date();



    document.getElementById("resulthead37").innerHTML = `Result :`;
    document.getElementById("result37").innerHTML = `${getTimeZone(dt)}`;

}

// 39. Write a JavaScript function to get difference to Greenwich time (GMT) in hours.   
// Test Data :
// dt = new Date();
// console.log(diff_to_GMT(dt));
// "+05.500"


function diff_to_GMT(dt) {
    return (-1 * dt.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(dt.getTimezoneOffset() / 60) < 10 ? '0' : '') +
        (Math.abs(dt.getTimezoneOffset() / 60)) + '00';
}
function example39() {
    dt = new Date();



    document.getElementById("resulthead39").innerHTML = `Result :`;
    document.getElementById("result39").innerHTML = `${diff_to_GMT(dt)}`;

}

// 40. Write a JavaScript function to get timezone offset in seconds.   
// Note : The offset for timezones west of UTC is always negative, and for those east of UTC is always positive.
// Test Data :
// dt = new Date();
// console.log(timezone_offset_in_seconds(dt));
// 19800


function timezone_offset_in_seconds(input) {


    return Math.abs(input.getTimezoneOffset() * 60);

}

function example40() {
    dt = new Date();



    document.getElementById("resulthead40").innerHTML = `Result :`;
    document.getElementById("result40").innerHTML = `${timezone_offset_in_seconds(dt)}`;

}
// 41. Write a JavaScript function to add specified years to a date.
// Test Data :
// dt = new Date(2014,10,2);
// console.log(add_years(dt, 10).toString());
// Output :
// "Sat Nov 02 2024 00:00:00 GMT+0530 (India Standard Time)"
function add_years(input,addYear) {
    var year = input.getFullYear();
    year = year + addYear;
    var mon =  input.getMonth();
    var dd =   input.getDate();

    return (new Date(year,mon,dd));


     
}

function example41() {
    dt = new Date(2014,10,2);
     


    document.getElementById("resulthead41").innerHTML = `Result :`;
    document.getElementById("result41").innerHTML = `${add_years(dt, 10).toString()}`;

}
// 42. Write a JavaScript function to add specified weeks to a date.   
// Test Data :
// dt = new Date(2014,10,2);
// console.log(add_weeks(dt, 10).toString());
// Output :
// "Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)"

function add_weeks(input,addWeek) {
     var addDays = new Date(input.setDate(input.getDate()+(addWeek * 7)));

    return ( addDays);


     
}

function example42() {
    dt = new Date(2014,10,2);
     


    document.getElementById("resulthead42").innerHTML = `Result :`;
    document.getElementById("result42").innerHTML = `${add_weeks(dt, 10).toString()}`;

}

// 43. Write a JavaScript function to add specified months to a date.   
// Test Data :
// dt = new Date(2014,10,2);
// console.log(add_months(dt, 10).toString());
// Output :
// "Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)"
function add_months(input,addMonth) {
    var addDays = new Date(input.setMonth(input.getMonth()+(addMonth)));

   return ( addDays);


    
}

function example43() 
{
   dt = new Date(2014,10,2);
   
   document.getElementById("resulthead43").innerHTML = `Result :`;
   document.getElementById("result43").innerHTML = `${add_months(dt, 10).toString()}`;

}

// 44. Write a JavaScript function to get time differences in minutes between two dates.   
// Test Data :
// dt1 = new Date("October 13, 2014 11:11:00");
// dt2 = new Date("October 13, 2014 11:13:00");
// console.log(diff_minutes(dt1, dt2));
// 2

function diff_minutes(dt1,dt2) 
{
     var getDate1Hours=dt1.getMinutes();
     var getDate2Hours = dt2.getMinutes();  
      
     return getDate2Hours - getDate1Hours;

    
}

function example44() 
{
    dt1 = new Date("October 13, 2014 11:11:00");
    dt2 = new Date("October 13, 2014 11:13:00");
   
   document.getElementById("resulthead44").innerHTML = `Result :`;
   document.getElementById("result44").innerHTML = `${diff_minutes(dt1, dt2)}`;

}
// 45. Write a JavaScript function to get time differences in hours between two dates.   
// Test Data :
// dt1 = new Date("October 13, 2014 08:11:00");
// dt2 = new Date("October 13, 2014 11:13:00");
// console.log(diff_hours(dt1, dt2));
// 3
function diff_hours(dt1,dt2) 
{
     var getDate1Hours=dt1.getHours();
     var getDate2Hours = dt2.getHours();  
      
     return getDate2Hours - getDate1Hours;

    
}

function example45() 
{
    dt1 = new Date("October 13, 2014 08:11:00");
    dt2 = new Date("October 13, 2014 11:13:00");
   
   document.getElementById("resulthead45").innerHTML = `Result :`;
   document.getElementById("result45").innerHTML = `${diff_hours(dt1, dt2)}`;

}
// 46. Write a JavaScript function to get time differences in days between two dates.   
// Test Data :
// dt1 = new Date("October 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2014 11:13:00");
// console.log(diff_days(dt1, dt2));
// 6

function diff_days(dt1,dt2) 
{
     var d1=dt1.getDate();
     var d2 = dt2.getDate();  
      
     return d2 - d1;

    
}

function example46() 
{
   dt1 = new Date("October 13, 2014 08:11:00");
   dt2 = new Date("October 19, 2014 11:13:00");
   document.getElementById("resulthead46").innerHTML = `Result :`;
   document.getElementById("result46").innerHTML = `${diff_days(dt1, dt2)}`;

}
// 47. Write a JavaScript function to get time differences in weeks between two dates.   
// Test Data :
// dt1 = new Date("June 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2014 11:13:00");
// console.log(diff_weeks(dt1, dt2));
// 18

function diff_weeks(dt1,dt2) 
{
       var diff =(dt2.getTime() - dt1.getTime()) / 1000;
       diff = diff /(60 * 60 * 24 * 7);
        return Math.floor(diff);
    
}

function example47() 
{
        dt1 = new Date("June 13, 2014 08:11:00");
        dt2 = new Date("October 19, 2014 11:13:00");
        document.getElementById("resulthead47").innerHTML = `Result :`;
        document.getElementById("result47").innerHTML = `${diff_weeks(dt1, dt2)}`;

}

// 48. Write a JavaScript function to get time differences in months between two dates.   
// Test Data :
// dt1 = new Date("June 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2014 11:13:00");
// console.log(diff_months(dt1, dt2));
// 5
function diff_months(dt1,dt2) 
{
       var diff =(dt2.getTime() - dt1.getTime()) / 1000;
       diff = diff /(60 * 60 * 24 * 7 * 4);
        return Math.round(diff);
    
}

function example48() 
{
         dt1 = new Date("June 13, 2014 08:11:00");
        dt2 = new Date("October 19, 2014 11:13:00");
        document.getElementById("resulthead48").innerHTML = `Result :`;
        document.getElementById("result48").innerHTML = `${diff_months(dt1, dt2)}`;

}
// 49. Write a JavaScript function to get time differences in years between two dates.   
// Test Data :
// dt1 = new Date("June 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2017 11:13:00");
// console.log(diff_years(dt1, dt2));
// 3
function diff_years(dt1,dt2) 
{
   
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
       diff = diff /(60 * 60 * 24 * 7 * 4*12);
        return Math.floor(diff);
    
}

function example49() 
{
         dt1 = new Date("June 13, 2014 08:11:00");
        dt2 = new Date("October 19, 2017 11:13:00");
        document.getElementById("resulthead49").innerHTML = `Result :`;
        document.getElementById("result49").innerHTML = `${diff_years(dt1, dt2)}`;

}
// 50. Write a JavaScript function to get the week start date. 
function example50() 
{
var currentDate = new Date();
var firstday = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));

document.getElementById("resulthead50").innerHTML = `Result :`;
        document.getElementById("result50").innerHTML = `${firstday}`;
}
// 51. Write a JavaScript function to get the week end date.


function example51() 
{
var currentDate = new Date();
var lastday = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 7));

document.getElementById("resulthead51").innerHTML = `Result :`;
        document.getElementById("result51").innerHTML = `${lastday}`;
}

// 52. Write a JavaScript function to get the month start date.
function example52() 
{
        var year = new Date().getFullYear();
        var mon =  new Date().getMonth();
        var startDate =  (new Date(year,mon,1));
        


document.getElementById("resulthead52").innerHTML = `Result :`;
        document.getElementById("result52").innerHTML = `${startDate}`;
}

// 53. Write a JavaScript function to get the month end date
function example53() 
{
        var year = new Date().getFullYear();
        var mon =  new Date().getMonth();
        var startDate =  (new Date(year,mon,0));
        


document.getElementById("resulthead53").innerHTML = `Result :`;
        document.getElementById("result53").innerHTML = `${startDate}`;
}