

var skills = ["programming", "leadership", "public speaking", "Microsoft Office"]


var bio = {
"name": "Xiaohe Grace Gu"
"role": "Student"
"contact info": "xgu@uchicago.edu"
"picture URL": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/16473573_749990395152636_1414885734714500220_n.jpg?oh=c4d8a0bbe0c5aa523a4c4312bafaa848&oe=59636907"
"welcome message": "Welcome!"
"skills" : skills

}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedName);
$("#header").append(formattedRole);