// var countries =
// ["Germany", "US", "Argentina", "Brazil", "Netherland"];

// for(country in countries){
// 	console.log("This is country: " + countries[country]);
// }

// $(document).click(function(loc){
// 	console.log(loc.pageX, loc.pageY);
// });

var formattedText;

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
	],
	"display": function(){
		if (bio.skills.length > 0){
			formattedText = HTMLheaderName.replace("%data%", bio.name);
			$("#header").prepend(formattedText);
			formattedText = HTMLheaderRole.replace("%data%", bio.role);
			$("h1").after(formattedText);
			formattedText = HTMLmobile.replace("%data%", bio.contacts.mobile);
			$("#topContacts").append(formattedText);
			formattedText = HTMLemail.replace("%data%", bio.contacts.email);
			$("#topContacts").append(formattedText);
			formattedText = HTMLtwitter.replace("%data%", bio.contacts.twitter);
			$("#topContacts").append(formattedText);
			formattedText = HTMLgithub.replace("%data%", bio.contacts.github);
			$("#topContacts").append(formattedText);
			formattedText = HTMLlocation.replace("%data%", bio.contacts.location);
			$("#topContacts").append(formattedText);
			formattedText = HTMLbioPic.replace("%data%", bio.biopic);
			$("#header").append(formattedText);
			formattedText = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
			$("#header").append(formattedText);
			$("#header").append(HTMLskillsStart);
			//loop for bio.skills array
			for(var i=0; i<bio.skills.length; i++){
				formattedText = HTMLskills .replace("%data%", bio.skills[i]);
				$("#skills").append(formattedText);
			}
		}		
	}
}; 

bio.display();

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
	],
	"display": function(){
		if (work.jobs.length > 0){
			// console.log("working!!");
			for(var i=0; i < work.jobs.length; i++){
				// console.log("hello, i="+i+work.jobs[i].title);
				$("#workExperience").append(HTMLworkStart);
				formattedText = HTMLworkEmployer.replace("%data%", work.jobs[i].employer)+HTMLworkTitle.replace("%data%", work.jobs[i].title);
				$(".work-entry:last").append(formattedText);
				formattedText = HTMLworkDates.replace("%data%", work.jobs[i].dates);
				$(".work-entry:last").append(formattedText);
				formattedText = HTMLworkDescription.replace("%data%", work.jobs[i].description);
				$(".work-entry:last").append(formattedText);
			}
		}	
	}
};

work.display();


var projects ={
	"projects":[
		{
			"title": "Meal Ideas",
			"dates": 2016,
			"description": "The app provides three meal ideas for the users base on their favors. Great nutritions and delicious foods.",
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
			"description": "The app provides upcoming tech talks events.",
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
			"description": "The app tracks user's doctor appoinments.",
			"images": [
				"http://placehold.it/350x150",
				"http://placehold.it/350x150"
			],
			"technology": "HTML5, CSS3, JS, jQuery, Angular, NodeJS, MogoDB",
			"URL": "http://chiuthecoder.github.com/docapp"
		}
	],
	"display": function(){
		if(projects.projects.length > 0){
			// console.log("working");
			for(var i = 0; i < projects.projects.length ; i++){
				$("#projects").append(HTMLprojectStart);
				formattedText = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
				$(".project-entry:last").append(formattedText);
				formattedText = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
				$(".project-entry:last").append(formattedText);
				formattedText = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
				$(".project-entry:last").append(formattedText);
				for(var j = 0; j < projects.projects[i].images.length; j++){
					formattedText = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
					$(".project-entry:last").append(formattedText);
				}
			}	
		}
	}
};
projects.display();

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
			"dates": "2016",
			"url": "http://www.udacity.com/course/cs50"
		}
	],
	"displaySchools": function(){
		if(education.schools.length > 0){
			// console.log("working");
			$("#education").append(HTMLschoolStart);
			for(var i=0; i < education.schools.length; i++){
				formattedText = HTMLschoolName.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree);
				$(".education-entry:last").append(formattedText);
				formattedText = HTMLschoolDates.replace("%data%", education.schools[i].dates);
				$(".education-entry:last").append(formattedText);
				formattedText = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
				$(".education-entry:last").append(formattedText);
			}
		}
	},
	"displayOnlineCourses": function(){
		if(education.onlineCourses.length >0){
			// console.log("working");
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);
			for(var i = 0; i < education.onlineCourses.length; i++){
				formattedText = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				$(".education-entry:last").append(formattedText);
				formattedText = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
				$(".education-entry:last").append(formattedText);
				formattedText = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
				$(".education-entry:last").append(formattedText);
			}
		}		
	}
};

education.displaySchools();
education.displayOnlineCourses();



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