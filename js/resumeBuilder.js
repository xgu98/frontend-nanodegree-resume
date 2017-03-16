


var bio = {
	"name": "Grace Gu",
	"role": "Student",
	"contacts": {
		"email":"xgu@uchicago.edu",
		"mobile" :"312-838-8402",
		"github" : "xgu98",
		"location": "Chicago,IL"
	},
	"biopic": "images/pfp.jpg",
	"welcomeMessage": "Welcome to my online resume!",
	"skills" : ["programming", "entrepreneurship", "leadership", "public speaking", "Microsoft Office"]

};


bio.display= function(){

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(formattedName);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedRole);
    var formattedBioPic=HTMLbioPic.replace("%data%",bio.biopic);
    $("#header").append(formattedBioPic);
    var formattedWelcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    var formattedEmail= HTMLemail.replace("%data%",bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedMobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedGithub= HTMLgithub.replace("%data%",bio.contacts.github);
    $("#topContacts").append(formattedGithub);


if (bio.skills.length>0) {
	
	$("#header").append(HTMLskillsStart);
	for(var i=0;i<bio.skills.length;i++){
	var formattedSkill=HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkill);
}

}

}
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
		"location": "Beijing, China",
		"description" : "Report on startups in cutting-edge science and technology for Chinese audience interested in TMT news. Past articles covered Lithium-ion battery’s impact on EV industry and the future of energy, and organ-on-chip tech’s potential to optimize drug development and personalize medicine"

	}

	]

};

work.display= function(){
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

var education = {

	"schools" : [

	{
		"name":"The University of Chicago",
		"location":"Chicago, IL",
		"degree" : "Bachelor",
		"majors": ["Economics", "Computer Science"],
		"dates" : "September 2016-present",
		"url": "http://www.uchicago.edu/"

	},

	{
		"name":"The Peddie School",
		"location":"Hightstown, NJ",
		"degree" : "High School",
		"majors": [],
		"dates" : "September 2012-May 2016",
		"url":"https://www.peddie.org/page"
	

	}

	],

	"onlineCourses": [
     {

"title":"Udacity Front-end Web Developing",
"school":"Udacity",
"dates":"November 2016-present",
"url":"https://www.udacity.com"

}

	]

};

education.display= function(){

	$("#education").append(HTMLschoolStart);
	for(var i=0; i<education.schools.length;i++){
		var formattedName=HTMLschoolName.replace("%data%", education.schools[i].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree=HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDates=HTMLschoolDates.replace("%data%", education.schools[i].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation=HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedURL=HTMLschoolURL.replace("%data%", education.schools[i].url);
		$(".education-entry:last").append(formattedURL);
		if(education.schools[i].majors.length>0){

			
				var formattedMajor=HTMLschoolMajor.replace("%data%", education.schools[i].majors);
				$(".education-entry:last").append(formattedMajor);
			
		}

	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for(var i=0; i<education.onlineCourses.length;i++){
		var formattedTitle=HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		$(".education-entry:last").append(formattedTitle);
		var formattedSchool=HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		$(".education-entry:last").append(formattedSchool);
		var formattedDates=HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL=HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
		$(".education-entry:last").append(formattedURL);

}
};



var projects={

	"project":[
	{
		"title":"Animal Trading Card",
		"dates":"November 2016",
		"description": "An animal trading card with American Red Squirrel description and image.",
		"images": ["images/squirrel.jpeg"]
	},

	{
		"title":"Portfolio Site",
		"dates":"December 2016",
		"description": "A sample portfolio site with my profile picture and link to Peddie School's homepage",
		"images": ["images/fry.jpg"]
	}



	]
};


projects.display= function() {

	for(var i=0; i<projects.project.length;i++){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle=HTMLprojectTitle.replace("%data%",projects.project[i].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates=HTMLprojectDates.replace("%data%",projects.project[i].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription=HTMLprojectDescription.replace("%data%",projects.project[i].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.project[i].images.length>0){
			for(var j=0; j<projects.project[i].images.length;j++){
				var formattedImage=HTMLprojectImage.replace("%data%", projects.project[i].images[j])
				$(".project-entry:last").append(formattedImage);
			}
		}
	}

};

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

$("#main").append(internationalizeButton);
function inName(name){
	name=name.trim().split(" ");
	name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	name[1]=name[1].toUpperCase();

	return name[0]+" "+name[1];
}



bio.display();

work.display();

education.display();

projects.display();

$("#mapDiv").append(googleMap);


