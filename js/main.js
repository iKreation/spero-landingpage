/* Main app */
var app = {
	map: null,
	timer: null,
	counter: 0,
	count: true,
	showN: 0,
	start: false,
	repUm: 0,
	repDois: 0,
	repTres: 0,
	repQuatro: 0,
	foi: false,
	foi2: false,
	desc1: 0,
	desc2: 0,
	desc3: 0,
	desc4: 0,
	fora: 0
}

/* App functions */
app.setScroll = function() {
	var self = this;
	$(document).scroll(function() {
		var scroll = $(window).scrollTop();

		var offUm = $(".sliUm").offset();

		var doisOffset = $(".sliDois").offset();
		var doisOffset2 = $(".servi").offset();
		var dPos2 = (doisOffset.top - 250);
		var dPos3 = (doisOffset2.top - 400);



		if ($(this).scrollTop() >= 400){  
		    $('.um').addClass("fase2");
		    $('.quatro').addClass("fase2");
		  }



		if ($(this).scrollTop() >= dPos2){  
		    foi = true;
		  } 
		if ($(this).scrollTop() >= dPos3){
			foi = false;
		}  


		if ($(this).scrollTop() >= dPos2){  
		    foi2 = true;
		} 
		else {  
		    foi2 = false;
		} 



		if (scroll >= dPos3) {
			$('.planeta').addClass('animated tada');
		}

		if (scroll >= dPos2) {
			if (!self.start) {
				self.start = true;
				self.timer = setInterval(self.slide, 1600);
			}
		}
	});
}

app.animations = function() {
	$('.ConRepUm').addClass('animated bounceInDown');
	$('.ConRepDois').addClass('animated bounceInDown');
	$('.ConRepTres').addClass('animated bounceInDown');
	$('.ConRepQuatro').addClass('animated bounceInDown');
	$('.messUm').addClass('animated fadeInUp');
	$('.messUmDois').addClass('animated fadeInUp');

	setTimeout(function() {
		$('.ConDesUm').fadeIn(600);
	}, 1000);

	setTimeout(function() {
		$('.ConDesDois').fadeIn(600);
	}, 1500);

	setTimeout(function() {
		$('.ConDesTres').fadeIn(600);
	}, 2000);

	setTimeout(function() {
		$('.ConDesQuatro').fadeIn(600);
	}, 2500);
}

app.descriptions = function() {
	var self = this;
	
	/*
	$('html').click(function(e) {

		switch (e.target.id){

		    case "imgRepUm":
		        console.log("imgRepUm");
		    break;

		    case "ConDesUm":
		        console.log("ConDesUm");
		    break;

		    default: console.log("default");
		} 

	});	*/

	$('#imgRepUm').click(function() {
		console.log("imgRepUm");
	});

	$('#ConDesUm').click(function() {
		console.log("ConDesUm");
	});
}

