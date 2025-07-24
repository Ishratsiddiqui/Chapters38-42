//chapters38-42
// question 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.
//-----------------------------------//

  function power(a, b) {
    return a ** b;
}

console.log(power(2, 3)); 
console.log(power(5, 0)); 
console.log(power(4, -2)); 

//----------------------------//
// question 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not. 
// Leap years ..., 2012, 2016, 2020, …
//--------------------------------//

 function isLeapYear(year) {
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        return true;
    } else {
        return false;
    }
}
  var input = prompt("Enter a year:");
 var year = parseInt(input);

 if (isNaN(year)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    if (isLeapYear(year)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}


//---------------------------------------//
//question 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by 
// area = S(S − a)(S − b)(S − c) 
// where, S = ( a + b + c ) / 2
//Calculate area of triangle using 2 functions 
//-------------------------//

 function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}

 function calculateTriangleArea(a, b, c) {
    const S = calculateSemiPerimeter(a, b, c);
    const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}

 const a = 5;
 const b = 6;
 const c = 7;

console.log("Semi-perimeter S:", calculateSemiPerimeter(a, b, c));
console.log("Area of triangle:", calculateTriangleArea(a, b, c));


//--------------------------//
//question 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these 
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction. 
//------------------------------//

   
 function calculateAverage(mark1, mark2, mark3) {
    return (mark1 + mark2 + mark3) / 3;
}

 function calculatePercentage(mark1, mark2, mark3, totalMarksPerSubject) {
    const totalMarksObtained = mark1 + mark2 + mark3;
    const totalMarks = totalMarksPerSubject * 3;
    return (totalMarksObtained / totalMarks) * 100;
}

 function mainFunction() {
    const mark1 = 85;
    const mark2 = 90;
    const mark3 = 78;
    const totalMarksPerSubject = 100; 

       const average = calculateAverage(mark1, mark2, mark3);
     const percentage = calculatePercentage(mark1, mark2, mark3, totalMarksPerSubject);

        console.log("Average Marks:", average.toFixed(2));
    console.log("Percentage:", percentage.toFixed(2) + "%");
}
  mainFunction();


//-------------//
//   question 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now. 
//---------------------------------------//

  function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i; 
        }
    }
    return -1; 
}
  const string = "Hello, world!";
  const characterToFind = "o";

 const index = customIndexOf(string, characterToFind);
 console.log("Index of character:", index);

 //------------------------------------//
//  question 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.
//------------------------------------//

   function deleteVowels(sentence) {
    
    const vowels = "aeiouAEIOU";
    var result = "";

    for (var i = 0; i < sentence.length; i++) {
       
        if (!vowels.includes(sentence[i])) {
            result += sentence[i];
        }
    }

    return result;
}

 const sentence = "This is a sample sentence.";
 const sentenceWithoutVowels = deleteVowels(sentence);
 console.log(sentenceWithoutVowels);


 //------------------------//
//  question 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence
//----------------------------------//

 function countConsecutiveVowels(text) {
   text = text.toLowerCase();
  var vowelCount = 0;
  const vowels = "aeiou"; 

  for (var i = 0; i < text.length - 1; i++) {
    const char1 = text[i];
    const char2 = text[i + 1];

    if (vowels.includes(char1) && vowels.includes(char2)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

const text = "Pleases read this application and give me gratuity";
const vowelOccurrences = countConsecutiveVowels(text);
console.log(`Number of consecutive vowel pairs: ${vowelOccurrences}`); 

const text2 = "GrEAt ExAmPlE";
const vowelOccurrences2 = countConsecutiveVowels(text2);
console.log(`Number of consecutive vowel pairs: ${vowelOccurrences2}`); 

const text3 = "Hello world!";
const vowelOccurrences3 = countConsecutiveVowels(text3);
console.log(`Number of consecutive vowel pairs: ${vowelOccurrences3}`); 




//-------------------------------------------//
//   question 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.
//--------------------------------------//

 function convertToMeters(distanceKm) {
  const meters = distanceKm * 1000;
  console.log(`Distance in meters: ${meters} m`);
}


 function convertToFeet(distanceKm) {
  const feet = distanceKm * 3280.84;
  console.log(`Distance in feet: ${feet} ft`);
}


 function convertToInches(distanceKm) {
  const inches = distanceKm * 39370.1;
  console.log(`Distance in inches: ${inches} inches`);
}

 function convertToCentimeters(distanceKm) {
  const centimeters = distanceKm * 100000;
  console.log(`Distance in centimeters: ${centimeters} cm`);
}

  const distanceInKm = parseFloat(prompt("Enter the distance between two cities in km:"));
 convertToMeters(distanceInKm);
 convertToFeet(distanceInKm);
 convertToInches(distanceInKm);
 convertToCentimeters(distanceInKm);

//---------------------------------------//
// question 9. Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour.
//-------------------------------------------//

   
 function calculateOvertimePay(hoursWorked) {
  const standardHours = 40;
  const overtimeRate = 12.0;

  if (hoursWorked <= standardHours) {
    return 0; 
  } else {
    const overtimeHours = hoursWorked - standardHours;
    const overtimePay = overtimeHours * overtimeRate;
    return overtimePay;
  }
}

 const hoursWorked = parseInt(prompt("Enter the total hours worked by the employee:"));
 const overtimePay = calculateOvertimePay(hoursWorked);
console.log(`Overtime pay: Rs. ${overtimePay.toFixed(2)}`);


//------------------------------------------------------------------------//
// question 10. A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer. 
//--------------------------------------//

    
   
function calculateCurrencyNotes(amountInHundreds) {
  var amount = amountInHundreds * 100;
  const notes100 = Math.floor(amount / 100);
  amount %= 100;

  const notes50 = Math.floor(amount / 50);
  amount %= 50;

  const notes10 = Math.floor(amount / 10);

  return {
    hundredNotes: notes100,
    fiftyNotes: notes50,
    tenNotes: notes10
  };
}

 const amountInHundreds = parseInt(prompt("Enter the amount to withdraw (in hundreds):"));
 const { hundredNotes, fiftyNotes, tenNotes } = calculateCurrencyNotes(amountInHundreds);

console.log(`Currency notes to be given:`);
console.log(`100 Rs notes: ${hundredNotes}`);
console.log(`50 Rs notes: ${fiftyNotes}`);
console.log(`10 Rs notes: ${tenNotes}`);



          //end QUESTION,ANSWER//