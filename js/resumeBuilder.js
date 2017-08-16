$(function(){

//Make sure no-one can enter html into page
    var charEscape = function(_html) {
        var newHTML = _html;

        newHTML = _html.replace(/</g, "&lt;");
        newHTML = newHTML.replace(/>/g, "&gt;");

        return newHTML;
    };

var skills = ["Adobe CC", " Wire-Framing", " PSD to web-page conversion", " HTML5", " CSS3", " Bootstrap", " JavaScript"," jQuery", " ReactJS", " MVC design pattern", " XML"," AJAX", " Git version control", " CMS customization", " SEO"," Google Analytics", " Ruby" ];

var bio = {
    "name": "Shannon Teer",
    "role": "Web Designer & Developer",
    "contacts": {
        "email": "shannonteer@gmail.com",
        "mobile": "512-635-8386",
        "github": "shannonteer",
        "linkedIn": "https://www.linkedin.com/in/shannon-teer-80b19211/",
        "location": "Austin, TX"
    },
    "welcomeMessage": "Web designer/Developer specializing in Responsive design and SEO",
    "pictureUrl": "",
    "skills": skills
};

    var formattedName = HTMLheaderName.replace("%data%", bio.name);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName + formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#lets-connect").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#lets-connect").append(formattedEmail);


    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#topContacts").append(formattedWelcomeMsg);

    if(skills.length >0) {
        $("#header").append(HTMLskillsStart);

        for ( var i=0; i<skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", skills[i]);
            formattedSkill = HTMLskills.replace("%data%", skills[i]);
            $("#skills").append(formattedSkill);
        }
    }

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.pictureUrl);
    $("#header").append(formattedBiopic);


    var work = {
    "jobs": [
        {
            "position": "Freelance Web Designer/Developer",
            "employer": "Self-Employed",
            "time in position": "4 months",
            "location": "Austin, TX",
            "dates": "04/2017 - present",
            "description": "words"
        },
        {
            "position": "Registered Nurse",
            "employer": "Seton Medical Center - Cardiology",
            "time in position": "2 years",
            "location": "Austin, TX",
            "dates": "07/2015 - present",
            "description": "words"

        },
        {
            "position": "Clinical Assistant",
            "employer": ["Dell Children's Medical Center", "University Medical Center Brackenridge"],
            "time in position": "2 years",
            "location": "Austin, TX",
            "dates": "08/2013 - 07/2015",
            "description": "words"

        },
        {
            "position": "Operations Manager",
            "employer": "Santanna Energy Services",
            "time in position": "5 years",
            "location": "Austin, TX",
            "dates": "08/2013 - 07/2015",
            "description": "words"

        },
        {
            "position": "Energy Services Analyst I-IV",
            "employer": "Santanna Energy Services",
            "time in position": "4 years",
            "location": "Austin, TX",
            "dates": "08/2013 - 07/2015",
            "description": "words"

        },
        {
            "position": "Business Sales Account Manager",
            "employer": "Dell Inc",
            "time in position": "1 year",
            "location": "Round Rock, TX",
            "dates": "08/2013 - 07/2015",
            "description": "words"

        }

    ]
};




    work.display = function() {

        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);

            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].position);
            var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedDescription);

        }
    };
    work.display();


var education = {
    "schools": [
        {
            "schoolName": "SkillCrush",
            "location": "Online School",
            "major": "Front End Web Developer",
            "relevantCourses": ["Photoshop ", " HTML", " CSS", " JavaScript", " jQuery", " Git", " Ruby"]
        },
        {
            "schoolName": "Udacity",
            "location": "Online School",
            "major": "Front End Web Developer",
            "relevantCourses": ["JavaScript", " XML", " AJAX", " MVC design"]
        },
        {
            "schoolName": "Codecademy",
            "location": "Online School",
            "major": "Front End Web Developer",
            "relevantCourses": [" Responsive Web Design", " ReactJS", " JavaScript"]
        },
        {
            "schoolName": "Austin Community College",
            "location": "Austin, TX",
            "major": "Nursing",
            "relevantCourses": [" Interpersonal Communication"]
        },
        {
            "schoolName": "The University of Texas",
            "location": "Austin, TX",
            "major": "BA, Psychology",
            "relevantCourses": [" Visual Communication, ", " Advertising"]
        }

    ]
};

    education.display = function() {

        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].schoolName);
            $(".education-entry:last").append(formattedSchoolName);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(formattedSchoolLocation);

            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
            $(".education-entry:last").append(formattedSchoolMajor);

            var formattedSchoolCourses = HTMLschoolCourses.replace("%data%", education.schools[i].relevantCourses);
            $(".education-entry:last").append(formattedSchoolCourses);

        }
    };
    education.display();


var projects = {
    "projectArray": [
        {
            "title": "Prime Horizontal - Website Re-Design Consultation",
            "link": "http://www.shannonteer.com/projects/prime.html",
            "description": "words",
            "images": " "
        },
        {
            "title": "Perspective Web Development - WordPress Site Design and Development",
            "link": "http://www.perspectivewebdevelopment.com",
            "description": "words",
            "images": " "

        },
        {
            "title": "Smokey G's BBQ - WordPress Site Customization",
            "link": "http://www.smokeyGsbbq.com",
            "description": "words",
            "images": " "

        },
        {
            "title": "Wedding Website - Website Design and Development",
            "description": "words",
            "link": "http://www.lolaAndScott.com",
            "images": " "
        }

    ]
};


projects.view = function() {
    for (var i = 0; i <= projects.projectArray.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projectArray[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedLink = HTMLprojectLink.replace("%data%", projects.projectArray[i].link);
        $(".project-entry:last").append(formattedLink);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projectArray[i].description);
        $(".project-entry:last").append(formattedDescription);

        var formattedImages = HTMLprojectImages.replace("%data%", projects.projectArray[i].images);
        $(".project-entry:last").append(formattedImages);
    }
};
    projects.view();



});