app.events = function() {
	var self = this;
	$(".numUm").click(function() {
		self.counter = 0;
		$(".ConT3").hide(10);
		$(".ConT2").hide(10);

		setTimeout(function() {
			$(".ConT1").fadeIn(300);
		}, 100);

		$(".numUm").css({
			"background": "rgba(52, 152, 219, 0.9)"
		})
		$(".numDois").css({
			"background": "rgba(46, 204, 113,0.8)"
		})
		$(".numTres").css({
			"background": "rgba(46, 204, 113,0.8)"
		});
	});

	$(".numDois").click(function() {
		self.counter = 1;
		$(".ConT1").hide(10);
		$(".ConT3").hide(10);

		setTimeout(function() {
			$(".ConT2").fadeIn(300);
		}, 100);

		$(".numDois").css({
			"background": "rgba(52, 152, 219, 0.9)"
		})
		$(".numUm").css({
			"background": "rgba(46, 204, 113,0.8)"
		})
		$(".numTres").css({
			"background": "rgba(46, 204, 113,0.8)"
		});
	});

	$(".numTres").click(function() {
		self.counter = 2;
		$(".ConT1").hide(10);
		$(".ConT2").hide(10);

		setTimeout(function() {
			$(".ConT3").fadeIn(300);
		}, 100);

		$(".numTres").css({
			"background": "rgba(52, 152, 219, 0.9)"
		})
		$(".numDois").css({
			"background": "rgba(46, 204, 113,0.8)"
		})
		$(".numUm").css({
			"background": "rgba(46, 204, 113,0.8)"
		});
	});

	$('.btMessUm').click(function() {
		$('html, body').animate({
			scrollTop: (($(".sliDois").offset().top) - 90)
		}, 300);
	});

	$('.btMessUmDois').click(function() {
		$('html, body').animate({
			scrollTop: (($(".sliTres").offset().top) - 140)
		}, 300);
	});

	$('.btMessDois').click(function() {
		$('html, body').animate({
			scrollTop: (($(".sliTres").offset().top) - 140)
		}, 300);
	});

	$('.um').click(function() {
		if (foi2 == false){
			$('html, body').animate({
				scrollTop: (($(".sliDois").offset().top) - 140)
			}, 300);
		}
		if (foi2 == true){
			$('html, body').animate({
				scrollTop: (($(".sliTres").offset().top) - 140)
			}, 300);
		}

	});

	$('.quatro').click(function() {
		if (foi == true){
			$('html, body').animate({
				scrollTop: (($(".sliUm").offset().top) - 140)
			}, 300);
		}
		if(foi == false){
			$('html, body').animate({
				scrollTop: (($(".sliDois").offset().top) - 90)
			}, 300);
		}
	});

	/* -------------  MENU -------------------------------*/
	$('.tres').click(function() {
		$('html, body').animate({
			scrollTop: (($(".sliDois").offset().top) - 90)
		}, 300);
		self.start = true;
	});

	$('.tres2').click(function() {
		$('html, body').animate({
			scrollTop: (($(".sliUm").offset().top) - 105)
		}, 300);
	});

	$('.dois').click(function() {
		$('html, body').animate({
			scrollTop: (($(".sliTres").offset().top) - 205)
		}, 300);
	});
	/* -------------  MENU -------------------------------*/

	$('body').click(function(e) {
		// EDIF -------------------
		if( e.target.id == 'imgEd'){
			if (self.desc1%2 == 0) {

				$('.desc1').show(300);
				setTimeout(function() {
					$('.txDesc1').fadeIn(200);
				}, 200);

				$('.estr').fadeOut(100);
				$('.munic').fadeOut(100);
				$('.agua').fadeOut(100);
				$('.planeta').css({
					"opacity": "0"
				})
				self.desc1 = 1;	
			}	
			else if (self.desc1 == 1) {
				$('.desc1').fadeOut(100);
				$('.txDesc1').fadeOut(100);

				$('.estr').fadeIn(300);
				$('.munic').fadeIn(300);
				$('.agua').fadeIn(300);
				$('.planeta').css({
					"opacity": "1"
				})
				self.desc1 = 2;	
			}	
		}
		else if(self.desc1 > 0) {
			$('.desc1').fadeOut(100);
			$('.txDesc1').fadeOut(100);

			$('.estr').fadeIn(300);
			$('.munic').fadeIn(300);
			$('.agua').fadeIn(300);
			$('.planeta').css({
				"opacity": "1"
			})
			self.desc1 = 0;	
		}
		// ESTR -------------------
		if( e.target.id == 'imgEs'){
			if (self.desc2%2 == 0) {

				$('.desc2').show(300);
				setTimeout(function() {
					$('.txDesc2').fadeIn(200);
				}, 200);

				$('.edif').fadeOut(100);
				$('.munic').fadeOut(100);
				$('.agua').fadeOut(100);
				$('.planeta').css({
					"opacity": "0"
				})
				self.desc2 = 1;	
			}	
			else if (self.desc2 == 1) {
				$('.desc2').fadeOut(100);
				$('.txDesc2').fadeOut(100);

				$('.edif').fadeIn(300);
				$('.munic').fadeIn(300);
				$('.agua').fadeIn(300);
				$('.planeta').css({
					"opacity": "1"
				})
				self.desc2 = 2;	
			}	
		}
		else if(self.desc2 > 0) {
			$('.desc2').fadeOut(100);
			$('.txDesc2').fadeOut(100);

			$('.edif').fadeIn(300);
			$('.munic').fadeIn(300);
			$('.agua').fadeIn(300);
			$('.planeta').css({
				"opacity": "1"
			})
			self.desc2 = 0;	
		}
		// MUNIC -------------------
		if( e.target.id == 'imgMun'){
			if (self.desc3%2 == 0) {
				$('.desc3').show(300);
				setTimeout(function() {
					$('.txDesc3').fadeIn(200);
				}, 200);

				$('.estr').fadeOut(100);
				$('.edif').fadeOut(100);
				$('.agua').fadeOut(100);
				$('.planeta').css({
					"opacity": "0"
				})

				setTimeout(function() {
					$(".munic").css({
						"margin-left": "10%"
					})
				}, 100);
				self.desc3 = 1;	
			}	
			else if (self.desc3 == 1) {
				$('.desc3').fadeOut(100);
				$('.txDesc3').fadeOut(100);

				$('.estr').fadeIn(300);
				$('.edif').fadeIn(300);
				$('.agua').fadeIn(300);
				$('.planeta').css({
					"opacity": "1"
				})

				$(".munic").css({
					"margin-left": "20%"
				})
				self.desc3 = 2;	
			}	
		}
		else if(self.desc3 > 0) {
			$('.desc3').fadeOut(100);
			$('.txDesc3').fadeOut(100);

			$('.estr').fadeIn(300);
			$('.edif').fadeIn(300);
			$('.agua').fadeIn(300);
			$('.planeta').css({
				"opacity": "1"
			})

			$(".munic").css({
				"margin-left": "20%"
			})
			self.desc3 = 0;	
		}
		// AGUA -------------------
		if( e.target.id == 'imgAg'){
			if (self.desc4%2 == 0) {
				$('.desc4').show(300);
				setTimeout(function() {
					$('.txDesc4').fadeIn(200);
				}, 200);

				$('.estr').fadeOut(100);
				$('.edif').fadeOut(100);
				$('.munic').fadeOut(100);
				$('.planeta').css({
					"opacity": "0"
				})

				setTimeout(function() {
					$(".agua").css({
						"margin-left": "10%"
					})
				}, 200);
				self.desc4 = 1;	
			}	
			else if (self.desc4 == 1) {
				$('.desc4').fadeOut(100);
				$('.txDesc4').fadeOut(100);

				$('.estr').fadeIn(300);
				$('.edif').fadeIn(300);
				$('.munic').fadeIn(300);
				$('.planeta').css({
					"opacity": "1"
				})

				$(".munic").css({
					"margin-left": "20%"
				})
				$(".agua").css({
					"margin-left": "10%"
				})
				self.desc4 = 2;	
			}	
		}
		else if(self.desc4 > 0) {
			$('.desc4').fadeOut(100);
			$('.txDesc4').fadeOut(100);

			$('.estr').fadeIn(300);
			$('.edif').fadeIn(300);
			$('.munic').fadeIn(300);
			$('.planeta').css({
				"opacity": "1"
			})

			$(".munic").css({
				"margin-left": "20%"
			})
			$(".agua").css({
				"margin-left": "10%"
			})
			self.desc4 = 0;	
		}
	});		
}

