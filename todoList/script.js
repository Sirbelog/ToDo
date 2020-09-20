"use strict"

let input = document.querySelector(".input")
let button = document.querySelector(".button")
let list = document.querySelector(".list")
let clear = document.querySelector(".button-clear")

function addElem(){
	let addlist = document.createElement('li')
	addlist.innerHTML = input.value
	list.appendChild(addlist)

	let dellist = document.createElement("div")
	dellist.className = "dellist"
	addlist.appendChild(dellist)
	dellist.innerHTML ="&#10006;"

	let donelist = document.createElement("div")
	donelist.className = "donelist"
	addlist.appendChild(donelist)
	donelist.innerHTML ="&#10004;"
	

	dellist.addEventListener("click", function(){
		list.removeChild(addlist)
	})

	donelist.addEventListener("click", function(){
		
			addlist.style.backgroundColor = "#98FB98";
			addlist.removeChild(donelist)

	})

	clear.addEventListener ("click",function(){
		list.removeChild(addlist)
		button.classList.add("jump")
	})
}



button.addEventListener("click", function(){
	if(input.value != ""){
		addElem()
		button.classList.remove("jump")
		input.value = ""
	}else{
		input.value = " "
	}
})


	
