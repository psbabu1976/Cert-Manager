var hi = 0;
function sayHi(){
	if(hi++%100==0) console.log("Hi");
	sayHi();
}
