"use strict"

let input = document.querySelector(".input")
let button = document.querySelector(".button")
let list = document.querySelector(".list")
let clear = document.querySelector(".button-clear")
let deleteModal = document.querySelector(".delete__modal")


let itemsArray = [];
let saving = JSON.parse(localStorage.getItem("data"))





	// Проверка на наличие сохраненных элементов 

if(localStorage.getItem('data')!=undefined){
	itemsArray = saving
	for (let i = 0; i<saving.length;i++){
		
	let addlist = document.createElement('li')
	addlist.innerHTML = saving[i]
	list.appendChild(addlist)	

	dellists(addlist);
	donelists(addlist);

	}

	
}else{
	itemsArray = [];
	localStorage.clear();
}



	//  Функция добавления нового элемента

function addElem(){

	let addlist = document.createElement('li')
	addlist.innerHTML = input.value
	list.appendChild(addlist)

	dellists(addlist);
	donelists(addlist);
	
}


	// Функция удаления каждого элемента 

function dellists(value,index) {

	let dellist = document.createElement("div")
	dellist.className = "dellist"
	value.appendChild(dellist)
	dellist.innerHTML ="&#10006;"


	dellist.addEventListener("click", function(){
		list.removeChild(value)
		
	})	
}

	// Функция для отметки выполненных дел

function donelists(value) {

	let donelist = document.createElement("div")
	donelist.className = "donelist"
	value.appendChild(donelist)
	donelist.innerHTML ="&#10004;"

	

	donelist.addEventListener("click", function(){
		
		value.style.backgroundColor = "#98FB98";
		value.removeChild(donelist)
	})
}



	// Кнопка добавления элементов

button.addEventListener("click", function(){
	
	if(input.value != ""){

		addElem()

		itemsArray.push(input.value)
		localStorage.setItem("data", JSON.stringify(itemsArray))

		button.classList.remove("jump")
		input.value = ""
	}else{
		input.value = ""
	}
	
})


	// Кнопка полной очистки 

clear.addEventListener ("click",function(){

	let buttonYes = document.querySelector(".button__yes")
	let buttonNo = document.querySelector(".button__no")

	deleteModal.classList.add('delete__modal-block')
	
	buttonYes.addEventListener('click',function(){
		list.innerHTML = ""
		button.classList.add("jump")
		localStorage.clear();
		itemsArray = [];
		deleteModal.classList.remove('delete__modal-block')
	})

	buttonNo.addEventListener('click',function(){
		deleteModal.classList.remove('delete__modal-block')
	})
	
		
})
