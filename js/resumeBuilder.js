

var skills = ["programming", "leadership", "public speaking", "Microsoft Office"];


var bio = {
"name": "Xiaohe Grace Gu",
"role": "Student",
"contact info": {
	"email":"xgu@uchicago.edu",
	"mobile" :"312-838-8402",
	"github" : "xgu98"
},
"picture URL": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/16473573_749990395152636_1414885734714500220_n.jpg?oh=c4d8a0bbe0c5aa523a4c4312bafaa848&oe=59636907",
"welcome message": "Welcome!",
"skills" : skills

};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedName);
$("#header").append(formattedRole);

var work = {};
work.position = "Research Assistant";
work.employer = "The University of Chicago Becker Friedman Institute of Research in Economics";
work.years = 1;
work.city = "Chicago";

var education = {};
education["name"]= "The University of Chicago";
education["years"] = 1;
education["city"] = "Chicago";
