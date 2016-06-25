var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "career_objectives.html"
    })
    .when("/career_objectives", {
        templateUrl : "career_objectives.html"
    })
    .when("/employment_history", {
        templateUrl : "employment_history.html"
    })
    .when("/key_skills", {
        templateUrl : "key_skills.html"
    })
    .when("/professional_associations", {
        templateUrl : "professional_associations.html"
    })
    .when("/qualifications", {
        templateUrl : "qualifications.html"
    })
    .when("/referees", {
        templateUrl : "referees.html"
    })
	.otherwise({
        template: "Click on the links above"
    });
});

app.controller('qualificationsController', function($scope) {
	$scope.qualifications = [
		{ 
			year: '2014', 
			title: 'Certificate IV in Training and Assessment',
			university: 'Southbank Institute of Technology, Brisbane',
			result: '',
			img: 'tafe-queensland-logo1.png',
			likes: 0
		}, 
		{ 
			year: '2013', 
			title: 'Graduate Diploma of Education (Secondary)',
			university: 'Griffith University, Brisbane',
			result: 'GPA: 6.67 (scale 1-7, 7 highest), Griffith Award for Academic Excellence',
			img: 'griffith-logo-g7.png',
			likes: 0
		}, 
		{ 
			year: '2004-2006', 
			title: 'Bachelor of Information Technology (Software Engineering)',
			university: 'Queensland University of Technology, Brisbane',
			result: 'GPA: 5.875',
			img: 'qut-logo-brisbane-australia.jpg',
			likes: 0
		}
	];
	$scope.plusOne = function(index) { 
		$scope.qualifications[index].likes += 1; 
	};
});

/*
app.directive("w3TestDirective", function() {
    return {
		restrict : "A",
        template : "<b>I was made in a directive constructor!</b>"
    };
});


app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    $scope.changeName = function() {
        $scope.firstname = "Nelly";
    }
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
});

app.controller("PostsCtrl", function($scope, $http) {
	
    $scope.getUsersFromLocal = function() {
        $http.get('http://www.w3schools.com/angular/customers.php').
        success(function(data) {
              $scope.myData = data;
			  console.log(data);
        });
    };

    $scope.getUsersFromLocal(); //call ajax method
});
*/

  //$http.get('resume_angular_employment_history.json').

// When naming a directive, you must use a camel case name, w3TestDirective, but when invoking it, you must use - separated name, w3-test-directive:
// <w3-test-directive></w3-test-directive>
// <div w3-test-directive></div>
// <div class="w3-test-directive"></div>
// <!-- directive: w3-test-directive -->
/*
The legal restrict values are:

E for Element name
A for Attribute
C for Class
M for Comment
By default the value is EA, meaning that both Element names and attribute names can invoke the directive.

*/

function writeEmail() {
	var m = 'paul';  
	m += '.';			
	m += 'robotham';  
	m += '@';
	m += 'gmail';  
	m += '.com';
	document.getElementById('emailHref').href = "mailto:" + m;
	document.getElementById('emailText').innerHTML = m;
}