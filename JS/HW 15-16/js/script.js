$(function() {
	
	$('#request').on('submit', function(e) {
		var myQueryArray = $( this ).serialize();
		
		e.preventDefault();
		$('.search ul').remove();

		if (myQueryArray.length - 2) {
			$.ajax({
				url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&' + myQueryArray + '&callback=GoogleCallback&context=?',
				dataType: 'jsonp'
			});
		}

		return false;
	});
});

function GoogleCallback (somejQueryObject, data) {
	var $ul = $('<ul class="col-md-10 col-md-offset-1"></ul>');

	$ul.appendTo('.search');
	
	for (var i = 0; i < 10; i++) {

		// Retrieving data from AJAX
		var url = data.results[i].unescapedUrl;
		var title = data.results[i].title;
		var content = data.results[i].content;

		// Creating DOM elemnts
		var $result = $('<li></li>');
		var $headerLink = $('<a href=' + url + '></a>');
		var $headerTitle = $('<h4></h4>');
		var $linkToCash = $('<p class="text-success"></p>');
		var $resultContent = $('<p></p>');

		// Creating DOM
		$result.appendTo($ul);
		$headerLink.appendTo($result);
		$headerTitle.appendTo($headerLink).html(title);
		$linkToCash.appendTo($result).html(url);
		$resultContent.appendTo($result).html(content);

	};
};

function Human() {
	this.name = 'Vitalay';
	this.age = 20;
	this.sex = "men";
	this. growth = 2.10;
	this. weight - 100;
}

var newHuman = new Human();

function Worker() {
	this.workingPlace = 'IBM';
	this.salary = 3000;
	this.goToWork = function () {
		alert('Go to work!');
	}
}

Worker.prototype = newHuman;
var newWorker = new Worker();

console.log('newWorker'.name, newWorker.name);

newWorker.goToWork();



function Student() {
	this.university = 'KPI';
	this. sholarship = 500;
	this.goWatchFilm = function () {
		alert('Go to watch film!');
	}
}

Student.prototype = newHuman;
var newStudent = new Student();

console.log('newStudent'.age, newStudent.age);

newStudent.goWatchFilm();