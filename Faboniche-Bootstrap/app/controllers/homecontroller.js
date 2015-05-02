var home=angular.module('home',[]);
home.controller('homecontroller',function($scope,$http){
  $http.get("data_file.json").success(function(data){
  	$scope.stylists= [{
	  	"stylist":{"firstname":"SivaLalita",
	                 "lastname": "Vissamsetty",
	                 "profileimage":"images/stylist1.jpg",
                     "lookbook": [{ "image":"http://www.wendyslookbook.com/wp-content/uploads/2011/11/Rose-35-650x433.jpg"},
                                  {"image": "http://www.wendyslookbook.com/wp-content/uploads/2011/11/Rose-35-650x433.jpg"},
                                   { "image": "http://www.wendyslookbook.com/wp-content/uploads/2011/11/Rose-35-650x433.jpg"
                                 }]
	               }
	     
	  },
      {
      	"stylist":{  "firstname":"DevaDevi",
	                 "lastname": "Vissamsetty",
	                 "profileimage":"images/icon.jpg",
                     "lookbook": [{ "image":"http://www.wendyslookbook.com/wp-content/uploads/2011/11/Rose-35-650x433.jpg"},
                                  {"image": "http://www.wendyslookbook.com/wp-content/uploads/2011/11/Rose-35-650x433.jpg"},
                                   { "image": "http://www.wendyslookbook.com/wp-content/uploads/2011/11/Rose-35-650x433.jpg"
                                 }]
	               }
      },
      {
      	"stylist":{  "firstname":"Sarvesh",
	                 "lastname": "Sakalanaga",
	                 "profileimage":"images/icon.jpg",
                     "lookbook": [{ "image":"http://www.wendyslookbook.com/wp-content/uploads/2011/11/Rose-35-650x433.jpg"},
                                  {"image": "http://www.wendyslookbook.com/wp-content/uploads/2011/11/Rose-35-650x433.jpg"},
                                   { "image": "http://www.wendyslookbook.com/wp-content/uploads/2011/11/Rose-35-650x433.jpg"
                                 }]
	               }
      },
      {
      	"stylist":{  "firstname":"Amar",
	                 "lastname": "Vissamsetty",
	                 "profileimage":"images/icon.jpg",
                     "lookbook": [{ "image":"http://www.wendyslookbook.com/wp-content/uploads/2011/11/Rose-35-650x433.jpg"},
                                  {"image": "http://www.wendyslookbook.com/wp-content/uploads/2011/11/Rose-35-650x433.jpg"},
                                   { "image": "http://www.wendyslookbook.com/wp-content/uploads/2011/11/Rose-35-650x433.jpg"
                                 }]
	               }
      },
      {
      	"stylist":{  "firstname":"Sneha",
	                 "lastname": "Vissamsetty",
	                 "profileimage":"images/icon.jpg",
                     "lookbook": [{ "image":"http://www.wendyslookbook.com/wp-content/uploads/2011/11/Rose-35-650x433.jpg"},
                                  {"image": "http://www.wendyslookbook.com/wp-content/uploads/2011/11/Rose-35-650x433.jpg"},
                                   { "image": "http://www.wendyslookbook.com/wp-content/uploads/2011/11/Rose-35-650x433.jpg"
                                 }]
	               }
      }
	  ];
  });
});