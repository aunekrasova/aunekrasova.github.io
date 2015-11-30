

var arr = [];
var elemets = 4
	for(var i=0; i <= elemets; i++){
		arr[i] = prompt('Введите имя');
}

console.log('arr', arr);
console.log('arr.length', arr.length);

var userName = prompt('Введите имя пользователя');

if (userName == arr[0]) {
			alert( 'Hello ' + userName)
}

else if (userName == arr[1]) {
			alert( 'Hello ' + arr[1])
	 }

	 else if (userName == arr[2]) {
			alert( 'Hello ' + arr[2])
	 	  }
		  else if (userName == arr[3]) {
				alert( 'Hello ' + arr[3])
	 	       }
		  	   else if (userName == arr[4]) {
					alert( 'Hello ' + arr[4])
	 	            }
		  	   		else {
		  	   			alert( 'Good bye' )
		  	   		}
		  	   		
