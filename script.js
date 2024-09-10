let inputBox = document.querySelector('.add-item__input-box')
let addItemBtn = document.querySelector('.add-item__btn')
let toDoList = document.querySelector('.list__container')



function addListItem() {
	if (inputBox.value === '' ) {
		alert('you must type in a task')
	} else {
		let li = document.createElement('li');
		li.innerHTML = inputBox.value;
		toDoList.appendChild(li)
		let span = document.createElement('span')
		span.innerHTML = '\u00d7';
		li.appendChild(span)
	}
	inputBox.value = ''
	saveData()
}

toDoList.addEventListener('click', function(e) {
	if(e.target.tagName === 'LI'){
		e.target.classList.toggle('checked');
		saveData()
	} 
	else if(e.target.tagName === 'SPAN'){
		e.target.parentElement.remove();
		saveData()
	}
}, false)

function saveData() {
	localStorage.setItem('to-do-list-data', toDoList.innerHTML);
}

function showTask() {
	toDoList.innerHTML = localStorage.getItem('to-do-list-data')
}
showTask()

addItemBtn.addEventListener('click', () => {
	addListItem()
})