app.slide = function() {
	if (app.start) {
		if (app.counter == 0) {
			$(".ConT3").hide(10);
			$(".ConT2").hide(10);

			setTimeout(function() {
				$(".ConT1").fadeIn(300);
			}, 100);

			$(".numUm").css({
				"background": "rgba(52, 152, 219, 0.9)"
			})
			$(".numDois").css({
				"background": "rgba(46, 204, 113,0.8)"
			})
			$(".numTres").css({
				"background": "rgba(46, 204, 113,0.8)"
			})
			if (app.count) {
				app.counter++;
			}
			return;
		}
		else if (app.counter == 1) {
			$(".ConT1").hide(10);
			$(".ConT3").hide(10);

			setTimeout(function() {
				$(".ConT2").fadeIn(300);
			}, 100);

			$(".numDois").css({
				"background": "rgba(52, 152, 219, 0.9)"
			})
			$(".numUm").css({
				"background": "rgba(46, 204, 113,0.8)"
			})
			$(".numTres").css({
				"background": "rgba(46, 204, 113,0.8)"
			});
			
			if (app.count) {
				app.counter++;
			}
		}

		else if (app.counter == 2) {
			$(".ConT1").hide(10);
			$(".ConT2").hide(10);

			setTimeout(function() {
				$(".ConT3").fadeIn(300);
			}, 100);

			$(".numTres").css({
				"background": "rgba(52, 152, 219, 0.9)"
			})
			$(".numDois").css({
				"background": "rgba(46, 204, 113,0.8)"
			})
			$(".numUm").css({
				"background": "rgba(46, 204, 113,0.8)"
			})

			app.count = false;
			clearInterval(app.timer);
		}
	}
}

app.init = function() {
	var self = this;
	app.events();
	app.descriptions();
	app.animations();
	$(".content-container").show();
}

app.initMaps = function() {
	var self = this;
	var mapOptions = {
		// How zoomed in you want the map to start at (always required)
		zoom: 13,
		draggable: false,
		zoomControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		scrolling: false,
		streetViewControl: false,
		mapTypeControl: false,
		disableDefaultUI: true,

		// The latitude and longitude to center the map (always required)
		center: new google.maps.LatLng(40.9900, -73.9900), // New York

		styles: [{"elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#f5f5f2"},{"visibility":"on"}]},{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.place_of_worship","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#ffffff"},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","stylers":[{"color":"#000000"}]},{"featureType":"poi.park","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#05E9FF"}]},{"featureType":"landscape","stylers":[{"color":"#e5e8e7"}]},{"featureType":"poi.park","stylers":[{"color":"#8ba129"}]},{"featureType":"road","stylers":[{"color":"#FAFAFA"}]},{"featureType":"poi.sports_complex","elementType":"geometry","stylers":[{"color":"#c7c7c7"},{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#05E9FF"}]},{"featureType":"poi.park","stylers":[{"color":"#1abc9c"}]},{"featureType":"poi.park","stylers":[{"gamma":1.51}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"landscape","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","stylers":[{"visibility":"simplified"}]},{"featureType":"road"},{"featureType":"road"},{},{"featureType":"road.highway"},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"color":"#8C8C8C"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]}]
    
    };

	var mapElement = document.getElementById('map');
	// Create the Google Map using out element and options defined above
	this.map = new google.maps.Map(mapElement, mapOptions);

	google.maps.event.addListener(this.map, 'tilesloaded', function(evt) {
		self.init();
	});
}


$(document).ready(function() {
	app.setScroll();
	app.initMaps();
})
