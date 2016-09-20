var countries =
["Germany", "US", "Argentina", "Brazil", "Netherland"];

for(country in countries){
	console.log("This is country: " + countries[country]);
}

$(document).click(function(loc){
	console.log(loc.pageX, loc.pageY);
});

var bio = {
	"name": "Chiuhua Chen",
	"role": "Frontend Developer",
	"contacts": {
		"mobile": "206-555-5555",
		"email": "chiuthecoder@gmail.com",
		"github": "chiuthecoder",
		"twitter": "@chiuthecoder",
		"location": "Seattle"
	},
	"biopic": "images/me.jpg",
	"welcomeMessage": "Hello! This is my online resume. Yeah!",
	"skills": [
		"HTML", "CSS", "JS", "jQuery", "SASS", "Axure", "PhotoShop"
	]
} 

function displayBio(){
	if (bio.skills.length > 0){
		var formattedText = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedText);
		var formattedText = HTMLheaderRole.replace("%data%", bio.role);
		$("h1").after(formattedText);
		var formattedText = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedText);
		var formattedText = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedText);
		var formattedText = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedText);
		var formattedText = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedText);
		var formattedText = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedText);
		var formattedText = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedText);
		var formattedText = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedText);
		$("#header").append(HTMLskillsStart);
		//loop for bio.skills array
		for(var i=0; i<bio.skills.length; i++){
			var formattedText = HTMLskills .replace("%data%", bio.skills[i]);
			$("#skills").append(formattedText);
		}
	}
}

displayBio();

var work = {
	"jobs":[
			{
			"title": "Frontend Developer",
			"employer": "Freelance|io",
			"location": "Seattle",		
			"dates": "2015-present",
			"description": "Develop responsive frontend code for clients."
		},
		{
			"title": "UI Developer",
			"employer": "Perficient",
			"location": "CA",		
			"dates": "2012-2014",
			"description": "Developed html/css/js frontend code for clients."
		},
		{
			"title": "Web Designer/Developer",
			"employer": "Nielsen",
			"location": "New York, NY",		
			"dates": "2006-2011",
			"description": "Developed frontend code."
		},
		{
			"title": "Web Designer/Developer",
			"employer": "VNU",
			"location": "New York, NY",		
			"dates": "1999-2005",
			"description": "Built intranet."
		}
	]
};

if (work.jobs.length > 0){

	// console.log("working!!");
	for(var i=0; i < work.jobs.length; i++){
		console.log("hello, i="+i+work.jobs[i].title);
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkTitle = HTMLworkEmployer.replace("%data%", work.jobs[i].employer)+HTMLworkTitle.replace("%data%", work.jobs[i].title);
		$(".work-entry:last").append(formattedWorkTitle);
		var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedWorkDate);
		var formattedDes = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedDes);
	}
}


var education ={
	"schools":[
		{
			"name": "City College of New York",
			"location": "New York, NY",
			"degree": "MFA",
			"dates": "1998",
			"majors": ["Multimedia", "Painting"]
		},
		{
			"name": "City College of New York",
			"location": "New York, NY",
			"degree": "BA",
			"dates": "1995",
			"majors": ["Painting"]
		}
	],
	"onlineCourses":[
		{
			"title": "Javascript Crash Course",
			"school": "Udacity",
			"dates": 2016,
			"url": "http://www.udacity.com/course/cs50"
		}
	]
};



var projects ={
	"projects":[
		{
			"title": "Meal Ideas",
			"dates": 2016,
			"description": "xxxxxxx",
			"images": [
				"http://placehold.it/350x150",
				"http://placehold.it/350x150"
			],
			"technology": "HTML5, CSS3, JS, jQuery",
			"URL": "http://chiuthecoder.github.com/mealideas"
		},
			{
			"title": "Tech Talk",
			"dates": 2015,
			"description": "xxxxxxx",
			"images": [
				"http://placehold.it/350x150",
				"http://placehold.it/350x150"
			],
			"technology": "HTML5, CSS3, JS, jQuery, Ruby on Rail",
			"URL": "http://chiuthecoder.github.com/techtalk"
		},
			{
			"title": "Doctor's Appointment",
			"dates": 2015,
			"description": "xxxxxxx",
			"images": [
				"http://placehold.it/350x150",
				"http://placehold.it/350x150"
			],
			"technology": "HTML5, CSS3, JS, jQuery, Angular, NodeJS, MogoDB",
			"URL": "http://chiuthecoder.github.com/docapp"
		}
	]
};



//FUNCTION to Internationalize Names:
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

//you want to see a map?
$("#mapDiv").append(googleMap);