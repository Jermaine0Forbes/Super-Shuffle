

var arr = [1,2,3,4,5,6,7,8,9,10],
numUl = 0,
arr2 = [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
bool = false;

/*--------------------_ID-------------*/
function _id(value){
	return document.getElementById(value);
}//_id

/*--------------------_QS-------------*/
function _qs(value){
	return document.querySelector(value);
}//_qs

/*--------------------ELEM-------------*/
function elem(element){
	return document.createElement(element);
}//elem

/*--------------------RANDOM-------------*/
function random ( min , max){
	return Math.floor(Math.random()*(min-max)+max);
}//random

/*--------------------RANDOMIZE-------------*/
function randomize(value){
	return Math.floor(Math.random()*value);
}//randomize

/*--------------------ROUND-------------*/
function round(value){
	return Math.round(Math.random()*value);
}//round


/*--------------------OUTPUT-------------*/
function output (array){

	var td = elem("td");
	var tableList = document.getElementsByTagName("table");
	if(tableList.length > 0)
	{ _qs("#content table tr").appendChild(td);
		console.log("A table exists")
		arrayed(array);
	}else{
		var tr = elem("tr");
		let table = elem("table");
		_id("content").appendChild(table);
		_qs("#content table").appendChild(tr);
		_qs("tr").appendChild(td);

		arrayed(array);
	}

}//output

/*--------------------ARRAYED-------------*/
function arrayed (arr){
	 let tdList = document.getElementsByTagName("td");
	 let ul = elem("ul");
	_qs("table tr").getElementsByTagName("td")[tdList.length -1].appendChild(ul);

	let ulL = _id("content").getElementsByTagName("ul");

	if(bool == true){



		 ulL[ulL.length -1].className = "blue";


	}else{

		 ulL[ulL.length -1].className = "green";


	}

	for (let i = 0; i < arr.length; i++){
	_id("content").getElementsByTagName("ul")[numUl].innerHTML += "<li>"+arr[i]+"</li>";
	}
	numUl++;
}//arrayed

/*--------------------SHUSH-------------*/
function shush(){
	let ar =[];
	let ar2 = [];
	let value , floor;


	for(let i = 0; i < 10; i++){
		value = Math.random()*10;
		value = value.toFixed(2);
		floor = (bool == false)?Math.round(value): Math.floor(value);
		ar.push(value);
		ar2.push(floor);
	}
	bool = (bool == false)?true:false;
	arrayed(ar);
	arrayed(ar2);

}//shush


/*--------------------SHUFFLE-------------*/
function shuffle(arr){

	var arry = [],
	arryIndex = [],
	index,
	item,
	returnedNumbers = [],
	list = arr;

	 list = (round(1) === 1)? list.reverse(): list;

	for( let i = 0 ; i < list.length; i++){
		arryIndex[i] = i+1;
	}

	function filterThis(a){
		  let result;
		  result = returnedNumbers.some(function(elem){
			  return elem == a;
		  });
		  if(result == false){
			  return a;
		  }
	  }

	for( let i = 0; i < list.length; i++){


	   index = arryIndex[round(arryIndex.length-1)];



	  returnedNumbers.push(index);
	  arryIndex = arryIndex.filter(filterThis);
	  item = list[index-1];
	  arry.push(item);

	}// for loop
	output(arry);
}// shuffle

/*--------------------SUPERSHUFFLE-------------*/
function superShuffle(arr,num){

	var arry = [],
	arryIndex = [],
	index,
	item,
	returnedNumbers = [],
	list = arr,
	number = (num == "" || typeof num != "number")? 1: num;

	function filterThis(a){
		let result;
		result = returnedNumbers.some(function(elem){
			return elem == a;
		});
		if(result == false){
			return a;
		}
	}

	for( let x = 0; x < number ; x++){

		list = (round(1) === 1)? list.reverse(): list;

		for( let i = 0 ; i < list.length; i++){
			arryIndex[i] = i+1;
		}



		for( let i = 0; i < list.length; i++){


			index = arryIndex[round(arryIndex.length-1)];



			returnedNumbers.push(index);
			arryIndex = arryIndex.filter(filterThis);
			item = list[index-1];
			arry.push(item);

		}// for loop i < list.length

		list = arry;
		arry = [];
		arryIndex = [];
		returnedNumbers = [];

	}//for loop x < number
	output(list);
}// superShuffle

_qs("button").onclick = function(){
	if (bool == false){
		output(arr2);
		bool = true;
	}
superShuffle(arr2,5);

}
