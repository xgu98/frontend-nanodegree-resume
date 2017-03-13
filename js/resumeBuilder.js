


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
"skills" : ["programming", "leadership", "public speaking", "Microsoft Office"]

};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedName);
$("#header").append(formattedRole);

var work = {

"jobs": [

{
"title": "Research Assistant",
"employer": "Becker Friedman Institute of Research in Economics",
"dates": "November, 2016-present",
"location": "Chicago, IL",
"description" : "Conduct field experiments and manage research data on charitable giving and education policy for Economics Professor John A. List, a Nobel Prize candidate"
},

{
"title": "Reporting Intern",
"employer": "36Kr",
"dates": "January, 2017-present",
"location": "Chicago, IL",
"description" : "Report on startups in cutting-edge science and technology for Chinese audience interested in TMT news. Past articles covered Lithium-ion battery’s impact on EV industry and the future of energy, and organ-on-chip tech’s potential to optimize drug development and personalize medicine"

}

]

};

var education = {

"schools" : [

{
"name":"The University of Chicago",
"city":"Chicago",
"majors": ["Economics", "Computer Science"],
"graduation year" : 2020

},

{
"name":"Udacity",
"city":"online",
"majors": ["Frontend Web Developing"],
"graduation year" : 2017

}

]

};

var projects={};

 if (bio.skills.length>0) {
	
	$("#header").append(HTMLskillsStart);
	var formattedSkill=HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
   formattedSkill=HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill=HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill=HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);

}

function displayWork(){
for(var i=0; i<work.jobs.length;i++){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
	var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[i].title);
	var formattedEmployerTitle= formattedEmployer+formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[i].location);
	$(".work-entry:last").append(formattedLocation);
	var formattedDates=HTMLworkDates.replace("%data%",work.jobs[i].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[i].description);
	$(".work-entry:last").append(formattedDescription);
}
};

displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
  logClicks(x,y);
});
