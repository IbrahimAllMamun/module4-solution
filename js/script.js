var array = ["Harry", "John", "Robin", "Henry", "Kevin", "Jonas", "Stephen", "Yaakov", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"]

for (var i =  0; i < array.length; i++) {
	if (array[i][0] == "J") {
		sayGoodBye(array[i]);
	}
	else {
		sayHello(array[i]);
	}	
}


