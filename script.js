var heading = document.createElement("h1");
var hMarksNode = document.createTextNode("Result Sheet:");
heading.appendChild(hMarksNode);

var urduMarks = document.createElement("p");
var uMarksNode = document.createTextNode("Urdu : 98");
urduMarks.appendChild(uMarksNode);

var englishMarks = document.createElement("p");
var eMarksNode = document.createTextNode("English : 90");
englishMarks.appendChild(eMarksNode);

var physicsMarks = document.createElement("p");
var pMarksNode = document.createTextNode("Physics : 94");
physicsMarks.appendChild(pMarksNode);

var mathMarks = document.createElement("p");
var mMarksNode = document.createTextNode("Math : 99");
mathMarks.appendChild(mMarksNode);

var islamMarks = document.createElement("p");
var iMarksNode = document.createTextNode("Islamiyat : 97");
islamMarks.appendChild(iMarksNode);

var total = document.createElement("h4");
var tMarksNode = document.createTextNode("Total Marks : 500");
total.appendChild(tMarksNode);

var obtMarks = document.createElement("h4");
var obtMarksNode = document.createTextNode("Obtained Marks : 478");
obtMarks.appendChild(obtMarksNode);

var percentage = document.createElement("h4");
var percetageNode = document.createTextNode("Percentage : 96%");
percentage.appendChild(percetageNode);

var grade = document.createElement("h4");
var gradeNode = document.createTextNode("Grade : A-One");
grade.appendChild(gradeNode);

var mainDiv = document.getElementById("div");

mainDiv.appendChild(heading);
mainDiv.appendChild(urduMarks);
mainDiv.appendChild(englishMarks);
mainDiv.appendChild(physicsMarks);
mainDiv.appendChild(mathMarks);
mainDiv.appendChild(islamMarks);
mainDiv.appendChild(total);
mainDiv.appendChild(obtMarks);
mainDiv.appendChild(percentage);
mainDiv.appendChild(grade);

